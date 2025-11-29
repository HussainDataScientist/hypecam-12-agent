/* GENERATED_BY: Antigravity BackendStubAgent */
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const interval = setInterval(() => {
        const data = JSON.stringify({
            wpm: 100 + Math.floor(Math.random() * 40),
            clarity: 0.8 + Math.random() * 0.2,
            fillerWords: Math.floor(Math.random() * 3)
        });
        res.write(`data: ${data}\n\n`);
    }, 2000);

    req.on('close', () => {
        clearInterval(interval);
        res.end();
    });
}
