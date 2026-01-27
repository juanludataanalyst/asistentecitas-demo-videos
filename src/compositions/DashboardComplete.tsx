import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import {
  LayoutDashboard,
  Calendar,
  Store,
  Users,
  Settings,
  LogOut,
  PanelLeft
} from 'lucide-react';

// Import logo as a URL that will work with img tag
const logoUrl = new URL('../assets/logo.svg', import.meta.url).href;

interface DashboardCompleteProps {
  startFrame: number;
}

// Mock data EXACTLY like salon-app
const stats = {
  today_revenue: 45000,
  today_bookings: 12,
  unpaid_bookings: 3,
  occupancy_rate: 75,
  week_occupancy_avg: 68,
  unpaid_bookings_today: 2
};

const revenueChart = {
  days: [
    { date: '2025-01-20', revenue_cents: 35000 },
    { date: '2025-01-21', revenue_cents: 42000 },
    { date: '2025-01-22', revenue_cents: 38000 },
    { date: '2025-01-23', revenue_cents: 55000 },
    { date: '2025-01-24', revenue_cents: 48000 },
    { date: '2025-01-25', revenue_cents: 62000 },
    { date: '2025-01-26', revenue_cents: 45000 }
  ],
  total_revenue: 325000
};

const upcomingBookings = [
  { id: 1, customer_name: 'María García', service_name: 'Corte Mujer', worker_name: 'Ana', start_time_formatted: '09:00', status: 'confirmed', payment_status: 'paid' },
  { id: 2, customer_name: 'Laura Martínez', service_name: 'Tinte Completo', worker_name: 'Ana', start_time_formatted: '10:30', status: 'scheduled', payment_status: 'pending' },
  { id: 3, customer_name: 'Carmen López', service_name: 'Mechas', worker_name: 'María', start_time_formatted: '11:00', status: 'confirmed', payment_status: 'paid' },
];

const workers = [
  { id: 1, name: 'Ana', bookings_count: 6 },
  { id: 2, name: 'María', bookings_count: 4 },
  { id: 3, name: 'Lucía', bookings_count: 2 },
];

const formatPrice = (value: number) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(value / 100);
};

const getStatusBadge = (booking: any) => {
  const statusMap: Record<string, { label: string; bgColor: string; textColor: string }> = {
    'scheduled': { label: 'Programada', bgColor: '#dbeafe', textColor: '#1e40af' },
    'confirmed': { label: 'Confirmada', bgColor: '#dcfce7', textColor: '#166534' },
    'completed': { label: 'Completada', bgColor: '#d1fae5', textColor: '#065f46' },
    'cancelled': { label: 'Cancelada', bgColor: '#fee2e2', textColor: '#991b1b' },
    'no_show': { label: 'No se presentó', bgColor: '#fef3c7', textColor: '#92400e' }
  };

  let status = booking.status;
  if (!status || status === 'scheduled') {
    status = booking.payment_status === 'paid' ? 'confirmed' : 'scheduled';
  }

  const config = statusMap[status] || statusMap['scheduled'];

  return (
    <span style={{
      padding: '2px 8px',
      borderRadius: '9999px',
      fontSize: '12px',
      fontWeight: 500,
      backgroundColor: config.bgColor,
      color: config.textColor
    }}>
      {config.label}
    </span>
  );
};

// Helper function for card entrance animation with cool bounce effect
const useCardAnimation = (localFrame: number, index: number, fps: number) => {
  // Cards start animating after layout (30 frames)
  const layoutDelay = 30;
  const cardDelay = index * 20; // Increased delay for more dramatic cascade (20 frames = ~0.67s)
  const cardFrame = Math.max(0, localFrame - layoutDelay - cardDelay);

  // More dramatic and slower spring animation
  const springValue = spring({
    frame: cardFrame,
    fps,
    config: { damping: 12, stiffness: 150, mass: 1.5 }, // Slower, more dramatic bounce
  });

  // Clamp spring value to prevent overshoot
  const clampedSpring = Math.min(Math.max(springValue, 0), 1);

  const opacity = interpolate(
    clampedSpring,
    [0, 0.3, 0.7, 1],
    [0, 0.3, 0.85, 1],
    { extrapolateRight: 'clamp' }
  );

  // More dramatic scale - starts smaller
  const scale = interpolate(
    clampedSpring,
    [0, 1],
    [0.6, 1],
    { extrapolateRight: 'clamp' }
  );

  // Slide from further below with more dramatic movement
  const y = interpolate(
    clampedSpring,
    [0, 1],
    [150, 0],
    {
      extrapolateRight: 'clamp',
      extrapolateLeft: 'clamp',
      easing: (t) => {
        // Custom easing for more dramatic effect
        const t2 = t * t;
        const t3 = t2 * t;
        return t3 * (3 * t2 - 4 * t + 2); // Smooth ease-out
      }
    }
  );

  // More dramatic rotation
  const rotation = interpolate(
    clampedSpring,
    [0, 1],
    [index % 2 === 0 ? -8 : 8, 0], // Increased rotation for more effect
    { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' }
  );

  // Dynamic shadow that grows with the card
  const shadowProgress = interpolate(
    clampedSpring,
    [0, 1],
    [0, 1],
    { extrapolateRight: 'clamp' }
  );

  const shadowOpacity = interpolate(
    shadowProgress,
    [0, 0.5, 1],
    [0, 0.3, 0.15],
    { extrapolateRight: 'clamp' }
  );

  const shadowBlur = interpolate(
    shadowProgress,
    [0, 1],
    [0, 30],
    { extrapolateRight: 'clamp' }
  );

  const shadowY = interpolate(
    shadowProgress,
    [0, 1],
    [40, 8],
    { extrapolateRight: 'clamp' }
  );

  return {
    opacity,
    transform: `translateY(${y}px) scale(${scale}) rotate(${rotation}deg)`,
    boxShadow: `0 ${shadowY}px ${shadowBlur}px -2px rgba(0, 0, 0, ${shadowOpacity})`,
  };
};

export const DashboardComplete: React.FC<DashboardCompleteProps> = ({ startFrame }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;

  // Sidebar and Header entrance animation (frames 0-30)
  const layoutOpacity = spring({
    frame: localFrame,
    fps,
    config: { damping: 200 },
  });

  const layoutY = interpolate(
    localFrame,
    [0, 30],
    [-20, 0],
    { extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        opacity: layoutOpacity,
        transform: `translateY(${layoutY}px)`,
        backgroundColor: '#fafaf9',
        fontFamily: 'Inter, -apple-system, sans-serif'
      }}
    >
      <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
        {/* SIDEBAR - Blanco/gris como en el código original */}
        <div style={{
          width: '256px', // 16rem
          backgroundColor: '#fafaf9', // var(--background)
          color: '#09090b', // var(--foreground)
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          borderRight: '1px solid #e2e8f0' // var(--border)
        }}>
          {/* Logo SVG */}
          <div style={{ padding: '0', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '32px 0' }}>
              <img
                src={logoUrl}
                alt="asistentecitas"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* Menu Items */}
          <div style={{ flex: 1, padding: '24px 16px', overflowY: 'auto' }}>
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#64748b',
                padding: '0 10px',
                marginBottom: '12px',
                fontFamily: 'Sora, sans-serif'
              }}>
                Operaciones
              </div>

              {/* Dashboard - Active */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 10px',
                borderRadius: '8px',
                backgroundColor: '#56ff06', // var(--primary)
                color: '#000000', // var(--primary-foreground)
                fontWeight: 600,
                marginBottom: '4px',
                fontFamily: 'Sora, sans-serif',
                fontSize: '16px'
              }}>
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </div>

              {/* Calendar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 10px',
                borderRadius: '8px',
                color: '#64748b',
                marginBottom: '4px',
                fontFamily: 'Sora, sans-serif',
                fontSize: '16px'
              }}>
                <Calendar size={20} />
                <span>Calendario</span>
              </div>

              {/* POS */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 10px',
                borderRadius: '8px',
                color: '#64748b',
                marginBottom: '4px',
                fontFamily: 'Sora, sans-serif',
                fontSize: '16px'
              }}>
                <Store size={20} />
                <span>Punto de Venta</span>
              </div>
            </div>

            <div>
              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#64748b',
                padding: '0 10px',
                marginBottom: '12px',
                fontFamily: 'Sora, sans-serif'
              }}>
                Administración
              </div>

              {/* Clients */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 10px',
                borderRadius: '8px',
                color: '#64748b',
                marginBottom: '4px',
                fontFamily: 'Sora, sans-serif',
                fontSize: '16px'
              }}>
                <Users size={20} />
                <span>Clientes</span>
              </div>

              {/* Settings */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 10px',
                borderRadius: '8px',
                color: '#64748b',
                marginBottom: '4px',
                fontFamily: 'Sora, sans-serif',
                fontSize: '16px'
              }}>
                <Settings size={20} />
                <span>Configuración</span>
              </div>
            </div>
          </div>

          {/* Logout */}
          <div style={{ padding: '16px', borderTop: '1px solid #e2e8f0' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 10px',
              borderRadius: '8px',
              color: '#64748b',
              fontFamily: 'Sora, sans-serif',
              fontSize: '16px'
            }}>
              <LogOut size={20} />
              <span>Cerrar Sesión</span>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* HEADER */}
          <div style={{
            height: '64px',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            gap: '8px'
          }}>
            {/* Inner container with exact spacing */}
            <div style={{
              display: 'flex',
              height: '100%',
              width: '100%',
              alignItems: 'center',
              gap: '16px',
              padding: '8px'
            }}>
              {/* Sidebar Trigger - exact size from production */}
              <button style={{
                width: '28px',
                height: '36px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px',
                border: '1px solid #e2e8f0',
                backgroundColor: '#ffffff',
                boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                cursor: 'pointer'
              }}>
                <PanelLeft size={24} style={{ color: '#0f172a' }} />
              </button>

              {/* Separator */}
              <div style={{
                width: '1px',
                height: '24px',
                backgroundColor: '#e2e8f0',
                flexShrink: 0
              }}></div>

              {/* Navigation - Centered */}
              <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <button style={{
                  height: '36px',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #e2e8f0',
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                  cursor: 'pointer'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'flex', alignItems: 'center' }}>
                    <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  Nuevo Cliente
                </button>
                <button style={{
                  height: '36px',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  backgroundColor: '#56ff06',
                  color: '#0f172a',
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                  cursor: 'pointer'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'flex', alignItems: 'center' }}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                  </svg>
                  Nuevo Turno
                </button>
              </div>

              {/* Right Actions */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginLeft: 'auto'
              }}>
                <button style={{
                  width: '36px',
                  height: '36px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  position: 'relative',
                  cursor: 'pointer'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#64748b' }}>
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
                  </svg>
                  <span style={{
                    position: 'absolute',
                    top: '6px',
                    right: '6px',
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#ef4444',
                    borderRadius: '50%'
                  }}></span>
                </button>
                <button style={{
                  width: '36px',
                  height: '36px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#64748b',
                  cursor: 'pointer'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#64748b' }}>
                    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* DASHBOARD CONTENT */}
          <div style={{
            flex: 1,
            padding: '32px 48px',
            overflowY: 'auto',
            maxWidth: '1280px',
            margin: '0 auto',
            width: '100%'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Stats Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                {/* Card 1: Revenue */}
                <div style={{
                  ...useCardAnimation(localFrame, 0, fps),
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  padding: '16px'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px' }}>
                    <div style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 500, color: '#0f172a' }}>
                      Ventas de hoy
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>
                      {formatPrice((stats?.today_revenue || 0) * 100)}
                    </div>
                    <div style={{ marginTop: '12px' }}>
                      <div style={{ fontSize: '12px', color: '#71717a', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>Ocupación por hora</div>
                      <div style={{ height: '40px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={[
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
                            ]}
                            barSize={8}
                            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                          >
                            <XAxis
                              dataKey="hour"
                              tick={{ fontSize: 8, fill: '#888' }}
                              tickLine={false}
                              axisLine={false}
                              interval={0}
                            />
                            <YAxis hide />
                            <Bar
                              dataKey="value"
                              fill="#56ff06"
                              radius={[2, 2, 0, 0]}
                              opacity={0.8}
                              isAnimationActive={false}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Today's Bookings */}
                <div style={{
                  ...useCardAnimation(localFrame, 1, fps),
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  padding: '16px'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px' }}>
                    <div style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 500, color: '#0f172a' }}>
                      Citas de hoy
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>
                      {stats?.today_bookings || 0}
                    </div>
                    <div style={{ height: '50px', marginTop: '12px' }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={[
                            { name: 'Lun', value: 4 },
                            { name: 'Mar', value: 6 },
                            { name: 'Mié', value: 5 },
                            { name: 'Jue', value: 3 },
                            { name: 'Vie', value: 3 }
                          ]}
                          barSize={20}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <XAxis
                            dataKey="name"
                            tick={{ fontSize: 9, fill: '#888' }}
                            tickLine={false}
                            axisLine={false}
                          />
                          <YAxis hide />
                          <Bar dataKey="value" fill="#56ff06" radius={[4, 4, 0, 0]} isAnimationActive={false} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Card 3: Unpaid Bookings */}
                <div style={{
                  ...useCardAnimation(localFrame, 2, fps),
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  padding: '16px'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px' }}>
                    <div style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 500, color: '#0f172a' }}>
                      Pendientes de pago
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>
                          {stats?.unpaid_bookings || 0}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                          <span style={{
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            fontSize: '12px',
                            fontWeight: 500,
                            border: '1px solid #e2e8f0',
                            backgroundColor: 'transparent',
                            color: '#64748b',
                            fontFamily: 'Inter, sans-serif'
                          }}>
                            Por cobrar
                          </span>
                        </div>
                      </div>
                      <div style={{ height: '60px', width: '60px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={[
                                { name: 'pendiente', value: stats?.unpaid_bookings || 0 },
                                { name: 'pagado', value: Math.max((stats?.today_bookings || 0) - (stats?.unpaid_bookings_today || 0), 0) }
                              ]}
                              cx="50%"
                              cy="50%"
                              innerRadius={20}
                              outerRadius={28}
                              paddingAngle={2}
                              dataKey="value"
                              isAnimationActive={false}
                            >
                              <Cell fill="#ef4444" />
                              <Cell fill="#56ff06" />
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div style={{ marginTop: '12px' }}>
                      <div style={{ height: '8px', width: '100%', overflow: 'hidden', borderRadius: '9999px', backgroundColor: '#f4f4f5' }}>
                        <div
                          style={{
                            height: '100%',
                            backgroundColor: '#56ff06',
                            width: `${stats?.today_bookings > 0 ? ((stats?.today_bookings - (stats?.unpaid_bookings_today || 0)) / stats?.today_bookings) * 100 : 100}%`
                          }}
                        />
                      </div>
                      <div style={{ fontSize: '12px', color: '#71717a', marginTop: '8px', fontFamily: 'Inter, sans-serif' }}>
                        Hoy: {stats?.today_bookings - (stats?.unpaid_bookings_today || 0)} pagadas, {stats?.unpaid_bookings_today || 0} pendientes
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4: Occupancy */}
                <div style={{
                  ...useCardAnimation(localFrame, 3, fps),
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  padding: '16px'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px' }}>
                    <div style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 500, color: '#0f172a' }}>
                      Ocupación
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>
                          {stats?.occupancy_rate || 0}%
                        </div>
                        <div style={{ fontSize: '12px', color: '#71717a', fontFamily: 'Inter, sans-serif' }}>
                          Promedio: {stats?.week_occupancy_avg || 0}%
                        </div>
                      </div>
                      <div style={{ height: '60px', width: '60px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={[
                                { name: 'ocupado', value: stats?.occupancy_rate || 0 },
                                { name: 'libre', value: 100 - (stats?.occupancy_rate || 0) }
                              ]}
                              cx="50%"
                              cy="50%"
                              innerRadius={20}
                              outerRadius={28}
                              paddingAngle={2}
                              dataKey="value"
                              isAnimationActive={false}
                            >
                              <Cell fill="#56ff06" />
                              <Cell fill="#e5e5e5" />
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Two Columns Layout */}
              <div style={{ display: 'grid', gridTemplateColumns: '4fr 3fr', gap: '24px' }}>
                {/* Revenue Chart */}
                <div style={{
                  ...useCardAnimation(localFrame, 4, fps),
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  padding: '24px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <div>
                      <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, color: '#0f172a' }}>Rendimiento</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', color: '#71717a', fontSize: '14px' }}>
                        Últimos 7 días
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {[
                        { value: 7, label: '7D' },
                        { value: 30, label: '1M' },
                        { value: 90, label: '3M' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          style={{
                            padding: '4px 12px',
                            fontSize: '12px',
                            fontWeight: 600,
                            borderRadius: '6px',
                            backgroundColor: option.value === 7 ? '#56ff06' : '#f4f4f5',
                            color: option.value === 7 ? '#0f172a' : '#64748b',
                            border: 'none',
                            fontFamily: 'Inter, sans-serif',
                            cursor: 'pointer'
                          }}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  {revenueChart?.days && revenueChart.days.length > 0 ? (
                    <div style={{ height: '250px' }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={revenueChart.days} animationDuration={0}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" strokeOpacity={0.5} />
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
                          <Line
                            type="monotone"
                            dataKey="revenue_cents"
                            stroke="#56ff06"
                            strokeWidth={3}
                            dot={{ fill: '#56ff06', r: 4 }}
                            activeDot={{ r: 6 }}
                            isAnimationActive={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  ) : null}
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '14px', color: '#71717a', fontFamily: 'Inter, sans-serif' }}>Total semanal</div>
                        <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>
                          {formatPrice(revenueChart?.total_revenue || 0)}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '14px', color: '#71717a', fontFamily: 'Inter, sans-serif' }}>Promedio diario</div>
                        <div style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>
                          {formatPrice(((revenueChart?.total_revenue || 0) / 7))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Bookings Table */}
                <div style={{
                  ...useCardAnimation(localFrame, 5, fps),
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  padding: '24px'
                }}>
                  <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>Próximas Citas</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', color: '#71717a', marginBottom: '16px', fontSize: '14px' }}>Turnos agendados para hoy</div>

                  {upcomingBookings.length > 0 && (
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                          <th style={{ padding: '8px', textAlign: 'left', fontWeight: 500, color: '#64748b', fontFamily: 'Inter, sans-serif' }}>Cliente</th>
                          <th style={{ padding: '8px', textAlign: 'left', fontWeight: 500, color: '#64748b', fontFamily: 'Inter, sans-serif' }}>Servicio</th>
                          <th style={{ padding: '8px', textAlign: 'left', fontWeight: 500, color: '#64748b', fontFamily: 'Inter, sans-serif' }}>Profesional</th>
                          <th style={{ padding: '8px', textAlign: 'right', fontWeight: 500, color: '#64748b', fontFamily: 'Inter, sans-serif' }}>Hora</th>
                          <th style={{ padding: '8px', textAlign: 'right', fontWeight: 500, color: '#64748b', fontFamily: 'Inter, sans-serif' }}>Estado</th>
                        </tr>
                      </thead>
                      <tbody>
                        {upcomingBookings.map((booking) => (
                          <tr key={booking.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                            <td style={{ padding: '8px', fontWeight: 500, color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>{booking.customer_name}</td>
                            <td style={{ padding: '8px', color: '#64748b', fontFamily: 'Inter, sans-serif' }}>{booking.service_name}</td>
                            <td style={{ padding: '8px', color: '#64748b', fontFamily: 'Inter, sans-serif' }}>{booking.worker_name}</td>
                            <td style={{ padding: '8px', textAlign: 'right', color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>{booking.start_time_formatted || '00:00'}</td>
                            <td style={{ padding: '8px', textAlign: 'right' }}>
                              {getStatusBadge(booking)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>

              {/* Staff Status - Full width */}
              <div style={{
                ...useCardAnimation(localFrame, 6, fps),
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                padding: '24px'
              }}>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>Estado del Personal</div>
                <div style={{ fontFamily: 'Inter, sans-serif', color: '#71717a', marginBottom: '16px', fontSize: '14px' }}>Disponibilidad actual</div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {workers.map((worker) => (
                    <div key={worker.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ display: 'flex', height: '36px', width: '36px', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', backgroundColor: 'rgba(86, 255, 6, 0.1)' }}>
                          <span style={{ fontSize: '14px', fontWeight: 700, color: '#56ff06' }}>{worker.name[0]}</span>
                        </div>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 500, color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>{worker.name}</div>
                          <div style={{ fontSize: '12px', color: '#71717a', fontFamily: 'Inter, sans-serif' }}>{worker.bookings_count} turnos hoy</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ height: '8px', width: '80px', overflow: 'hidden', borderRadius: '9999px', backgroundColor: '#f4f4f5' }}>
                          <div
                            style={{
                              height: '100%',
                              backgroundColor: '#56ff06',
                              width: `${Math.min((worker.bookings_count / 8) * 100, 100)}%`
                            }}
                          />
                        </div>
                        <span style={{ fontSize: '12px', color: '#71717a', width: '40px', textAlign: 'right', fontFamily: 'Inter, sans-serif' }}>
                          {Math.round((worker.bookings_count / 8) * 100)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
