import { getDatabase, saveDatabase, recalculateRanks, type StudentRecord } from './_lib/db.js';

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
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
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
    res.status(200).json({ success: true, students: data.students || [] });
    return;
  }

  if (req.method === 'POST') {
    try {
      const body = parseBody(req.body);
      const studentName = String(body.studentName || body.name || '').trim();
      if (!studentName || studentName.length < 2) {
        res.status(400).json({ success: false, error: 'Valid studentName is required' });
        return;
      }

      const studentId = String(body.studentId || body.id || `EXP-${Math.floor(1000 + Math.random() * 9000)}`);
      const data = await getDatabase();

      let student = data.students.find(s => s.studentId === studentId || s.studentName.toLowerCase() === studentName.toLowerCase());
      if (student) {
        student.studentName = studentName;
        student.lastActive = new Date().toISOString();
        if (body.school) student.school = body.school;
        if (body.district) student.district = body.district;
        if (body.classGrade) student.classGrade = body.classGrade;
        if (body.stream) student.stream = body.stream;
        if (body.status) student.status = body.status;
      } else {
        student = {
          studentId,
          studentName,
          registeredAt: body.registeredAt || new Date().toISOString(),
          lastActive: new Date().toISOString(),
          school: body.school || '12th Standard',
          district: body.district || '',
          classGrade: body.classGrade || '12th',
          stream: body.stream || '',
          status: body.status || 'Active in Session ⚡',
          quizScore: 0,
          quizTotal: 15,
          quizPercentage: 0,
          promptScore: 0,
          totalScore: 0
        };
        data.students.unshift(student);
      }

      await saveDatabase(data);

      res.status(200).json({
        success: true,
        student,
        stats: data.stats
      });
    } catch (error: any) {
      console.error('API /api/students error:', error);
      res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
    }
    return;
  }

  res.status(405).json({ success: false, error: 'Method Not Allowed' });
}
