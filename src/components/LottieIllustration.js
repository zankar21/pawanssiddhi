// src/components/LottieIllustration.js
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

// Use Lottie Player to render remote or local JSON animations
export default function LottieIllustration({ src, style }) {
  return (
    <Player
      autoplay
      loop
      src={src}
      style={style}
    />
  );
}
