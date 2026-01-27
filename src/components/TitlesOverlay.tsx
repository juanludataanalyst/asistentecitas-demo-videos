import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

interface Scene {
  start: number;
  end: number;
  title: string;
  subtitle: string;
}

interface TitlesOverlayProps {
  scenes: Scene[];
  currentFrame: number;
}

export const TitlesOverlay: React.FC<TitlesOverlayProps> = ({ scenes, currentFrame }) => {
  const { fps } = useVideoConfig();

  const getCurrentScene = (): Scene | null => {
    return scenes.find(scene =>
      currentFrame >= scene.start && currentFrame < scene.end
    ) || null;
  };

  const scene = getCurrentScene();

  if (!scene) return null;

  const sceneLocalFrame = currentFrame - scene.start;

  // Title slide-in from left
  const titleX = interpolate(
    sceneLocalFrame,
    [0, 15, 30],
    [-100, 0, 0],
    { extrapolateRight: 'clamp' }
  );

  const titleOpacity = spring({
    frame: sceneLocalFrame,
    fps,
    config: { damping: 200 },
  });

  // Subtitle fade-in with delay
  const subtitleOpacity = spring({
    frame: Math.max(0, sceneLocalFrame - 10),
    fps,
    config: { damping: 200 },
  });

  // Background box fade-in
  const bgOpacity = spring({
    frame: sceneLocalFrame,
    fps,
    config: { damping: 200 },
  });

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      {/* Background box */}
      <div style={{
        position: 'absolute',
        bottom: '80px',
        left: '60px',
        right: '60px',
        backgroundColor: `rgba(0, 0, 0, ${0.7 * bgOpacity})`,
        borderRadius: '12px',
        padding: '24px 32px',
        backdropFilter: 'blur(10px)',
      }}>
        {/* Title */}
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 700,
            fontFamily: 'Sora, sans-serif',
            color: 'white',
            marginBottom: '8px',
            transform: `translateX(${titleX}px)`,
            opacity: titleOpacity
          }}
        >
          {scene.title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '24px',
            fontFamily: 'Inter, sans-serif',
            color: '#ffffff',
            opacity: subtitleOpacity,
            fontWeight: 400
          }}
        >
          {scene.subtitle}
        </p>
      </div>
    </AbsoluteFill>
  );
};
