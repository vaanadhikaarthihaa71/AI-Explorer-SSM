import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

export interface StudentRecord {
  studentId: string;
  studentName: string;
  registeredAt: string;
  lastActive: string;
  school?: string;
  district?: string;
  classGrade?: string;
  stream?: string;
  status: string;
  quizScore?: number;
  quizTotal?: number;
  quizPercentage?: number;
  timeSeconds?: number;
  badge?: string;
  promptScore?: number;
  totalScore?: number;
  rank?: number;
  isTopPerformer?: boolean;
  careerTopMatch?: string;
  careerTopMatchPct?: number;
  careerDetails?: any;
}

export interface SubmissionRecord {
  id: string;
  type: string;
  studentId: string;
  studentName: string;
  createdAt: string;
  score?: number;
  totalQuestions?: number;
  percentage?: number;
  timeSeconds?: number;
  timeFormatted?: string;
  badge?: string;
  school?: string;
  district?: string;
  classGrade?: string;
  stream?: string;
  favSubjects?: string[];
  mathComfort?: number;
  codingComfort?: number;
  hobbies?: string[];
  careerPriorities?: string[];
  workStyle?: string;
  environmentPref?: string;
  planAfter12th?: string;
  tenYearGoal?: string;
  topMatches?: any[];
  profileAnalysis?: any;
  domainScores?: Record<string, number>;
  scenarioAnswers?: any[];
  answersSummary?: any[];
  rank?: number;
  isTopPerformer?: boolean;
  [key: string]: any;
}

export interface DatabaseSchema {
  students: StudentRecord[];
  submissions: SubmissionRecord[];
  createdAt: string;
  lastUpdated: string;
  stats?: any;
}

const DB_DIR = path.resolve(process.cwd(), 'data');
const DB_FILE = path.resolve(DB_DIR, 'database.json');

const INITIAL_SEED_STUDENTS: StudentRecord[] = [
  {
    studentId: "EXP-8472",
    studentName: "Priya Sharma",
    registeredAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    lastActive: new Date(Date.now() - 1000 * 60 * 20).toISOString(),
    school: "Kendriya Vidyalaya",
    district: "Dindigul",
    classGrade: "12th",
    stream: "PCM",
    status: "Completed All Phases",
    quizScore: 14,
    quizTotal: 15,
    quizPercentage: 93,
    timeSeconds: 184,
    badge: "AI Champion 🏆",
    promptScore: 5,
    totalScore: 19,
    rank: 1,
    isTopPerformer: true,
    careerTopMatch: "Artificial Intelligence & ML Engineer",
    careerTopMatchPct: 95
  },
  {
    studentId: "EXP-3190",
    studentName: "Arjun Verma",
    registeredAt: new Date(Date.now() - 1000 * 60 * 40).toISOString(),
    lastActive: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    school: "SSMIET Matric School",
    district: "Dindigul",
    classGrade: "12th",
    stream: "PCB",
    status: "Completed Knowledge Quiz",
    quizScore: 13,
    quizTotal: 15,
    quizPercentage: 87,
    timeSeconds: 195,
    badge: "AI Explorer Pro 🌟",
    promptScore: 4,
    totalScore: 17,
    rank: 2,
    isTopPerformer: true,
    careerTopMatch: "Biomedical & AI Health Systems",
    careerTopMatchPct: 91
  },
  {
    studentId: "EXP-5521",
    studentName: "Karthik Sundaram",
    registeredAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    lastActive: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
    school: "St. Joseph's HSS",
    district: "Madurai",
    classGrade: "12th",
    stream: "PCMB",
    status: "Completed Knowledge Quiz",
    quizScore: 12,
    quizTotal: 15,
    quizPercentage: 80,
    timeSeconds: 210,
    badge: "AI Explorer Pro 🌟",
    promptScore: 5,
    totalScore: 17,
    rank: 3,
    isTopPerformer: true,
    careerTopMatch: "Cybersecurity & Neural Defense",
    careerTopMatchPct: 88
  },
  {
    studentId: "EXP-9042",
    studentName: "Ananya Rao",
    registeredAt: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
    lastActive: new Date(Date.now() - 1000 * 60 * 2).toISOString(),
    school: "Vidyodaya Higher Secondary School",
    district: "Chennai",
    classGrade: "12th",
    stream: "Commerce with Maths",
    status: "Exploring AI Tools",
    quizScore: 0,
    quizTotal: 15,
    quizPercentage: 0,
    promptScore: 4,
    totalScore: 4,
    rank: 4,
    isTopPerformer: false,
    careerTopMatch: "Fintech & Algorithmic Trading",
    careerTopMatchPct: 86
  }
];

const INITIAL_SEED_SUBMISSIONS: SubmissionRecord[] = [
  {
    id: "sub_seed_1",
    type: "career_profile",
    studentId: "EXP-8472",
    studentName: "Priya Sharma",
    createdAt: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
    school: "Kendriya Vidyalaya",
    district: "Dindigul",
    classGrade: "12th",
    stream: "PCM",
    favSubjects: ["Computer Science", "Mathematics", "Physics"],
    mathComfort: 4,
    codingComfort: 4,
    hobbies: ["building gadgets", "gaming", "solving puzzles"],
    careerPriorities: ["good salary", "creativity"],
    workStyle: "mix",
    environmentPref: "desk and computer work",
    planAfter12th: "Engineering degree",
    tenYearGoal: "Lead a high-scale autonomous robotics or AI infrastructure company in India.",
    domainScores: { ai: 14, dev: 12, hw: 9, sec: 8, cloud: 7, data: 6, design: 5, xr: 4 },
    topMatches: [
      {
        id: "ai",
        title: "Artificial Intelligence & ML Engineer",
        emoji: "🧠",
        score: 14,
        percentage: 95,
        why: "High math and coding comfort combined with a passion for software algorithms and data logic.",
        whyResistant: "Requires verifying model safety, designing custom architectures, and evaluating training data for real-world biases.",
        skills: "Python, Linear Algebra, PyTorch, Model Evaluation, Data Pipelines, AI Ethics",
        firstSteps: [
          "Learn Python syntax and data handling with NumPy and Pandas.",
          "Train your first image classification model on Kaggle or Google Colab.",
          "Join an open-source AI community or participate in a high school hackathon."
        ],
        roadmapTab: "resistant"
      },
      {
        id: "dev",
        title: "Full-Stack Software Engineer",
        emoji: "💻",
        score: 12,
        percentage: 88,
        why: "Strong programming aptitude and preference for building scalable digital tools.",
        whyResistant: "Translating human business ambiguity into maintainable architectures requires deep human engineering empathy.",
        skills: "TypeScript, React, Node.js, SQL, REST APIs, Git",
        firstSteps: [
          "Build and deploy your first interactive web portfolio.",
          "Learn Git and contribute code to a student open-source project."
        ],
        roadmapTab: "resistant"
      },
      {
        id: "hw",
        title: "Robotics & Hardware Engineer",
        emoji: "🤖",
        score: 9,
        percentage: 76,
        why: "Enjoys tinkering with physical gadgets and sensor electronics.",
        whyResistant: "Physical world edge cases, analog noise, and real-world mechanical tolerances cannot be simulated by LLMs alone.",
        skills: "C/C++, Arduino, ROS, Sensors, Circuit Design, Mechatronics",
        firstSteps: [
          "Order an Arduino starter kit and build an obstacle-avoiding bot.",
          "Learn basic circuit schematic reading and soldering safety."
        ],
        roadmapTab: "resistant"
      }
    ],
    profileAnalysis: {
      strengths: "High quantitative comfort, logical deduction, and ability to handle complex computational abstractions.",
      skillsToBuild: "Explore cloud deployment pipelines and PyTorch machine learning models.",
      backupPath: "Cloud Infrastructure & DevOps Engineer"
    },
    consent: true
  },
  {
    id: "sub_seed_2",
    type: "knowledge_quiz",
    studentId: "EXP-8472",
    studentName: "Priya Sharma",
    createdAt: new Date(Date.now() - 1000 * 60 * 20).toISOString(),
    score: 14,
    totalQuestions: 15,
    percentage: 93,
    timeSeconds: 184,
    timeFormatted: "03:04",
    badge: "AI Champion 🏆",
    wrongAnswersCount: 1,
    school: "Kendriya Vidyalaya",
    rank: 1,
    isTopPerformer: true
  },
  {
    id: "sub_seed_3",
    type: "career_profile",
    studentId: "EXP-3190",
    studentName: "Arjun Verma",
    createdAt: new Date(Date.now() - 1000 * 60 * 28).toISOString(),
    school: "SSMIET Matric School",
    district: "Dindigul",
    classGrade: "12th",
    stream: "PCB",
    favSubjects: ["Biology", "Chemistry"],
    mathComfort: 3,
    codingComfort: 1,
    hobbies: ["helping people", "drawing/design"],
    careerPriorities: ["helping society", "job stability"],
    workStyle: "mix",
    environmentPref: "field and hands-on work",
    planAfter12th: "Engineering degree",
    tenYearGoal: "Develop smart biosensors to make cancer diagnosis affordable in rural clinics.",
    domainScores: { bio: 15, design: 8, data: 6, ai: 5, dev: 3 },
    topMatches: [
      {
        id: "bio",
        title: "Biomedical & AI Health Systems",
        emoji: "🧬",
        score: 15,
        percentage: 91,
        why: "High passion for biology and helping society paired with modern clinical diagnostics.",
        whyResistant: "Direct patient clinical oversight, medical device validation, and surgical ethics cannot be automated by text models.",
        skills: "Bioinformatics, Medical Imaging, Signal Processing, Regulatory Compliance",
        firstSteps: [
          "Study anatomy and physiology alongside basic Python data analysis.",
          "Explore how wearable ECG and pulse oximeter sensors collect biometric data."
        ],
        roadmapTab: "resistant"
      }
    ],
    profileAnalysis: {
      strengths: "Creative user empathy, visual communication, and human-centric design intuition.",
      skillsToBuild: "Start with Python basics (variables, loops, and simple scripts) on Replit.",
      backupPath: "Healthcare Informatics Specialist"
    },
    consent: true
  },
  {
    id: "sub_seed_4",
    type: "knowledge_quiz",
    studentId: "EXP-3190",
    studentName: "Arjun Verma",
    createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    score: 13,
    totalQuestions: 15,
    percentage: 87,
    timeSeconds: 195,
    timeFormatted: "03:15",
    badge: "AI Explorer Pro 🌟",
    wrongAnswersCount: 2,
    school: "SSMIET Matric School",
    rank: 2,
    isTopPerformer: true
  },
  {
    id: "sub_seed_5",
    type: "knowledge_quiz",
    studentId: "EXP-5521",
    studentName: "Karthik Sundaram",
    createdAt: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
    score: 12,
    totalQuestions: 15,
    percentage: 80,
    timeSeconds: 210,
    timeFormatted: "03:30",
    badge: "AI Explorer Pro 🌟",
    wrongAnswersCount: 3,
    school: "St. Joseph's HSS",
    rank: 3,
    isTopPerformer: true
  }
];

export function ensureDbFile(): DatabaseSchema {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
  if (!fs.existsSync(DB_FILE)) {
    const initialData: DatabaseSchema = {
      students: INITIAL_SEED_STUDENTS,
      submissions: INITIAL_SEED_SUBMISSIONS,
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    };
    recalculateRanks(initialData);
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf8');
    return initialData;
  }

  try {
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    const data: DatabaseSchema = JSON.parse(raw);
    if (!Array.isArray(data.students)) data.students = [];
    if (!Array.isArray(data.submissions)) data.submissions = [];
    return data;
  } catch (err) {
    console.error('Error reading database file, reinitializing:', err);
    const initialData: DatabaseSchema = {
      students: INITIAL_SEED_STUDENTS,
      submissions: INITIAL_SEED_SUBMISSIONS,
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    };
    recalculateRanks(initialData);
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf8');
    return initialData;
  }
}

export function writeDb(data: DatabaseSchema) {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
  data.lastUpdated = new Date().toISOString();
  recalculateRanks(data);
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
}

export function recalculateRanks(data: DatabaseSchema) {
  if (!Array.isArray(data.students)) data.students = [];
  if (!Array.isArray(data.submissions)) data.submissions = [];

  // Sort students by quizScore descending, then totalScore, then timeSeconds ascending
  data.students.sort((a, b) => {
    const scoreA = typeof a.quizScore === 'number' ? a.quizScore : 0;
    const scoreB = typeof b.quizScore === 'number' ? b.quizScore : 0;
    if (scoreB !== scoreA) return scoreB - scoreA;

    const totalA = typeof a.totalScore === 'number' ? a.totalScore : scoreA;
    const totalB = typeof b.totalScore === 'number' ? b.totalScore : scoreB;
    if (totalB !== totalA) return totalB - totalA;

    const timeA = typeof a.timeSeconds === 'number' ? a.timeSeconds : 9999;
    const timeB = typeof b.timeSeconds === 'number' ? b.timeSeconds : 9999;
    if (timeA !== timeB) return timeA - timeB;

    return new Date(a.registeredAt || 0).getTime() - new Date(b.registeredAt || 0).getTime();
  });

  data.students.forEach((s, idx) => {
    s.rank = idx + 1;
    s.isTopPerformer = (idx < 3) && ((s.quizScore || 0) > 0);
  });

  // Calculate statistics
  const totalStudents = data.students.length;
  const totalSubmissions = data.submissions.length;
  const careerSubs = data.submissions.filter(s => s.type === 'career_profile');
  const quizSubs = data.submissions.filter(s => s.type === 'knowledge_quiz');
  
  const totalQuizScore = quizSubs.reduce((acc, curr) => acc + (curr.score || 0), 0);
  const avgQuizScore = quizSubs.length > 0 ? (totalQuizScore / quizSubs.length).toFixed(1) : "0";
  const avgQuizPct = quizSubs.length > 0 ? Math.round((totalQuizScore / (quizSubs.length * 15)) * 100) : 0;

  // Find top career domain
  const domainCounts: Record<string, number> = {};
  careerSubs.forEach(c => {
    if (Array.isArray(c.topMatches) && c.topMatches[0] && c.topMatches[0].title) {
      const title = c.topMatches[0].title;
      domainCounts[title] = (domainCounts[title] || 0) + 1;
    }
  });

  let topDomain = "-";
  let topDomainCount = 0;
  Object.entries(domainCounts).forEach(([title, count]) => {
    if (count > topDomainCount) {
      topDomain = title;
      topDomainCount = count;
    }
  });

  const topPerformer = data.students.find(s => s.isTopPerformer) || null;

  data.stats = {
    totalStudents,
    totalSubmissions,
    careerCount: careerSubs.length,
    quizCount: quizSubs.length,
    avgQuizScore: Number(avgQuizScore),
    avgQuizPct,
    topDomain,
    topDomainCount,
    topPerformer
  };
}

function parseBody(req: any): Promise<any> {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', (chunk: any) => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        resolve({});
      }
    });
  });
}

function sendJson(res: any, data: any, status = 200) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.end(JSON.stringify(data));
}

export function databaseApiPlugin(): Plugin {
  return {
    name: 'database-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        const method = req.method || 'GET';

        if (method === 'OPTIONS') {
          return sendJson(res, { ok: true });
        }

        // Route /admin and /admin/ to /admin.html in dev server
        if (url === '/admin' || url === '/admin/') {
          req.url = '/admin.html';
          return next();
        }

        // GET /api/database or GET /api/submissions
        if (url === '/api/database' || url === '/api/submissions') {
          if (method === 'GET') {
            const data = ensureDbFile();
            recalculateRanks(data);
            return sendJson(res, {
              success: true,
              students: data.students,
              submissions: data.submissions,
              stats: data.stats,
              topPerformers: data.students.filter(s => s.isTopPerformer),
              lastUpdated: data.lastUpdated
            });
          }

          if (method === 'POST') {
            const body = await parseBody(req);
            const data = ensureDbFile();

            const submissionId = body.id || `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
            const submission: SubmissionRecord = {
              ...body,
              id: submissionId,
              createdAt: body.createdAt || new Date().toISOString()
            };

            // Upsert submission
            const existingIdx = data.submissions.findIndex(s => s.id === submission.id);
            if (existingIdx > -1) {
              data.submissions[existingIdx] = submission;
            } else {
              data.submissions.unshift(submission);
            }

            // Sync with student record
            const studentId = submission.studentId;
            const studentName = submission.studentName;

            let student = data.students.find(s => s.studentId === studentId || (studentName && s.studentName.toLowerCase() === studentName.toLowerCase()));

            if (!student) {
              student = {
                studentId: studentId || `EXP-${Math.floor(1000 + Math.random() * 9000)}`,
                studentName: studentName || "Explorer",
                registeredAt: submission.createdAt,
                lastActive: new Date().toISOString(),
                status: "Active in Workshop",
                quizScore: 0,
                quizTotal: 15,
                quizPercentage: 0,
                totalScore: 0
              };
              data.students.unshift(student);
            }

            student.lastActive = new Date().toISOString();
            if (submission.studentName) student.studentName = submission.studentName;
            if (submission.school) student.school = submission.school;
            if (submission.district) student.district = submission.district;
            if (submission.classGrade) student.classGrade = submission.classGrade;
            if (submission.stream) student.stream = submission.stream;

            if (submission.type === 'career_profile') {
              student.status = "Completed Career Profile 🎯";
              student.careerDetails = submission;
              if (Array.isArray(submission.topMatches) && submission.topMatches[0]) {
                student.careerTopMatch = submission.topMatches[0].title;
                student.careerTopMatchPct = submission.topMatches[0].percentage || submission.topMatches[0].matchPct;
              }
            } else if (submission.type === 'knowledge_quiz') {
              student.status = "Completed Knowledge Quiz 🏆";
              student.quizScore = submission.score || 0;
              student.quizTotal = submission.totalQuestions || 15;
              student.quizPercentage = submission.percentage || Math.round(((submission.score || 0) / 15) * 100);
              student.timeSeconds = submission.timeSeconds;
              student.badge = submission.badge;
              student.totalScore = (student.quizScore || 0) + (student.promptScore || 0);
            } else if (submission.type === 'prompt_gym') {
              student.promptScore = submission.promptScore || 0;
              student.totalScore = (student.quizScore || 0) + (student.promptScore || 0);
            } else if (submission.type === 'student_registered') {
              student.status = "Joined Workshop ⚡";
            }

            writeDb(data);

            return sendJson(res, {
              success: true,
              submissionId,
              student,
              stats: data.stats,
              topPerformers: data.students.filter(s => s.isTopPerformer)
            }, 201);
          }
        }

        // POST /api/students (Live registration when name is typed/card drawn)
        if (url === '/api/students') {
          if (method === 'POST') {
            const body = await parseBody(req);
            const data = ensureDbFile();

            const studentName = (body.studentName || body.name || '').trim();
            const studentId = body.studentId || body.id || `EXP-${Math.floor(1000 + Math.random() * 9000)}`;

            if (!studentName) {
              return sendJson(res, { error: "Student name is required" }, 400);
            }

            let student = data.students.find(s => s.studentId === studentId || s.studentName.toLowerCase() === studentName.toLowerCase());

            if (!student) {
              student = {
                studentId,
                studentName,
                registeredAt: new Date().toISOString(),
                lastActive: new Date().toISOString(),
                status: "Joined Workshop ⚡",
                quizScore: 0,
                quizTotal: 15,
                quizPercentage: 0,
                totalScore: 0
              };
              data.students.unshift(student);

              // Also create a registration submission log
              data.submissions.unshift({
                id: `sub_reg_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
                type: "student_registered",
                studentId,
                studentName,
                createdAt: new Date().toISOString(),
                status: "Joined Workshop ⚡"
              });
            } else {
              student.lastActive = new Date().toISOString();
              student.studentName = studentName;
            }

            writeDb(data);

            return sendJson(res, {
              success: true,
              student,
              stats: data.stats,
              topPerformers: data.students.filter(s => s.isTopPerformer)
            });
          }

          if (method === 'GET') {
            const data = ensureDbFile();
            recalculateRanks(data);
            return sendJson(res, {
              success: true,
              students: data.students,
              topPerformers: data.students.filter(s => s.isTopPerformer)
            });
          }
        }

        // GET /api/top-performers
        if (url === '/api/top-performers' && method === 'GET') {
          const data = ensureDbFile();
          recalculateRanks(data);
          const topPerformers = data.students.filter(s => s.isTopPerformer || (s.rank && s.rank <= 3));
          return sendJson(res, {
            success: true,
            topPerformers,
            topScorer: topPerformers[0] || null
          });
        }

        // DELETE /api/submissions/:id
        if (url?.startsWith('/api/submissions/') && method === 'DELETE') {
          const subId = url.replace('/api/submissions/', '');
          const data = ensureDbFile();
          data.submissions = data.submissions.filter(s => s.id !== subId);
          writeDb(data);
          return sendJson(res, { success: true, deletedId: subId, stats: data.stats });
        }

        // POST /api/reset-database
        if (url === '/api/reset-database' && method === 'POST') {
          const initialData: DatabaseSchema = {
            students: INITIAL_SEED_STUDENTS,
            submissions: INITIAL_SEED_SUBMISSIONS,
            createdAt: new Date().toISOString(),
            lastUpdated: new Date().toISOString()
          };
          writeDb(initialData);
          return sendJson(res, { success: true, message: "Database reset to verified initial state" });
        }

        next();
      });
    }
  };
}
