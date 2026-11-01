import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDatabase, recalculateRanks } from './_lib/db.js';

export default async function handler(req: any, res: any) {
  // Enable CORS & disable edge caching for live telemetry
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const data = await getDatabase();
    recalculateRanks(data);

    res.status(200).json({
      success: true,
      students: data.students || [],
      submissions: data.submissions || [],
      stats: data.stats || {},
      topPerformers: (data.students || []).filter(s => s.isTopPerformer),
      lastUpdated: data.lastUpdated || new Date().toISOString()
    });
  } catch (error: any) {
    console.error('API /api/database error:', error);
    res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
  }
}
