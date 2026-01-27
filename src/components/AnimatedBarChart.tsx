import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface AnimatedBarChartProps {
  data: any[];
  dataKey: string;
  xKey: string;
  color?: string;
  barSize?: number;
  height?: number;
  delay?: number;
}

export const AnimatedBarChart: React.FC<AnimatedBarChartProps> = ({
  data,
  dataKey,
  xKey,
  color = '#56ff06',
  barSize = 20,
  height = 250,
  delay = 0
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Calculate bar height based on spring animation
  const getBarHeight = (index: number) => {
    const delayPerBar = 5; // 5 frames stagger per bar
    const barDelay = delay + (index * delayPerBar);

    const scale = spring({
      frame: Math.max(0, frame - barDelay),
      fps,
      config: { damping: 200, stiffness: 100 },
    });

    return Math.min(scale, 1);
  };

  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={barSize} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis
            dataKey={xKey}
            tick={{ fontSize: 9, fill: '#888' }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis hide />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div style={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}>
                    <p style={{ fontSize: '12px', fontWeight: 'medium' }}>
                      {payload[0].value}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar
            dataKey={dataKey}
            fill={color}
            radius={[4, 4, 0, 0]}
            opacity={0.8}
            shape={(props: any) => {
              const height = getBarHeight(props.index);
              const barHeight = props.height * height;
              const y = props.y + (props.height - barHeight);

              return (
                <rect
                  {...props}
                  y={y}
                  height={barHeight}
                  fill={color}
                  radius={[4, 4, 0, 0]}
                />
              );
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
