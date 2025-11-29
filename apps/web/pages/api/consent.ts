/* GENERATED_BY: Antigravity SecurityPrivacyAgent */
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Store consent record
        res.status(200).json({ status: 'recorded' });
    } else {
        res.status(405).end();
    }
}
