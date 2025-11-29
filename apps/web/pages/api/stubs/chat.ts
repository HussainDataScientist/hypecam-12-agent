/* GENERATED_BY: Antigravity BackendStubAgent */
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const interval = setInterval(() => {
        const data = JSON.stringify({
            id: "msg_" + Date.now(),
            role: "assistant",
            content: "Great pacing! Keep it up.",
            timestamp: Date.now()
        });
        res.write(`data: ${data}\n\n`);
    }, 5000);

    req.on('close', () => {
        clearInterval(interval);
        res.end();
    });
}
