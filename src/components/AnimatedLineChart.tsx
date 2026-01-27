import React from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface AnimatedLineChartProps {
  data: any[];
  dataKey: string;
  xKey: string;
  color?: string;
  height?: number;
  delay?: number;
  tickFormatter?: (value: any) => string;
}

export const AnimatedLineChart: React.FC<AnimatedLineChartProps> = ({
  data,
  dataKey,
  xKey,
  color = '#56ff06',
  height = 250,
  delay = 0,
  tickFormatter
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animate the path drawing
  const progress = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 200, stiffness: 80 },
  });

  // Calculate how many data points to show
  const dataLength = Math.floor(data.length * Math.min(progress, 1));
  const visibleData = data.slice(0, Math.max(dataLength, 1));

  // Animate stroke dasharray for drawing effect
  const strokeDashoffset = interpolate(
    progress,
    [0, 1],
    [1000, 0],
    { extrapolateRight: 'clamp' }
  );

  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={visibleData}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e5e5e5"
            strokeOpacity={0.5}
          />
          <XAxis
            dataKey={xKey}
            tickFormatter={tickFormatter}
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tickFormatter={tickFormatter}
            tick={{ fontSize: 11 }}
            tickLine={false}
            axisLine={false}
          />
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
                    <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
                      {tickFormatter ? tickFormatter(payload[0].payload[dataKey]) : payload[0].value}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={3}
            dot={{ fill: color, r: 4 }}
            activeDot={{ r: 6 }}
            strokeDasharray={1000}
            strokeDashoffset={strokeDashoffset}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
