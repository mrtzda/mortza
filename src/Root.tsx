import './fonts';
import React from 'react';
import {Composition} from 'remotion';
import {Teaser, FPS, TEASER_FRAMES} from './Teaser';

export const RemotionRoot: React.FC = () => (
	<>
		<Composition id="Teaser" component={Teaser} durationInFrames={TEASER_FRAMES} fps={FPS} width={1920} height={1080} />
		<Composition id="TeaserVertical" component={Teaser} durationInFrames={TEASER_FRAMES} fps={FPS} width={1080} height={1920} />
	</>
);
