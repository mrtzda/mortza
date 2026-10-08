import {continueRender, delayRender, staticFile} from 'remotion';

/* Load Vazirmatn before the first frame; otherwise Chrome silently falls back to a system font. */
const handle = delayRender('Loading Vazirmatn');
const face = new FontFace('Vazirmatn', `url(${staticFile('fonts/Vazirmatn-VF.woff2')}) format('woff2')`, {weight: '100 900'});
face
	.load()
	.then((f) => {
		document.fonts.add(f);
		continueRender(handle);
	})
	.catch((err) => {
		console.error('Vazirmatn failed to load', err);
		continueRender(handle);
	});

export const FA = '"Vazirmatn", Tahoma, sans-serif';
