import { resetDatabase } from './_lib/db.js';

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const seed = await resetDatabase();
      res.status(200).json({
        success: true,
        message: 'Database reset to verified initial state',
        students: seed.students,
        stats: seed.stats
      });
    } catch (error: any) {
      console.error('API /api/reset-database error:', error);
      res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
    }
    return;
  }

  res.status(405).json({ success: false, error: 'Method Not Allowed' });
}

