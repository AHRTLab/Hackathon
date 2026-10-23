// AWARE-AI hackathon deck: editable shapes and text, every number from deck-data.json (harvest.py).
const pptxgen = require("pptxgenjs");
const fs = require("fs");
const { applyTheme } = require("/Users/ajbarea/.claude/skills/synced/5172a3bf-d74e-4342-9f1c-b49a02c44fb0_96130a18-106b-49a2-9b8e-a0b4d52aa214/pptx/scripts/apply_theme.js");

const D = JSON.parse(fs.readFileSync(__dirname + "/deck-data.json", "utf8"));
const OUT = process.argv[2] || __dirname + "/AWARE-AI-team-deck.pptx";

// Okabe-Ito marks (colour-blind safe); text colours clear 7:1 on their surface.
const HEX = { ink: "16202A", muted: "3D4652", paper: "FFFFFF", card: "EEF2F6", night: "14202B",
              nightText: "FFFFFF", nightMuted: "C9D3DD", blue: "0072B2", orange: "E69F00",
              verm: "D55E00", green: "009E73", sky: "56B4E9", line: "8A95A3" };
const THEME = { name: "Lever", headFontFace: "Arial", bodyFontFace: "Arial",
  colors: { dk1: HEX.ink, lt1: HEX.paper, dk2: HEX.night, lt2: HEX.card, accent1: HEX.blue, accent2: HEX.orange,
            accent3: HEX.green, accent4: HEX.verm, accent5: HEX.sky, accent6: HEX.line, hlink: HEX.blue, folHlink: HEX.muted } };

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";                       // 10 x 5.625 in
pres.title = "Driving a robot with one forearm";
pres.author = "AJ";
pres.theme = { headFontFace: "Arial", bodyFontFace: "Arial" };
const W = 10, H = 5.625, M = 0.5;
const fmt = (x, d = 2) => Number(x).toFixed(d);
const pct = (x) => `${Math.round(x * 100)}%`;

pres.defineSlideMaster({ title: "CONTENT", background: { color: HEX.paper },
  objects: [
    { placeholder: { options: { name: "kicker", type: "body", x: M, y: 0.22, w: 9, h: 0.32, fontSize: 14, color: HEX.muted,
                                bold: true, margin: 0 }, text: "" } },
    { placeholder: { options: { name: "title", type: "title", x: M, y: 0.5, w: 9, h: 0.75, fontSize: 26, bold: true,
                                color: HEX.ink, valign: "top", align: "left", margin: 0 }, text: "" } },
  ], slideNumber: { x: 9.3, y: 5.2, w: 0.4, h: 0.3, fontSize: 12, color: HEX.muted } });
pres.defineSlideMaster({ title: "DARK", background: { color: HEX.night },
  objects: [
    { placeholder: { options: { name: "title", type: "title", x: M, y: 1.7, w: 9, h: 1.0, fontSize: 40, bold: true,
                                color: HEX.nightText, valign: "middle", margin: 0 }, text: "" } },
  ] });

let n = 0;
function content(chapter, title, notes) {
  const s = pres.addSlide({ masterName: "CONTENT" });
  s.addText(chapter, { placeholder: "kicker" });
  s.addText(title, { placeholder: "title" });
  s.addNotes(notes);
  n++;
  return s;
}
const box = (s, x, y, w, h, fill, name) =>
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.08, fill: { color: fill }, line: { color: fill },
                                               objectName: name });
const text = (s, t, o) => s.addText(t, { isTextBox: true, margin: 0, fontSize: 16, color: HEX.ink, ...o });

// 1 · Title --------------------------------------------------------------------------------------
{
  const s = pres.addSlide({ masterName: "DARK" });
  s.addText("Driving a robot with one forearm", { placeholder: "title" });
  text(s, "AWARE-AI Hackathon 2026 · Team [team name]", { x: M, y: 2.85, w: 9, h: 0.4, fontSize: 20, color: HEX.nightMuted });
  text(s, "AJ · [teammate] · [teammate]", { x: M, y: 3.35, w: 9, h: 0.4, fontSize: 18, color: HEX.nightMuted });
  s.addNotes("Hi, we're team [team name]. I'm AJ, and with me are [teammates]. In the next five minutes we'll show you how " +
    "we drive the Jackal with one forearm and a Myo armband, what the muscle and motion signals taught us, and the " +
    "results from the sim. Here's the plan.");
}

// 2 · Agenda -------------------------------------------------------------------------------------
const CH = ["1 · How you drive", "2 · What the signals told us", "3 · Calibration and safety", "4 · What broke", "5 · Results"];
{
  const s = content("Agenda", "Five parts, about a minute each",
    "Five parts. How a driver controls the robot. What the signals told us, which is why our design looks the way it " +
    "does. How a new driver calibrates, and what keeps the robot safe. What broke while we tested. And the results. " +
    "First, what we built.");
  CH.forEach((c, i) => {
    box(s, M, 1.45 + i * 0.68, 9, 0.56, HEX.card, `agenda-${i + 1}`);
    text(s, c, { x: M + 0.25, y: 1.45 + i * 0.68, w: 8.5, h: 0.56, fontSize: 18, valign: "middle" });
  });
}

// 3 · What we did and why you should care --------------------------------------------------------
{
  const c = D.clean;
  const s = content("What we did", "One forearm drives every course, with no collisions",
    `Here's what we built. One forearm and the Myo armband drive all three courses. Over ${D.all_runs.n} official runs we ` +
    "finished every single one, with no missed gates and no collisions on the clean courses. Why should you care? A new " +
    "driver records their own calibration in about two minutes, and it kept working under the judges' slow, lossy link. " +
    "So how do you drive it?");
  const stats = [["L1 Gates", c.L1], ["L2 Slalom", c.L2], ["L3 Corridor + Dock", c.L3]];
  stats.forEach(([name, r], i) => {
    const x = M + i * 3.05;
    box(s, x, 1.5, 2.85, 2.1, HEX.card, `stat-${i + 1}`);
    text(s, `${fmt(r.median, 1)} s`, { x: x + 0.25, y: 1.65, w: 2.4, h: 0.9, fontSize: 40, bold: true, color: HEX.ink });
    text(s, name, { x: x + 0.25, y: 2.55, w: 2.4, h: 0.4, fontSize: 18, bold: true });
    text(s, `median of ${r.runs} runs, ${r.collisions} collisions`, { x: x + 0.25, y: 2.95, w: 2.4, h: 0.5, fontSize: 14, color: HEX.muted });
  });
  text(s, `${D.all_runs.completed} of ${D.all_runs.n} runs finished. New driver: ${Math.round(D.record.seconds / 60)} minutes to calibrate.`,
    { x: M, y: 3.9, w: 9, h: 0.6, fontSize: 18 });
  text(s, "Score = time + 5 s per collision + 10 s per missed gate (the sim's rule). Lower is better.",
    { x: M, y: 4.75, w: 8.5, h: 0.4, fontSize: 14, color: HEX.muted });
}

// 4 · How you drive: the arm as a lever ----------------------------------------------------------
{
  const s = content(CH[0], "Arm height sets speed, roll steers",
    "The arm is the joystick. Raise your forearm and the robot stops. Lower it to level and it drives, and the lower " +
    "you go toward level, the faster. Tip it down past level and it backs up. Roll your forearm like a doorknob to " +
    "steer. And if something goes wrong, make a firm fist and hold it for under half a second: that's the brake. " +
    "Your hand stays relaxed the whole time, so it isn't tiring. Why not just use muscle gestures? We tried.");
  // side view: a forearm pivoting at the elbow
  const ex = 1.3, ey = 3.35, L = 1.5;
  const arm = (deg, color, label, name) => {
    const r = (deg * Math.PI) / 180;
    const cx = ex + (L / 2) * Math.cos(r), cy = ey - (L / 2) * Math.sin(r);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: cx - L / 2, y: cy - 0.09, w: L, h: 0.18, rectRadius: 0.09,
      rotate: -deg, fill: { color }, line: { color }, objectName: name });
    const lx = ex + (L + 0.35) * Math.cos(r), ly = ey - (L + 0.35) * Math.sin(r);
    text(s, label, { x: lx - 0.1, y: ly - 0.22, w: 2.6, h: 0.44, fontSize: 18, bold: true, valign: "middle" });
  };
  arm(70, HEX.verm, "STOP · arm up", "arm-stop");
  arm(0, HEX.green, "GO · level", "arm-go");
  arm(-45, HEX.blue, "REVERSE · tip down", "arm-reverse");
  s.addShape(pres.shapes.OVAL, { x: ex - 0.18, y: ey - 0.18, w: 0.36, h: 0.36, fill: { color: HEX.ink }, line: { color: HEX.ink },
                                 objectName: "elbow" });
  text(s, "elbow", { x: ex - 0.55, y: ey + 0.25, w: 1.1, h: 0.3, fontSize: 14, color: HEX.muted, align: "center" });
  // right column: roll and fist
  box(s, 6.1, 1.55, 3.4, 1.35, HEX.card, "card-roll");
  text(s, "STEER · roll the forearm", { x: 6.3, y: 1.65, w: 3.0, h: 0.4, fontSize: 18, bold: true });
  text(s, "like turning a doorknob, left or right; a bigger roll turns harder", { x: 6.3, y: 2.05, w: 3.0, h: 0.75, fontSize: 14, color: HEX.muted });
  box(s, 6.1, 3.1, 3.4, 1.35, HEX.card, "card-brake");
  text(s, "BRAKE · firm fist", { x: 6.3, y: 3.2, w: 3.0, h: 0.4, fontSize: 18, bold: true });
  text(s, "held for 0.4 s; your hand stays relaxed the rest of the time", { x: 6.3, y: 3.6, w: 3.0, h: 0.75, fontSize: 14, color: HEX.muted });
  text(s, "Raise the arm once to start. Lower = faster, up to full speed at level.", { x: 6.1, y: 4.65, w: 3.4, h: 0.6, fontSize: 14, color: HEX.muted });
}

// 5 · What the signals told us -------------------------------------------------------------------
{
  const r = D.rolled;
  const ok = r.as_forward / r.windows;
  const s = content(CH[1], "Muscle gestures broke once the forearm rolled",
    `We started with five muscle gestures and a classifier. On still poses it was right ${pct(r.plain_loto_acc)} of the ` +
    `time, on takes it had never seen. But hold a fist with your forearm rolled, which is exactly what you do while ` +
    `steering, and it read "forward" only ${pct(ok)} of the time. The rest came out as right, reverse or left. Rolling ` +
    "your arm moves the muscles under the electrodes. So we kept the muscle signal for the brake only, and steer with " +
    "the band's tilt sensor, which rolling can't fool.");
  const bars = [["Still poses (all 5 gestures)", r.plain_loto_acc, HEX.green], ["Fist held with the forearm rolled", ok, HEX.verm]];
  const bx = 4.0, bw = 5.3;
  bars.forEach(([label, v, col], i) => {
    const y = 1.65 + i * 1.25;
    text(s, label, { x: M, y, w: 3.4, h: 0.55, fontSize: 16, bold: true, valign: "middle" });
    s.addShape(pres.shapes.RECTANGLE, { x: bx, y: y + 0.05, w: bw, h: 0.45, fill: { color: HEX.card }, line: { color: HEX.card },
                                        objectName: `bar-bg-${i + 1}` });
    s.addShape(pres.shapes.RECTANGLE, { x: bx, y: y + 0.05, w: bw * v, h: 0.45, fill: { color: col }, line: { color: col },
                                        objectName: `bar-${i + 1}` });
    text(s, `${pct(v)} read correctly`, { x: bx, y: y + 0.55, w: bw, h: 0.35, fontSize: 14, color: HEX.muted });
  });
  const p = r.pred;
  text(s, `Rolled fists misread as: right ${p.right}, reverse ${p.reverse}, left ${p.left} of ${r.windows} windows`,
    { x: bx, y: 4.15, w: bw, h: 0.35, fontSize: 14, color: HEX.muted });
  text(s, "Classifier: linear discriminant analysis on 8 EMG channels, tested on takes it never trained on.",
    { x: M, y: 4.8, w: 8.8, h: 0.35, fontSize: 14, color: HEX.muted });
}

// 6 · Calibration and safety ---------------------------------------------------------------------
{
  const s = content(CH[2], "Ready in two minutes, and it stops when unsure",
    `Every driver records their own calibration: six poses, each held for two, three and five seconds, about ` +
    `${Math.round(D.record.seconds / 60)} minutes in all, with prompts. At the start of each drive they hold their arm ` +
    "straight for two seconds, so straight is straight for them. Then they raise the arm to arm it. Underneath, the " +
    "robot stops whenever it's unsure: if the signal drops, if the arm leaves its calibrated range, or if the band has " +
    "moved, in which case it refuses to start and asks for a new calibration.");
  const steps = [["1", "Record", "6 poses × 2, 3, 5 s"], ["2", "Hold straight", "2 s at every start"],
                 ["3", "Raise to start", "arms the robot"], ["4", "Drive", "speed, steer, brake"]];
  steps.forEach(([k, t, sub], i) => {
    const x = M + i * 2.3;
    box(s, x, 1.55, 2.05, 1.35, HEX.card, `step-${k}`);
    s.addShape(pres.shapes.OVAL, { x: x + 0.15, y: 1.68, w: 0.42, h: 0.42, fill: { color: HEX.blue }, line: { color: HEX.blue },
                                   objectName: `step-num-${k}` });
    text(s, k, { x: x + 0.15, y: 1.68, w: 0.42, h: 0.42, fontSize: 16, bold: true, color: HEX.paper, align: "center", valign: "middle" });
    text(s, t, { x: x + 0.15, y: 2.18, w: 1.8, h: 0.35, fontSize: 16, bold: true });
    text(s, sub, { x: x + 0.15, y: 2.5, w: 1.8, h: 0.35, fontSize: 14, color: HEX.muted });
    if (i < 3) s.addShape(pres.shapes.RIGHT_ARROW, { x: x + 2.07, y: 2.1, w: 0.2, h: 0.25, fill: { color: HEX.line },
                                                      line: { color: HEX.line }, objectName: `step-arrow-${k}` });
  });
  text(s, "The robot stops when:", { x: M, y: 3.2, w: 9, h: 0.35, fontSize: 16, bold: true });
  const safe = ["the signal drops", "the arm leaves its range", "the band has moved (won't start)", "a fist is held 0.4 s"];
  safe.forEach((t, i) => {
    const x = M + i * 2.3;
    box(s, x, 3.65, 2.05, 0.75, "FDECE2", `safe-${i + 1}`);
    text(s, t, { x: x + 0.12, y: 3.65, w: 1.85, h: 0.75, fontSize: 14, valign: "middle" });
  });
}

// 7 · What broke ---------------------------------------------------------------------------------
{
  const s = content(CH[3], "Three things broke; each fix is now a safety rule",
    `Three things broke. First, the brake fired on its own ${pct(D.brake.before)} of the time, because just holding ` +
    "your arm out uses the same forearm muscles. Now it needs a fist pattern held for 0.4 seconds, and it dropped to " +
    `zero. Second, right turns were weak: with the arm out you only roll about thirty degrees right, so we tune each ` +
    `side from the driver's own logs. Third, after a battery recharge the band went back on differently and the robot ` +
    `reversed ${pct(D.band_moved.reverse)} of the time. Now it checks the pose at every start and refuses if the band moved.`);
  const rows = [
    ["Brake fired by itself", `${pct(D.brake.before)} of drive time`, "fist pattern held 0.4 s", `${pct(D.brake.after)}`],
    ["Right turns too weak", "full turn out of reach", "each side tuned from your own drives", "even turns"],
    ["Band moved after charging", `reversed ${pct(D.band_moved.reverse)} of a drive`, "pose checked at every start", "refuses to start"],
  ];
  text(s, "Problem", { x: M, y: 1.45, w: 2.6, h: 0.3, fontSize: 14, bold: true, color: HEX.muted });
  text(s, "Before", { x: 3.2, y: 1.45, w: 2.0, h: 0.3, fontSize: 14, bold: true, color: HEX.muted });
  text(s, "Fix", { x: 5.35, y: 1.45, w: 2.4, h: 0.3, fontSize: 14, bold: true, color: HEX.muted });
  text(s, "After", { x: 7.9, y: 1.45, w: 1.6, h: 0.3, fontSize: 14, bold: true, color: HEX.muted });
  rows.forEach(([p, before, fix, after], i) => {
    const y = 1.8 + i * 1.05;
    box(s, M, y, 9, 0.9, HEX.card, `broke-row-${i + 1}`);
    text(s, p, { x: M + 0.15, y, w: 2.5, h: 0.9, fontSize: 16, bold: true, valign: "middle" });
    box(s, 3.2, y + 0.15, 1.95, 0.6, "FDECE2", `before-${i + 1}`);
    text(s, before, { x: 3.3, y: y + 0.15, w: 1.8, h: 0.6, fontSize: 14, valign: "middle" });
    text(s, fix, { x: 5.35, y, w: 2.4, h: 0.9, fontSize: 14, valign: "middle" });
    box(s, 7.9, y + 0.15, 1.45, 0.6, "DDF2EA", `after-${i + 1}`);
    text(s, after, { x: 8.0, y: y + 0.15, w: 1.3, h: 0.6, fontSize: 14, bold: true, valign: "middle" });
  });
}

// 8 · Results ------------------------------------------------------------------------------------
{
  const c = D.clean, b = D.blind;
  const s = content(CH[4], `All ${D.all_runs.n} official runs finished, with no missed gates`,
    `Here are the official scores, the medians over repeated runs so it isn't one lucky lap: ` +
    `${fmt(c.L1.median, 1)} seconds on L1, ${fmt(c.L2.median, 1)} on the slalom, ${fmt(c.L3.median, 1)} on the corridor and ` +
    "dock, with no collisions. The last bar is L1 under the judges' degraded link, 300 milliseconds of lag and ten " +
    `percent packet loss: about ${fmt(b.score.on, 1)} seconds, barely slower than clean. That's the robustness we were ` +
    "after. Speaking of lag, we tested one more idea.");
  const items = [["L1 Gates", c.L1.median, c.L1.best, c.L1.worst, HEX.blue],
                 ["L2 Slalom", c.L2.median, c.L2.best, c.L2.worst, HEX.blue],
                 ["L3 Corridor + Dock", c.L3.median, c.L3.best, c.L3.worst, HEX.blue],
                 ["L1, 300 ms lag + 10% drop", b.score.on, Math.min(...b.run_scores.on), Math.max(...b.run_scores.on), HEX.orange]];
  const x0 = 3.3, scale = 5.6 / 30;               // 0 to 30 s across 5.6 in
  items.forEach(([label, med, lo, hi, col], i) => {
    const y = 1.55 + i * 0.75;
    text(s, label, { x: M, y, w: 2.7, h: 0.5, fontSize: 16, bold: true, valign: "middle" });
    s.addShape(pres.shapes.RECTANGLE, { x: x0, y: y + 0.08, w: med * scale, h: 0.34, fill: { color: col }, line: { color: col },
                                        objectName: `result-bar-${i + 1}` });
    s.addShape(pres.shapes.LINE, { x: x0 + lo * scale, y: y + 0.25, w: (hi - lo) * scale, h: 0, line: { color: HEX.ink, width: 2 },
                                   objectName: `result-range-${i + 1}` });
    text(s, `${fmt(med, 1)} s`, { x: x0 + hi * scale + 0.1, y, w: 0.9, h: 0.5, fontSize: 16, bold: true, valign: "middle" });
  });
  text(s, "Bar: median score. Line: best to worst run. Clean courses: 4, 6 and 4 runs; degraded: 8 runs with lag compensation on.",
    { x: M, y: 4.65, w: 8.8, h: 0.55, fontSize: 14, color: HEX.muted });
}

// 9 · Lag compensation, blind ---------------------------------------------------------------------
{
  const b = D.blind;
  const s = content(CH[4], "Lag compensation did no harm; benefit unproven",
    "With 300 milliseconds of lag, drivers overcorrect, so we added lag compensation: it measures the delay, softens " +
    "steering, and checks obstacles from where the robot will be when each command lands. To test it fairly we ran it " +
    `blind: ${b.sessions_on + b.sessions_off} sessions, the controller secretly switching it on or off, so the driver ` +
    `couldn't know. With it on, the medians were a little better and there were no collisions, against ${b.collisions_off} ` +
    "without. But with this few runs, the difference isn't significant. We kept it on because it did no harm.");
  const x0 = 2.6, x1 = 9.3, lo = 20, hi = 29, sx = (v) => x0 + ((v - lo) / (hi - lo)) * (x1 - x0);
  [["Lag compensation on", b.run_scores.on, HEX.blue, b.score.on], ["Off", b.run_scores.off, HEX.orange, b.score.off]].forEach(
    ([label, vals, col, med], i) => {
      const y = 1.8 + i * 1.1;
      text(s, label, { x: M, y: y - 0.05, w: 2.0, h: 0.5, fontSize: 16, bold: true, valign: "middle" });
      s.addShape(pres.shapes.LINE, { x: x0, y: y + 0.2, w: x1 - x0, h: 0, line: { color: HEX.line, width: 1 }, objectName: `axis-${i + 1}` });
      vals.forEach((v, k) => s.addShape(pres.shapes.OVAL, { x: sx(v) - 0.09, y: y + 0.11, w: 0.18, h: 0.18,
        fill: { color: col }, line: { color: HEX.ink, width: 0.5 }, objectName: `run-${i + 1}-${k + 1}` }));
      s.addShape(pres.shapes.LINE, { x: sx(med), y: y - 0.1, w: 0, h: 0.6, line: { color: HEX.ink, width: 2.5 }, objectName: `median-${i + 1}` });
      text(s, `median ${fmt(med, 1)} s`, { x: sx(med) + 0.08, y: y + 0.32, w: 1.6, h: 0.3, fontSize: 14, color: HEX.muted });
    });
  [20, 22, 24, 26, 28].forEach((v) => text(s, `${v} s`, { x: sx(v) - 0.3, y: 3.95, w: 0.6, h: 0.3, fontSize: 14, color: HEX.muted, align: "center" }));
  text(s, `One dot per run, L1 at 300 ms lag and 10% drop, ${b.runs_per_session[0]} runs per hidden session. ` +
    `Session medians compared with an exact two-sided permutation test: p = ${fmt(b.score.p)} for score, ${fmt(b.workload.p)} for workload.`,
    { x: M, y: 4.4, w: 8.9, h: 0.65, fontSize: 14, color: HEX.muted });
}

// 10 · Limits and next ---------------------------------------------------------------------------
{
  const s = content(CH[4], "What we'd test next",
    "To be honest about limits: all of this is one driver, so the next step is our teammates recording and driving. " +
    "The lag result needs more sessions before we'd claim it helps. And we capped speed at one metre per second while " +
    "tuning, half what the sim allows, so going faster means the obstacle assist has to look further ahead first.");
  const cards = [["One driver so far", "Teammates record (2 min) and drive, so the results cover more than one arm."],
                 ["Lag gain unproven", "More blind sessions before we claim lag compensation helps."],
                 ["Top speed 1 m/s", "The sim allows 2 m/s: the assist must slow from further out first."]];
  cards.forEach(([t, d], i) => {
    const x = M + i * 3.05;
    box(s, x, 1.6, 2.85, 2.6, HEX.card, `next-${i + 1}`);
    s.addShape(pres.shapes.OVAL, { x: x + 0.25, y: 1.8, w: 0.5, h: 0.5, fill: { color: [HEX.blue, HEX.orange, HEX.green][i] },
                                   line: { color: [HEX.blue, HEX.orange, HEX.green][i] }, objectName: `next-icon-${i + 1}` });
    text(s, String(i + 1), { x: x + 0.25, y: 1.8, w: 0.5, h: 0.5, fontSize: 18, bold: true, color: i === 0 ? HEX.paper : HEX.ink, align: "center", valign: "middle" });
    text(s, t, { x: x + 0.25, y: 2.45, w: 2.45, h: 0.4, fontSize: 17, bold: true });
    text(s, d, { x: x + 0.25, y: 2.9, w: 2.4, h: 1.2, fontSize: 14, color: HEX.muted, valign: "top" });
  });
}

// 11 · Thank you ---------------------------------------------------------------------------------
{
  const s = pres.addSlide({ masterName: "DARK" });
  s.addText("Thank you", { placeholder: "title" });
  text(s, "AJ · [teammate] · [teammate]", { x: M, y: 2.85, w: 9, h: 0.4, fontSize: 20, color: HEX.nightMuted });
  text(s, "Code and dataset: github.com/ajbarea/Hackathon", { x: M, y: 3.35, w: 9, h: 0.4, fontSize: 18,
    color: HEX.nightMuted, hyperlink: { url: "https://github.com/ajbarea/Hackathon" } });
  s.addNotes("That's our controller: one forearm, no squeezing, every course finished. The code and the dataset are " +
    "public on GitHub. Thank you, and we're happy to take questions.");
}

// Backup -----------------------------------------------------------------------------------------
{
  const s = pres.addSlide({ masterName: "DARK" });
  s.addText("Backup slides", { placeholder: "title" });
  s.addNotes("Backup slides for questions.");
}
{
  const b = D.blind;
  const s = content("Backup", "Blind lag-compensation test, session by session",
    "Backup. The blind test in full: medians of each session's two runs, compared with an exact two-sided permutation test.");
  const rows = [["Measure", "On", "Off", "p"],
    ["Score (s)", fmt(b.score.on), fmt(b.score.off), fmt(b.score.p)],
    ["Steering jerkiness (rad/s²)", fmt(b.smoothness.on), fmt(b.smoothness.off), fmt(b.smoothness.p)],
    ["Workload (NASA-RTLX, 0 to 100)", fmt(b.workload.on, 1), fmt(b.workload.off, 1), fmt(b.workload.p)],
    ["Collisions (total)", String(b.collisions_on), String(b.collisions_off), "–"]];
  s.addTable(rows.map((r, i) => r.map((c) => ({ text: c, options: { bold: i === 0, fontSize: 16, color: HEX.ink,
    fill: { color: i === 0 ? HEX.card : HEX.paper } } }))), { x: M, y: 1.5, w: 9, colW: [4.2, 1.6, 1.6, 1.6],
    border: { type: "solid", pt: 0.5, color: HEX.line } });
  text(s, `${b.sessions_on} sessions on, ${b.sessions_off} off, ${b.runs_per_session[0]} runs each; the driver never knew which.`,
    { x: M, y: 4.4, w: 9, h: 0.4, fontSize: 14, color: HEX.muted });
}
{
  const s = content("Backup", "How the signals are used",
    "Backup. What each signal does: the tilt sensor gives speed, steering and reverse; the muscle signal only gives the brake.");
  const rows = [["Signal", "What we compute", "Drives"],
    ["Tilt (accelerometer, 50 Hz)", "forearm height and roll from gravity, never yaw (no drift)", "speed, steering, reverse"],
    ["Muscle (8 EMG channels, 200 Hz)", "RMS and waveform length per channel, 0.2 s windows", "brake only"],
    ["Brake classifier", "your fist vs your other poses (linear discriminant analysis)", "fist held 0.4 s"],
    ["Lidar (from the sim)", "free space ahead and beside the robot", "slow down, nudge off walls"]];
  s.addTable(rows.map((r, i) => r.map((c) => ({ text: c, options: { bold: i === 0, fontSize: 14, color: HEX.ink,
    fill: { color: i === 0 ? HEX.card : HEX.paper } } }))), { x: M, y: 1.5, w: 9, colW: [2.8, 4.0, 2.2],
    border: { type: "solid", pt: 0.5, color: HEX.line } });
}

(async () => {
  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log("wrote", OUT, "slides:", n + 4);
})();
