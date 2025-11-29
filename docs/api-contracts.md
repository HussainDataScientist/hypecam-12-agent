/* GENERATED_BY: Antigravity BackendStubAgent */

# API Contracts

## Captions Stream (SSE)
- **URL**: \`/api/stubs/captions\`
- **Method**: GET
- **Event**: \`message\`
- **Payload**:
\`\`\`json
{
  "text": "Hello world",
  "isFinal": false,
  "confidence": 0.98,
  "timestamp": 1620000000000
}
\`\`\`

## Chat Stream (SSE)
- **URL**: \`/api/stubs/chat\`
- **Method**: GET
- **Event**: \`message\`
- **Payload**:
\`\`\`json
{
  "id": "msg_123",
  "role": "assistant",
  "content": "Try speaking slower.",
  "timestamp": 1620000000000
}
\`\`\`

## Metrics Stream (SSE)
- **URL**: \`/api/stubs/metrics\`
- **Method**: GET
- **Event**: \`message\`
- **Payload**:
\`\`\`json
{
  "wpm": 120,
  "clarity": 0.85,
  "fillerWords": 2
}
\`\`\`
