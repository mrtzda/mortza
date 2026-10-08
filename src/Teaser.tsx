import React from 'react';
import {AbsoluteFill, Audio, Easing, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {FA} from './fonts';
import markData from './mark.json';

/* Rastar teaser — 12 s, 60 fps, locked to a 120 BPM track (one beat = 30 frames).
   Bar map (track seconds 4–16, the build into the drop):
     bars 1–2  f0–240    «چیزی در راه است» + three dots on the beats; push into the last dot
     bar 3     f240–360  the dot becomes the frame: four words, one per beat, hard cuts
     bars 4–6  f360–720  the dot returns, falls, and splits into the two dots of ت in «رستار» */

export const FPS = 60;
export const TEASER_FRAMES = 12 * FPS;
const BEAT = 30;
const DROP = 8 * BEAT; // f240, the drop
const MARK = 12 * BEAT; // f360, bar 4

const INK = '#0D0E16';
const CREAM = '#F3EEE4';
const SAFFRON = '#F2A43A';

const OUT = Easing.bezier(0.16, 1, 0.3, 1);
const IN = Easing.bezier(0.7, 0, 0.84, 0);
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const ramp = (f: number, a: number, b: number, easing: (t: number) => number = OUT) =>
	interpolate(f, [a, b], [0, 1], {...clamp, easing});

/* Damped landing squash (vertical scale); horizontal is its mirror. u in seconds after impact. */
const squash = (u: number, amp: number) => (u < 0 ? 1 : 1 - amp * Math.exp(-16 * u) * Math.cos(34 * u));

export const Teaser: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<AbsoluteFill style={{backgroundColor: INK}}>
			{frame < DROP && <Intro f={frame} />}
			{frame >= DROP && frame < MARK && <BeatWords f={frame - DROP} />}
			{frame >= MARK && <Wordmark f={frame - MARK} />}
			<Audio
				src={staticFile('music/shur-pulse.mp3')}
				trimBefore={4 * FPS}
				volume={(f) => interpolate(f, [0, 6, TEASER_FRAMES - 70, TEASER_FRAMES], [0, 1, 1, 0], clamp)}
			/>
		</AbsoluteFill>
	);
};

/* ---------- bars 1–2: the line, the dots, the push ---------- */

const LINE = ['چیزی', 'در', 'راه', 'است'];
const WORD_IN = [12, 26, 36, 44]; // lead word first, the rest closing in on a curve
const DOT_IN = [5 * BEAT, 6 * BEAT, 7 * BEAT]; // on the beats

const Intro: React.FC<{f: number}> = ({f}) => {
	const {width, height} = useVideoConfig();
	const size = Math.min(width, height) * 0.1;
	const breathe = 1 + 0.04 * ramp(f, 0, DROP, Easing.linear);
	// The last dot swells until it covers the frame exactly on the drop.
	const push = Math.exp(Math.log(400) * ramp(f, DROP - 20, DROP - 2, IN));

	return (
		<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', transform: `scale(${breathe})`}}>
			<div
				dir="rtl"
				lang="fa"
				style={{display: 'flex', alignItems: 'baseline', gap: '0.28em', fontFamily: FA, fontWeight: 700, fontSize: size, lineHeight: 1.8, color: CREAM}}
			>
				{LINE.map((w, i) => {
					const p = ramp(f, WORD_IN[i], WORD_IN[i] + 22);
					return (
						<span key={w} style={{opacity: ramp(f, WORD_IN[i], WORD_IN[i] + 12, Easing.linear), transform: `translateY(${(1 - p) * 0.35}em)`}}>
							{w}
						</span>
					);
				})}
				<span style={{display: 'flex', gap: '0.14em', marginInlineStart: '-0.12em'}}>
					{DOT_IN.map((at, i) => {
						const s = ramp(f, at, at + 10) * (i === 2 ? push : 1);
						return (
							<span
								key={at}
								style={{
									position: 'relative',
									zIndex: i === 2 ? 2 : 1,
									width: '0.15em',
									height: '0.15em',
									borderRadius: '50%',
									backgroundColor: SAFFRON,
									transform: `scale(${s})`,
								}}
							/>
						);
					})}
				</span>
			</div>
		</AbsoluteFill>
	);
};

/* ---------- bar 3: one word per beat, hard cuts ---------- */

const BEATS = ['ایده', 'طراحی', 'ساخت', 'آینده'];
const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹';
const faNum = (n: number) => String(n).padStart(2, '0').replace(/\d/g, (d) => FA_DIGITS[Number(d)]);

const BeatWords: React.FC<{f: number}> = ({f}) => {
	const {width, height} = useVideoConfig();
	const i = Math.min(BEATS.length - 1, Math.floor(f / BEAT));
	const lf = f - i * BEAT;
	const inverted = i === BEATS.length - 1;
	const bg = inverted ? INK : SAFFRON;
	const fg = inverted ? SAFFRON : INK;
	const p = ramp(lf, 0, 12);
	const unit = Math.min(width, height);

	return (
		<AbsoluteFill style={{backgroundColor: bg, alignItems: 'center', justifyContent: 'center'}}>
			<div
				dir="rtl"
				lang="fa"
				style={{
					fontFamily: FA,
					fontWeight: 900,
					fontSize: unit * 0.26,
					lineHeight: 1.7,
					color: fg,
					transform: `translateX(${(1 - p) * unit * 0.03}px) scale(${1.1 - 0.1 * p})`,
				}}
			>
				{BEATS[i]}
			</div>
			<div
				dir="rtl"
				lang="fa"
				style={{position: 'absolute', top: unit * 0.06, right: unit * 0.07, fontFamily: FA, fontWeight: 500, fontSize: unit * 0.03, color: fg, opacity: 0.7}}
			>
				{faNum(i + 1)} / {faNum(BEATS.length)}
			</div>
		</AbsoluteFill>
	);
};

/* ---------- bars 4–6: the wordmark, dots last ---------- */

type Glyph = [number, number, number, number, string, string[], number[][], number];
const MARK_GLYPHS = markData.mark.g as unknown as Glyph[];
const MARK_W = markData.mark.w;

// Connected letter groups, right to left (ر · ستا · ر), each revealed as one rigid piece.
const GROUPS = [0, 1, 2].map((g) => {
	const gl = MARK_GLYPHS.filter((x) => x[7] === g);
	return {glyphs: gl, x0: Math.min(...gl.map((x) => x[0])), x1: Math.max(...gl.map((x) => x[0] + x[2]))};
});
const GROUP_DELAY = [0, 5, 14];

// The two dots of ت, from the shaped outline.
const TEH = MARK_GLYPHS.find((x) => x[5].length === 2)!;
const DOTS = TEH[6].map((b) => ({x: TEH[0] + (b[0] + b[2]) / 2, y: (b[1] + b[3]) / 2, r: (b[2] - b[0]) / 2}));
const DOT_MID = (DOTS[0].x + DOTS[1].x) / 2;

const T_LAND = 16; // single dot lands
const T_BODY = 16; // bodies start wiping in
const T_SPLIT = 44; // dot splits…
const T_SPLIT_END = 60; // …and lands on bar 4, beat 3

const Wordmark: React.FC<{f: number}> = ({f}) => {
	const {width, height, fps} = useVideoConfig();
	const portrait = height > width;
	const s = (width * (portrait ? 0.66 : 0.4)) / MARK_W;
	const vb = {x: -300, y: -1900, w: MARK_W + 600, h: 2800};

	const pulse = 1 + 0.025 * (1 - ramp(f, T_SPLIT_END, T_SPLIT_END + 16));
	const push = 1 + 0.014 * ramp(f, T_SPLIT_END, 360, Easing.linear);

	// Dot: fall (accelerating, stretched), land with a squash, then split in two.
	const fall = Math.min(1, f / T_LAND);
	const dropY = 1500 * (1 - fall * fall);
	const stretch = f < T_LAND ? 1 + 0.25 * fall : squash((f - T_LAND) / fps, 0.34);
	const split = ramp(f, T_SPLIT, T_SPLIT_END);
	const splitSquash = squash((f - T_SPLIT_END) / fps, 0.22);
	const sy = f >= T_SPLIT_END ? splitSquash : stretch;
	const sx = 2 - sy;

	const unit = Math.min(width, height);
	const tag = ramp(f, 120, 142);
	const latin = ramp(f, 132, 160);

	return (
		<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', transform: `scale(${push * pulse})`}}>
			<svg width={vb.w * s} height={vb.h * s} viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`} style={{overflow: 'visible'}}>
				<defs>
					{GROUPS.map((g, k) => {
						const p = ramp(f, T_BODY + GROUP_DELAY[k], T_BODY + GROUP_DELAY[k] + 45);
						const pad = 160;
						const w = (g.x1 - g.x0 + 2 * pad) * p;
						return (
							<clipPath key={k} id={`wipe-${k}`}>
								<rect x={g.x1 + pad - w} y={-1000} width={w} height={3200} />
							</clipPath>
						);
					})}
				</defs>
				<g transform="scale(1,-1)">
					{GROUPS.map((g, k) => {
						const p = ramp(f, T_BODY + GROUP_DELAY[k], T_BODY + GROUP_DELAY[k] + 45);
						return (
							<g key={k} clipPath={`url(#wipe-${k})`}>
								<g transform={`translate(${(1 - p) * 140},0)`} fill={CREAM}>
									{g.glyphs.map((gl, j) => (
										<path key={j} d={gl[4]} transform={`translate(${gl[0]},${gl[1]})`} />
									))}
								</g>
							</g>
						);
					})}
					{DOTS.map((d, k) => {
						const x = DOT_MID + (d.x - DOT_MID) * split;
						const y = d.y + dropY;
						const r = d.r;
						return (
							<path
								key={k}
								d={`M0 ${r}L${r} 0L0 ${-r}L${-r} 0Z`}
								fill={SAFFRON}
								transform={`translate(${x},${y - r}) scale(${sx},${sy}) translate(0,${r})`}
							/>
						);
					})}
				</g>
			</svg>
			<div
				style={{
					position: 'absolute',
					top: '50%',
					marginTop: (vb.h * s) / 2 - unit * 0.02,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: unit * 0.012,
				}}
			>
				<div
					dir="rtl"
					lang="fa"
					style={{fontFamily: FA, fontWeight: 500, fontSize: unit * 0.05, lineHeight: 1.8, color: CREAM, opacity: 0.85 * tag, transform: `translateY(${(1 - tag) * 0.4}em)`}}
				>
					به‌زودی
				</div>
				<bdi
					dir="ltr"
					style={{fontFamily: FA, fontWeight: 600, fontSize: unit * 0.018, letterSpacing: '0.6em', marginRight: '-0.6em', color: CREAM, opacity: 0.45 * latin}}
				>
					RASTAR
				</bdi>
			</div>
		</AbsoluteFill>
	);
};
