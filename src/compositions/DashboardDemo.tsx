import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface DashboardDemoProps {
  startFrame: number;
}

// Mock data for demo
const mockStats = {
  today_revenue: 45000,
  today_bookings: 12,
  unpaid_bookings: 3,
  occupancy_rate: 75,
  week_occupancy_avg: 68,
  unpaid_bookings_today: 2
};

const hourlyOccupancy = [
  { hour: '9', value: 20 },
  { hour: '10', value: 60 },
  { hour: '11', value: 85 },
  { hour: '12', value: 100 },
  { hour: '13', value: 90 },
  { hour: '14', value: 75 },
  { hour: '15', value: 80 },
  { hour: '16', value: 65 },
  { hour: '17', value: 40 },
  { hour: '18', value: 25 }
];

const bookingsByDay = [
  { name: 'Lun', value: 4 },
  { name: 'Mar', value: 6 },
  { name: 'Mié', value: 5 },
  { name: 'Jue', value: 8 },
  { name: 'Vie', value: 7 }
];

const revenueData = [
  { date: '2025-01-20', revenue_cents: 35000 },
  { date: '2025-01-21', revenue_cents: 42000 },
  { date: '2025-01-22', revenue_cents: 38000 },
  { date: '2025-01-23', revenue_cents: 55000 },
  { date: '2025-01-24', revenue_cents: 48000 },
  { date: '2025-01-25', revenue_cents: 62000 },
  { date: '2025-01-26', revenue_cents: 45000 }
];

const COLORS = ['#56ff06', '#ef4444'];

const formatPrice = (cents: number) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(cents / 100);
};

export const DashboardDemo: React.FC<DashboardDemoProps> = ({ startFrame }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;

  // Entrance animation
  const opacity = spring({
    frame: localFrame,
    fps,
    config: { damping: 200 },
  });

  const y = interpolate(
    localFrame,
    [0, 30],
    [100, 0],
    { extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        backgroundColor: '#fafaf9',
        padding: '60px'
      }}
    >
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        {/* Title */}
        <h1 style={{
          fontSize: '48px',
          fontWeight: 700,
          fontFamily: 'Sora, sans-serif',
          marginBottom: '40px',
          color: '#171717'
        }}>
          Panel de Control
        </h1>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          marginBottom: '24px'
        }}>
          {/* Revenue Card */}
          <Card style={{ elevation: 2 }}>
            <CardHeader>
              <CardTitle style={{ fontSize: '14px' }}>Ventas de hoy</CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>
                {formatPrice(mockStats.today_revenue)}
              </div>
              <div style={{ height: '60px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={hourlyOccupancy} barSize={8}>
                    <XAxis dataKey="hour" tick={{ fontSize: 8 }} tickLine={false} axisLine={false} />
                    <YAxis hide />
                    <Tooltip />
                    <Bar dataKey="value" fill="#56ff06" radius={[2, 2, 0, 0]} opacity={0.8} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Bookings Card */}
          <Card>
            <CardHeader>
              <CardTitle style={{ fontSize: '14px' }}>Citas de hoy</CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>
                {mockStats.today_bookings}
              </div>
              <div style={{ height: '60px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={bookingsByDay} barSize={20}>
                    <XAxis dataKey="name" tick={{ fontSize: 9 }} tickLine={false} axisLine={false} />
                    <YAxis hide />
                    <Tooltip />
                    <Bar dataKey="value" fill="#56ff06" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Unpaid Card */}
          <Card>
            <CardHeader>
              <CardTitle style={{ fontSize: '14px' }}>Pendientes de pago</CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {mockStats.unpaid_bookings}
              </div>
              <div style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'pendiente', value: mockStats.unpaid_bookings },
                        { name: 'pagado', value: mockStats.today_bookings - mockStats.unpaid_bookings_today }
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={20}
                      outerRadius={28}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      <Cell fill="#ef4444" />
                      <Cell fill="#56ff06" />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Occupancy Card */}
          <Card>
            <CardHeader>
              <CardTitle style={{ fontSize: '14px' }}>Ocupación</CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {mockStats.occupancy_rate}%
              </div>
              <div style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'ocupado', value: mockStats.occupancy_rate },
                        { name: 'libre', value: 100 - mockStats.occupancy_rate }
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={20}
                      outerRadius={28}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      <Cell fill="#56ff06" />
                      <Cell fill="#e5e5e5" />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Rendimiento - Últimos 7 días</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ height: '250px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(date) => {
                      const d = new Date(date);
                      return ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'][d.getDay()];
                    }}
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    tickFormatter={(value) => formatPrice(value)}
                    tick={{ fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue_cents"
                    stroke="#56ff06"
                    strokeWidth={3}
                    dot={{ fill: '#56ff06', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </AbsoluteFill>
  );
};
