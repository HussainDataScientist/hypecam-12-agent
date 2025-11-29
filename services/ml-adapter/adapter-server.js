/* GENERATED_BY: Antigravity MLAdapterAgent */
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/health') {
        res.writeHead(200);
        res.end('OK');
        return;
    }

    if (req.method === 'POST' && req.url === '/process') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            // Deterministic mock logic
            const response = {
                text: "Processed: " + body.slice(0, 10) + "...",
                confidence: 0.99
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(response));
        });
        return;
    }

    res.writeHead(404);
    res.end();
});

server.listen(3001, () => {
    console.log('ML Adapter listening on 3001');
});
