import { getDatabase, saveDatabase, type SubmissionRecord } from './_lib/db.js';

function parseBody(body: any): any {
  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch (e) {
      return {};
    }
  }
  return body || {};
}

export default async function handler(req: any, res: any) {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST,DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    const data = await getDatabase();
    res.status(200).json({ success: true, submissions: data.submissions || [] });
    return;
  }

  if (req.method === 'POST') {
    try {
      const record = parseBody(req.body);
      if (!record.type) {
        res.status(400).json({ success: false, error: 'Submission type is required' });
        return;
      }

      if (!record.id) {
        record.id = `sub_${Date.now()}_${Math.floor(100 + Math.random() * 900)}`;
      }
      if (!record.createdAt) {
        record.createdAt = new Date().toISOString();
      }

      const data = await getDatabase();
      data.submissions.unshift(record);

      // Keep up to 500 recent submissions
      if (data.submissions.length > 500) {
        data.submissions = data.submissions.slice(0, 500);
      }

      // Update student profile record
      const studentId = record.studentId;
      const studentName = record.studentName || 'Explorer';

      let student = data.students.find(s => s.studentId === studentId || s.studentName.toLowerCase() === studentName.toLowerCase());
      if (!student) {
        student = {
          studentId: studentId || `EXP-${Math.floor(1000 + Math.random() * 9000)}`,
          studentName: studentName,
          registeredAt: record.createdAt,
          lastActive: record.createdAt,
          school: record.school || '12th Standard',
          district: record.district || '',
          classGrade: record.classGrade || '12th',
          stream: record.stream || '',
          status: 'Active in Session ⚡',
          quizScore: 0,
          quizTotal: 15,
          quizPercentage: 0,
          promptScore: 0,
          totalScore: 0
        };
        data.students.unshift(student);
      }

      student.lastActive = record.createdAt;
      if (record.school) student.school = record.school;
      if (record.district) student.district = record.district;
      if (record.classGrade) student.classGrade = record.classGrade;
      if (record.stream) student.stream = record.stream;

      if (record.type === 'career_profile') {
        student.status = 'Completed Career Profile 🎯';
        if (Array.isArray(record.topMatches) && record.topMatches[0]) {
          student.careerTopMatch = record.topMatches[0].title;
          student.careerTopMatchPct = record.topMatches[0].percentage || record.topMatches[0].matchPct || 90;
        }
        student.careerDetails = {
          favSubjects: record.favSubjects,
          mathComfort: record.mathComfort,
          codingComfort: record.codingComfort,
          hobbies: record.hobbies,
          workStyle: record.workStyle,
          environmentPref: record.environmentPref,
          tenYearGoal: record.tenYearGoal,
          domainScores: record.domainScores,
          scenarioCount: Array.isArray(record.scenarioAnswers) ? record.scenarioAnswers.length : 0
        };
      } else if (record.type === 'knowledge_quiz') {
        student.status = 'Completed Knowledge Quiz 🧠';
        student.quizScore = typeof record.score === 'number' ? record.score : student.quizScore;
        student.quizTotal = record.totalQuestions || 15;
        student.quizPercentage = record.percentage || Math.round(((student.quizScore || 0) / 15) * 100);
        student.timeSeconds = record.timeSeconds || student.timeSeconds;
        student.badge = record.badge || student.badge;
        student.totalScore = (student.quizScore || 0) + (student.promptScore || 0);
      } else if (record.type === 'prompt_gym') {
        student.promptScore = typeof record.promptScore === 'number' ? record.promptScore : 5;
        student.totalScore = (student.quizScore || 0) + (student.promptScore || 0);
      }

      await saveDatabase(data);

      res.status(200).json({
        success: true,
        record,
        stats: data.stats,
        topPerformers: data.students.filter(s => s.isTopPerformer)
      });
    } catch (error: any) {
      console.error('API /api/submissions error:', error);
      res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
    }
    return;
  }

  res.status(405).json({ success: false, error: 'Method Not Allowed' });
}
