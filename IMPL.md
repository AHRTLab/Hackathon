# IMPL

## Resume (2026-11-04, Personal; all three sites done, Hackathon #17 merging)

Brief: `~/.local/state/fleet-orchestrator/task-site-deslop.src` (Hackathon, then talks, then
fleet-briefing). This branch `polish/site-deslop`, worktree `.claude/worktrees/polish`.
`gh` defaults to upstream AHRTLab: pass `-R ajbarea/Hackathon`. Helper scripts and old reports:
`~/.local/state/fleet-orchestrator/site-polish/` (audit.py; the others hard-code an old session's
scratch path in `S=`, so edit that line before reuse).

### Status
- ✅ fleet-briefing PR #6 merged 11-03 (round 1 + verify clean); klepsydra#306 filed (sync skips done/).
- ✅ talks PR #77 merged 11-04, Pages deploy green, live `shared/deck.js` carries the fix. Final verify
  CLEAN with 3 nits: N2 fixed in the PR body, N1 (Safari Tab check) and N3 (speaker-view reload, rail)
  filed as talks#78 (label accessibility; issue types are not offered on user-owned repos).
- 🔄 Hackathon issue #16, PR #17 (assigned ajbarea, CI build green, 0 comments, 0 reviews).
  - Rounds 1-3 and their fixes: see the PR's details section and git log.
  - Final verify on 1bde1eb: NOT CLEAN, S1 (keys-paused e2e vacuous: bridge still active during the
    hold, and keys.ts ignores keys in the dialog) and N1 (no test for keyup always releasing).
  - ✅ 6b4bb89 fixes both in m4.spec.ts: blur to body plus a bridge-idle wait before the W hold; a new
    e2e for a key released in a text field or the open form.
  - ✅ 6b4bb89 measured (mut17 in the 8def2bee scratch): unit 65; m4 e2e 4/4 on Google Chrome; pause
    mutant (main.ts paused off) fails at m4:84; release mutant (keys.ts line removed) fails at m4:131.
  - ✅ Verify pass on 6b4bb89 (fresh Opus, stopped at the account move after 1 finding; report copied
    to `~/.local/state/fleet-orchestrator/site-polish/verify-h17-r2.md`): S1 the form half of the new
    release test kills its mutant only by racing the box at x=2.5 (with +0.4 s latency the robot is
    pinned and the `dlg` mutant survives). Mutant `dlg`: keys.ts:22 ->
    `if (!down && !inDialog(e)) held[k] = false;`.
  - ✅ aa83abc fixes S1: each case clicks Reset, drives with S (reverse, ~4.7 m of open floor at y=0),
    and `drift()` asserts x > -3.6 at window start.
  - ✅ aa83abc measured 11-04 (harness and logs in the 918d417d scratch, mut18/): unit 65; m4 e2e 4/4
    on Google Chrome; `dlg` and release mutants fail at +0/+400/+800 ms before keyup (drift 0.96 m);
    the unmutated test passes with +800 ms.
  - ✅ Verify pass on aa83abc CLEAN (0 Blocking, 0 Should-fix, 1 Nit; report copied to
    `~/.local/state/fleet-orchestrator/site-polish/verify-h17-r3.md`). Nit (x0 read before the
    bridge-idle wait) fixed in 61b115b; measured: unit 65, m4 4/4, pause mutant fails at m4:84.
  - ✅ PR body: one line on the mutant checks. Squash-merge #17, then the Pages check (site, /deck/, /sim/).

### Left as is
Theme or organizers' pages: axe `region` on Material's progress bar, `landmark-unique` on BRIEF's
code nav, slide 1 image text (the deck as presented). Bundled Chromium fails m2/m4 sliders on main
too; Google Chrome is the repo's engine.
