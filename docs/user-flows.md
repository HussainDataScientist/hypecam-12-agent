/* GENERATED_BY: Antigravity UXAgent */

# User Flows

## 1. Practice Session Start
- User lands on /practice
- Checks camera preview
- Clicks "Start Session"
- Countdown 3-2-1
- Session Active

## 2. Live Feedback
- User speaks
- Captions appear in real-time (CaptionPill)
- AI Chat provides tips (ChatPanel)

## 3. End Session
- User clicks "End"
- Summary modal appears
- Redirects to Review page

## Failure Scenarios
1. Camera permission denied -> Show ErrorState
2. Network disconnect -> Show "Reconnecting..." toast
3. Audio too quiet -> Show "Speak louder" hint
4. AI Service down -> Fallback to local recording
5. Browser unsupported -> Show "Use Chrome/Safari"
