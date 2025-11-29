/* GENERATED_BY: Antigravity BackendStubAgent */
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const interval = setInterval(() => {
        const data = JSON.stringify({
            text: "This is a simulated caption " + new Date().toISOString(),
            isFinal: Math.random() > 0.8,
            confidence: 0.9 + Math.random() * 0.1,
            timestamp: Date.now()
        });
        res.write(`data: ${data}\n\n`);
    }, 1000);

    req.on('close', () => {
        clearInterval(interval);
        res.end();
    });
}
