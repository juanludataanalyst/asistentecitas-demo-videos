import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { Card } from '../components/ui/card';

interface CalendarDemoProps {
  startFrame: number;
}

// Mock bookings for demo
const mockBookings = [
  { id: 1, customer: 'María García', service: 'Corte Mujer', time: '09:00', duration: 60, price: 2500, paid: true, color: 'bg-rose-100 border-l-rose-500' },
  { id: 2, customer: 'Ana López', service: 'Tinte', time: '10:00', duration: 90, price: 4500, paid: false, color: 'bg-violet-100 border-l-violet-500' },
  { id: 3, customer: 'Carmen Ruiz', service: 'Mechas', time: '11:30', duration: 120, price: 6500, paid: true, color: 'bg-cyan-100 border-l-cyan-500' },
  { id: 4, customer: 'Laura Martínez', service: 'Peinado', time: '13:00', duration: 45, price: 1800, paid: false, color: 'bg-amber-100 border-l-amber-500' },
  { id: 5, customer: 'Isabel Fernández', service: 'Manicura', time: '14:00', duration: 30, price: 1200, paid: true, color: 'bg-orange-100 border-l-orange-400' },
  { id: 6, customer: 'Sofia Sánchez', service: 'Pedicura', time: '15:00', duration: 45, price: 1500, paid: true, color: 'bg-purple-100 border-l-purple-400' },
];

const hours = Array.from({ length: 11 }, (_, i) => {
  const h = 8 + i;
  return `${h < 10 ? '0' : ''}${h}:00`;
});

const formatPrice = (cents: number) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(cents / 100);
};

export const CalendarDemo: React.FC<CalendarDemoProps> = ({ startFrame }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;

  // Fade in animation
  const opacity = spring({
    frame: localFrame,
    fps,
    config: { damping: 200 },
  });

  // Calculate position and height for bookings
  const calculateTop = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    const totalMinutes = (hours - 8) * 60 + minutes;
    return (totalMinutes / 60) * 100; // 100px per hour
  };

  const calculateHeight = (duration: number) => {
    return Math.max((duration / 60) * 100, 40);
  };

  return (
    <AbsoluteFill
      style={{
        opacity,
        backgroundColor: '#fafaf9',
        padding: '60px'
      }}
    >
      <div style={{ maxWidth: '1600px', margin: '0 auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Title */}
        <h1 style={{
          fontSize: '48px',
          fontWeight: 700,
          fontFamily: 'Sora, sans-serif',
          marginBottom: '30px',
          color: '#171717'
        }}>
          Calendario Inteligente
        </h1>

        {/* Legend */}
        <div style={{
          display: 'flex',
          gap: '16px',
          marginBottom: '20px',
          flexWrap: 'wrap'
        }}>
          {mockBookings.slice(0, 5).map((booking) => (
            <div key={booking.id} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '8px',
              backgroundColor: '#f5f5f5',
              border: '1px solid #e5e5e5'
            }}>
              <div style={{
                width: '16px',
                height: '16px',
                borderRadius: '4px',
                backgroundColor: booking.color.includes('rose') ? '#f43f5e' :
                                booking.color.includes('violet') ? '#8b5cf6' :
                                booking.color.includes('cyan') ? '#06b6d4' :
                                booking.color.includes('amber') ? '#f59e0b' :
                                booking.color.includes('orange') ? '#fb923c' : '#a855f7'
              }} />
              <span style={{ fontSize: '14px', fontWeight: 500 }}>{booking.service}</span>
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <Card style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            {/* Time labels */}
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '60px',
              height: '100%',
              backgroundColor: '#f5f5f5',
              borderRight: '1px solid #e5e5e5',
              zIndex: 10
            }}>
              {hours.map((hour) => (
                <div key={hour} style={{
                  height: '100px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  paddingTop: '8px'
                }}>
                  <span style={{ fontSize: '12px', fontWeight: 500, color: '#888' }}>
                    {hour}
                  </span>
                </div>
              ))}
            </div>

            {/* Grid */}
            <div style={{
              marginLeft: '60px',
              position: 'relative',
              minHeight: '1100px'
            }}>
              {/* Background lines */}
              {hours.map((_, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: '100px',
                  borderBottom: '1px solid #e5e5e5',
                  top: `${i * 100}px`
                }} />
              ))}

              {/* Day column */}
              <div style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                paddingLeft: '20px',
                paddingRight: '20px'
              }}>
                <div style={{
                  flex: 1,
                  borderRight: '1px solid #e5e5e5',
                  position: 'relative',
                  backgroundColor: 'rgba(90, 45, 130, 0.05)'
                }}>
                  {/* Bookings */}
                  {mockBookings.map((booking) => {
                    const top = calculateTop(booking.time);
                    const height = calculateHeight(booking.duration);

                    return (
                      <div
                        key={booking.id}
                        style={{
                          position: 'absolute',
                          left: '10px',
                          right: '10px',
                          top: `${top}px`,
                          height: `${height}px`,
                          borderRadius: '6px',
                          border: '1px solid #d1d5db',
                          borderLeftWidth: '4px',
                          borderLeftColor: booking.color.includes('rose') ? '#f43f5e' :
                                            booking.color.includes('violet') ? '#8b5cf6' :
                                            booking.color.includes('cyan') ? '#06b6d4' :
                                            booking.color.includes('amber') ? '#f59e0b' :
                                            booking.color.includes('orange') ? '#fb923c' : '#a855f7',
                          backgroundColor: booking.color.includes('rose') ? '#ffe4e6' :
                                          booking.color.includes('violet') ? '#ede9fe' :
                                          booking.color.includes('cyan') ? '#cffafe' :
                                          booking.color.includes('amber') ? '#fef3c7' :
                                          booking.color.includes('orange') ? '#fed7aa' : '#f3e8ff',
                          padding: '12px',
                          cursor: 'pointer',
                          transition: 'opacity 0.2s',
                          opacity: booking.paid ? 0.6 : 1
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', height: 'justify-content: space-between' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                            <span style={{
                              fontSize: '13px',
                              fontWeight: 700,
                              color: '#171717'
                            }}>
                              {booking.customer}
                            </span>
                            <span style={{
                              fontSize: '12px',
                              fontWeight: 700,
                              backgroundColor: 'rgba(90, 45, 130, 0.1)',
                              color: '#5A2D82',
                              padding: '2px 8px',
                              borderRadius: '4px'
                            }}>
                              {booking.time}
                            </span>
                          </div>
                          <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
                            {booking.service}
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                            <span style={{ fontSize: '12px', fontWeight: 700, color: '#333' }}>
                              {formatPrice(booking.price)}
                            </span>
                            {booking.paid ? (
                              <span style={{ color: '#10b981', fontSize: '14px' }}>✓</span>
                            ) : (
                              <span style={{
                                fontSize: '11px',
                                fontWeight: 700,
                                color: 'white',
                                backgroundColor: '#5A2D82',
                                padding: '2px 8px',
                                borderRadius: '4px'
                              }}>
                                COBRAR
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Current time indicator */}
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    borderTop: '2px solid #ef4444',
                    top: '550px',
                    zIndex: 30
                  }}>
                    <div style={{
                      position: 'absolute',
                      left: '-6px',
                      width: '12px',
                      height: '12px',
                      backgroundColor: '#ef4444',
                      borderRadius: '50%'
                    }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </AbsoluteFill>
  );
};
