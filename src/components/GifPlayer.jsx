import React from 'react';
import useScript from 'helpers/useScript';
export default function GifPlayer({ src, width = 400, height = 400, ...props }) {
	useScript('https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js');
	return <lottie-player {...props} src={src} background="transparent" speed="1" style={{ width, height, ...props.style }} loop autoplay />;
}
