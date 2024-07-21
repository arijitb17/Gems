// pages/api/get-navbar-items.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '@clerk/nextjs/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = auth();
  res.status(200).json({ userId });
}
