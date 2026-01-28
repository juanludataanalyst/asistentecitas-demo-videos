import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from 'remotion';
import { DashboardComplete } from './DashboardComplete';

// Typography component for animated text
const AnimatedText: React.FC<{
  children: React.ReactNode;
  frame: number;
  delay: number;
  fps: number;
}> = ({ children, frame, delay, fps }) => {
  const textFrame = Math.max(0, frame - delay);

  const opacity = spring({
    frame: textFrame,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const clampedOpacity = Math.min(Math.max(opacity, 0), 1);

  const y = interpolate(
    clampedOpacity,
    [0, 1],
    [-50, 0],
    { extrapolateRight: 'clamp' }
  );

  return (
    <div
      style={{
        opacity: clampedOpacity,
        transform: `translateY(${y}px)`,
        fontFamily: 'Sora, sans-serif',
        fontWeight: 700,
        color: '#0f172a',
      }}
    >
      {children}
    </div>
  );
};

export const IntroDashboard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Timeline (20 seconds total):
  // 0-60: Text fades in (2s)
  // 60-150: Text stays (3s)
  // 120-210: Dashboard fades in, text fades out (overlap)
  // 210-600: Dashboard fully visible with animations (13s)

  const textOpacity = interpolate(
    frame,
    [0, 30, 120, 150],
    [0, 1, 1, 0],
    { extrapolateRight: 'clamp' }
  );

  const textY = interpolate(
    frame,
    [120, 150],
    [0, -100],
    { extrapolateRight: 'clamp' }
  );

  const dashboardScale = interpolate(
    frame,
    [120, 210],
    [0.8, 1],
    { extrapolateRight: 'clamp' }
  );

  const dashboardOpacity = interpolate(
    frame,
    [120, 180],
    [0, 1],
    { extrapolateRight: 'clamp' }
  );

  const dashboardY = interpolate(
    frame,
    [120, 210],
    [50, 0],
    { extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: '#fafaf9' }}>
      {/* Welcome Text */}
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
          zIndex: 10,
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '1400px', padding: '48px' }}>
          <AnimatedText frame={frame} delay={0} fps={fps}>
            <div style={{ fontSize: '56px', marginBottom: '32px', lineHeight: 1.2 }}>
              Agenda tus citas por
            </div>
          </AnimatedText>
          <AnimatedText frame={frame} delay={10} fps={fps}>
            <div style={{ fontSize: '64px', color: '#56ff06', marginBottom: '40px', fontWeight: 800 }}>
              WhatsApp
            </div>
          </AnimatedText>
          <AnimatedText frame={frame} delay={20} fps={fps}>
            <div style={{ fontSize: '56px', lineHeight: 1.2 }}>
              y mira los datos de tu negocio aquí
            </div>
          </AnimatedText>
        </div>
      </AbsoluteFill>

      {/* Dashboard */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: dashboardOpacity,
          transform: `scale(${dashboardScale}) translateY(${dashboardY}px)`,
          transformOrigin: 'center center',
        }}
      >
        <DashboardComplete startFrame={120} />
      </div>
    </AbsoluteFill>
  );
};
