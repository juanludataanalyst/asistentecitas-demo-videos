import React from 'react';
import { useCurrentFrame, useVideoConfig, spring } from 'remotion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

interface AnimatedPieChartProps {
  data: any[];
  dataKey: string;
  colors?: string[];
  height?: number;
  width?: string;
  innerRadius?: number;
  outerRadius?: number;
  delay?: number;
}

export const AnimatedPieChart: React.FC<AnimatedPieChartProps> = ({
  data,
  dataKey,
  colors = ['#56ff06', '#ef4444'],
  height = 60,
  width = '100%',
  innerRadius = 20,
  outerRadius = 28,
  delay = 0
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animate each segment appearing with stagger
  const getSegmentOpacity = (index: number) => {
    const delayPerSegment = 5;
    const segmentDelay = delay + (index * delayPerSegment);

    const opacity = spring({
      frame: Math.max(0, frame - segmentDelay),
      fps,
      config: { damping: 200, stiffness: 100 },
    });

    return Math.min(opacity, 1);
  };

  // Animate the whole chart scale
  const scale = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 200, stiffness: 80 },
  });

  const animatedScale = Math.min(scale, 1);

  return (
    <div style={{ height, width, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ResponsiveContainer width={width} height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius * animatedScale}
            outerRadius={outerRadius * animatedScale}
            paddingAngle={2}
            dataKey={dataKey}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
                opacity={getSegmentOpacity(index)}
              />
            ))}
          </Pie>
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
                      {payload[0].name}: {payload[0].value}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
