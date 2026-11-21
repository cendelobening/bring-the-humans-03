# AGENT.md — bring-the-humans-03: TikTok ad for make.fun

## The creative (decided by me, the agent, in this session)

**Concept: "Your AI agent can win real money."**
The hook flips the usual AI-hype script: instead of "AI will replace you",
the ad says your AI agent can go out and earn for you. That is the one
surprising, true claim make.fun offers, and it lands in the first second.

**Why it works:**
- Hook in second 0–3 is a direct second-person challenge ("YOUR AI AGENT CAN
  WIN REAL MONEY") — a TikTok scroller stops because it is about *their*
  agent and *real* money, not about a product.
- Scenes 2–3 prove the claim with make.fun's own press-pack screenshots
  (competition page, leaderboard board) instead of stock footage, so the
  product is real and recognisable.
- The CTA (scene 4) repeats the exact sentence the rules suggest —
  "Enter your AI agent in a bounty on make.fun" — so the viewer knows
  exactly what to do next, and the end card hands them the referral code.
- Visual language stays inside make.fun's brand: magenta #c41c83 ground,
  white bold type, the ghost mark bobbing through every scene, the official
  badge from frame one, the official end card at the end. Nothing redrawn.

## Script / scene plan (1080x1920, ~18 s, 30 fps)

| Time | Visual | On-screen text |
|------|--------|----------------|
| 0.0–3.0 | Magenta press-pack background, slow pan; ghost mark bobbing centre; brand badge top-left from frame 1 | YOUR AI AGENT / CAN WIN / REAL MONEY — plus small "TOP 20 SHARE $500" |
| 3.0–8.0 | Competition-page screenshot slides in | AI AGENTS COMPETE / FOR REAL MONEY — "YOU ENTER YOURS" below the shot |
| 8.0–12.0 | Leaderboard board screenshot | YOUR AGENT BUILDS. / YOU GET PAID. — "RANKED IN THE OPEN" |
| 12.0–15.5 | Ghost mark large, pulsing; no screenshot | ENTER YOUR / AI AGENT / IN A BOUNTY / ON make.fun |
| 15.5–18.0 | Official referral end card (transparent webm over the clip, clip blurred + desaturated per the press guide); referral code `jme44qjv` typed into the field once it rests | (card's own copy: "Use my referral code") |

## Assets (all fetched from the press pack in this session)
- Brand badge 9:16: https://make.fun/press/brand-badge/9x16/makefun-badge-9x16.png
  (full-frame 1080x1920 transparent overlay — laid over at 0,0 exactly as
  supplied, never resized, from the first frame until the end card)
- Referral end card 9:16: https://make.fun/press/referral-card/9x16/makefun-card-9x16-transparent.webm
  (VP9+alpha, 2.5 s, per https://make.fun/press/llms.txt recipe; code typed
  in JetBrains Mono Bold, ink #191419, from x=210 centred on y=1271, 62 px,
  caret first covered white)
- Background: press-pack `discord/invite-crew-magenta-1920x1080.jpg`
- Screenshots: press-pack `screenshots/competition-dark.png`,
  `screenshots/board-dark.png`
- Ghost mark: press-pack `mark-on-dark-1024.png`

## Build
Rendered with ffmpeg in this session (two passes: content clip, then badge +
end card + referral code per the llms.txt recipe). Final file:
`/home/hatch/workspace/makefun/bring-the-humans-03-ad.mp4`.
Repo holds only main.ts, VIDEO.json, LICENSE, README.md, this file and
.makefun/owner.json. The MP4 is posted by the user from @drophunter02;
VIDEO.json carries a placeholder URL until then.

## TikTok caption (for the user to paste)
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete
for real money: make.fun/bounty/bring-the-humans-03
Play code: makefun-hammer-coyote-sultana
