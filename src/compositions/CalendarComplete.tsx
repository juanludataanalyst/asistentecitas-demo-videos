import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

const logoUrl = new URL('../assets/logo.svg', import.meta.url).href;

interface CalendarCompleteProps {
  startFrame: number;
}

interface AppointmentProps {
  children: React.ReactNode;
  localFrame: number;
  index: number;
  fps: number;
  top: number;
  height: number;
  borderColor: string;
  bgColor: string;
  opacity?: number;
}

const AnimatedAppointment: React.FC<AppointmentProps> = ({
  children,
  localFrame,
  index,
  fps,
  top,
  height,
  borderColor,
  bgColor,
  opacity = 1,
}) => {
  const layoutDelay = 20;
  const appointmentDelay = index * 15;
  const appointmentFrame = Math.max(0, localFrame - layoutDelay - appointmentDelay);

  const springValue = spring({
    frame: appointmentFrame,
    fps,
    config: { damping: 15, stiffness: 120, mass: 1 },
  });

  const clampedSpring = Math.min(Math.max(springValue, 0), 1);

  const scale = interpolate(clampedSpring, [0, 1], [0.3, 1], { extrapolateRight: 'clamp' });
  const opacityVal = interpolate(clampedSpring, [0, 1], [0, 1], { extrapolateRight: 'clamp' });
  const y = interpolate(clampedSpring, [0, 1], [100, 0], { extrapolateRight: 'clamp' });
  const rotation = interpolate(clampedSpring, [0, 0.5, 1], [-5, 2, 0], { extrapolateRight: 'clamp' });

  return (
    <div
      style={{
        position: 'absolute',
        left: '4px',
        right: '4px',
        top: `${top}px`,
        height: `${height}px`,
        borderRadius: '6px',
        border: '1px solid rgba(0,0,0,0.1)',
        borderLeft: `4px solid ${borderColor}`,
        backgroundColor: bgColor,
        padding: '12px',
        opacity: opacityVal * opacity,
        transform: `scale(${scale}) translateY(${y}px) rotate(${rotation}deg)`,
        transformOrigin: 'center top',
      }}
    >
      {children}
    </div>
  );
};

export const CalendarComplete: React.FC<CalendarCompleteProps> = ({ startFrame }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;

  const layoutOpacity = spring({ frame: localFrame, fps, config: { damping: 200 } });
  const layoutY = interpolate(localFrame, [0, 30], [-20, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ opacity: layoutOpacity, transform: `translateY(${layoutY}px)`, backgroundColor: '#fafaf9', fontFamily: 'Inter, -apple-system, sans-serif' }}>
      <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
        {/* Sidebar */}
        <div style={{ width: '16rem', backgroundColor: '#fafaf9', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '0', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '32px 0' }}>
              <img src={logoUrl} alt="asistentecitas" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
          <div style={{ flex: 1, padding: '24px 16px', overflowY: 'auto' }}>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#64748b', padding: '0 10px', marginBottom: '12px', fontFamily: 'Sora, sans-serif' }}>Operaciones</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', color: '#64748b', marginBottom: '4px', fontFamily: 'Sora, sans-serif', fontSize: '16px' }}>Dashboard</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', borderRadius: '8px', backgroundColor: '#56ff06', color: '#000000', fontWeight: 600, marginBottom: '4px', fontFamily: 'Sora, sans-serif', fontSize: '16px' }}>Calendario</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', color: '#64748b', marginBottom: '4px', fontFamily: 'Sora, sans-serif', fontSize: '16px' }}>Punto de Venta</div>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#64748b', padding: '0 10px', marginBottom: '12px', fontFamily: 'Sora, sans-serif' }}>Administración</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', color: '#64748b', marginBottom: '4px', fontFamily: 'Sora, sans-serif', fontSize: '16px' }}>Clientes</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', color: '#64748b', marginBottom: '4px', fontFamily: 'Sora, sans-serif', fontSize: '16px' }}>Configuración</div>
            </div>
          </div>
          <div style={{ padding: '16px', borderTop: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', color: '#64748b', fontFamily: 'Sora, sans-serif', fontSize: '16px' }}>Cerrar Sesión</div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundColor: '#fafaf9' }}>
          {/* Header */}
          <div style={{ height: '64px', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', padding: '0 16px' }}>
            <div style={{ display: 'flex', height: '100%', width: '100%', alignItems: 'center', gap: '16px', padding: '8px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '6px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>&lt;</div>
              <div style={{ width: '1px', height: '24px', backgroundColor: '#e2e8f0' }}></div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center' }}>
                <button style={{ height: '36px', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', cursor: 'pointer' }}>&lt;</button>
                <button style={{ height: '36px', padding: '8px 16px', borderRadius: '6px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', fontSize: '14px', fontWeight: 500, fontFamily: 'Inter, sans-serif', cursor: 'pointer' }}>Hoy</button>
                <button style={{ height: '36px', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', cursor: 'pointer' }}>&gt;</button>
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#64748b', fontFamily: 'Inter, sans-serif' }}>martes, 27 de enero de 2026</span>
                <div style={{ width: '1px', height: '24px', backgroundColor: '#e2e8f0', margin: '0 8px' }}></div>
                <button style={{ height: '36px', padding: '8px 16px', borderRadius: '6px', backgroundColor: '#56ff06', color: '#0f172a', border: 'none', fontSize: '14px', fontWeight: 500, fontFamily: 'Inter, sans-serif', cursor: 'pointer' }}>Día</button>
                <button style={{ height: '36px', padding: '8px 16px', borderRadius: '6px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', fontSize: '14px', fontWeight: 500, fontFamily: 'Inter, sans-serif', cursor: 'pointer' }}>Semana</button>
                <button style={{ height: '36px', padding: '8px 16px', borderRadius: '6px', backgroundColor: '#56ff06', color: '#0f172a', border: 'none', fontSize: '14px', fontWeight: 500, fontFamily: 'Inter, sans-serif', cursor: 'pointer' }}>+ Nueva Cita</button>
              </div>
            </div>
          </div>

          {/* Calendar Content */}
          <div style={{ flex: 1, padding: '16px', overflowY: 'auto', backgroundColor: '#fafaf9' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px' }}>
              {/* Tabs */}
              <div style={{ padding: '8px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.12)' }}>
                <div style={{ display: 'flex', gap: '4px', backgroundColor: '#f4f4f5', padding: '4px', borderRadius: '8px' }}>
                  <button style={{ flex: 1, padding: '6px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, border: 'none', backgroundColor: '#56ff06', color: '#0f172a', fontFamily: 'Inter, sans-serif', cursor: 'pointer' }}>Todos</button>
                  <button style={{ flex: 1, padding: '6px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, border: 'none', backgroundColor: 'transparent', color: '#64748b', fontFamily: 'Inter, sans-serif', textTransform: 'capitalize', cursor: 'pointer' }}>Ana López</button>
                  <button style={{ flex: 1, padding: '6px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, border: 'none', backgroundColor: 'transparent', color: '#64748b', fontFamily: 'Inter, sans-serif', textTransform: 'capitalize', cursor: 'pointer' }}>Carlos Rodríguez</button>
                  <button style={{ flex: 1, padding: '6px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, border: 'none', backgroundColor: 'transparent', color: '#64748b', fontFamily: 'Inter, sans-serif', textTransform: 'capitalize', cursor: 'pointer' }}>Laura Martínez</button>
                  <button style={{ flex: 1, padding: '6px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, border: 'none', backgroundColor: 'transparent', color: '#64748b', fontFamily: 'Inter, sans-serif', textTransform: 'capitalize', cursor: 'pointer' }}>María González</button>
                </div>
              </div>

              {/* Calendar */}
              <div style={{ flex: 1, borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.12)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {/* Worker Headers */}
                <div style={{ display: 'flex', backgroundColor: '#f9fafb', borderBottom: '1px solid #e2e8f0', marginLeft: '60px' }}>
                  {['Ana López', 'Carlos Rodríguez', 'Laura Martínez', 'María González'].map((worker, idx) => (
                    <div key={idx} style={{ flex: 1, minWidth: '220px', maxWidth: '350px', padding: '10px 12px', borderRight: idx < 3 ? '1px solid #e2e8f0' : 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: idx === 0 ? '#2563eb' : idx === 1 ? '#0d9488' : idx === 2 ? '#4f46e5' : '#0891b2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>
                        {worker[0]}
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: 500, color: '#0f172a', fontFamily: 'Sora, sans-serif' }}>{worker}</div>
                    </div>
                  ))}
                </div>

                {/* Calendar Body */}
                <div style={{ flex: 1, display: 'flex', overflow: 'hidden', position: 'relative' }}>
                  {/* Time Labels */}
                  <div style={{ width: '60px', backgroundColor: '#f9fafb', borderRight: '1px solid #e2e8f0', zIndex: 10 }}>
                    {Array.from({ length: 13 }, (_, i) => i + 8).map((hour) => (
                      <div key={hour} style={{ height: '100px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '8px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 500, color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>{hour.toString().padStart(2, '0')}:00</span>
                      </div>
                    ))}
                  </div>

                  {/* Grid */}
                  <div style={{ flex: 1, position: 'relative', marginLeft: '60px', minHeight: '1300px' }}>
                    {Array.from({ length: 13 }, (_, i) => (
                      <div key={i} style={{ position: 'absolute', left: 0, right: 0, height: '100px', borderBottom: '1px solid #e2e8f040', top: i * 100 }}></div>
                    ))}

                    {/* Column Dividers */}
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', pointerEvents: 'none' }}>
                      <div style={{ flex: 1, borderRight: '1px solid #e2e8f030' }}></div>
                      <div style={{ flex: 1, borderRight: '1px solid #e2e8f030' }}></div>
                      <div style={{ flex: 1, borderRight: '1px solid #e2e8f030' }}></div>
                      <div style={{ flex: 1 }}></div>
                    </div>

                    {/* Appointments */}
                    <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
                      {/* Ana López - Appointment 1 */}
                      <div style={{ flex: 1, position: 'relative' }}>
                        <AnimatedAppointment
                          localFrame={localFrame}
                          index={0}
                          fps={fps}
                          top={100}
                          height={200}
                          borderColor="#f43f5e"
                          bgColor="#f43f5e15"
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', gap: '8px' }}>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>09:00</div>
                              <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', fontFamily: 'Inter, sans-serif', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>David Castro</p>
                              <p style={{ fontSize: '14px', color: '#6b7280', fontFamily: 'Inter, sans-serif', margin: '4px 0 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Mechas Balanceadas</p>
                            </div>
                            <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>80.00€</div>
                          </div>
                        </AnimatedAppointment>

                        {/* Ana López - Appointment 2 */}
                        <AnimatedAppointment
                          localFrame={localFrame}
                          index={5}
                          fps={fps}
                          top={400}
                          height={150}
                          borderColor="#8b5cf6"
                          bgColor="#8b5cf615"
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', gap: '8px' }}>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>12:00</div>
                              <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', fontFamily: 'Inter, sans-serif', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Sofía Ruiz</p>
                              <p style={{ fontSize: '14px', color: '#6b7280', fontFamily: 'Inter, sans-serif', margin: '4px 0 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Barba y Contorno</p>
                            </div>
                            <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>25.00€</div>
                          </div>
                        </AnimatedAppointment>
                      </div>

                      {/* Carlos Rodríguez - Appointment 1 */}
                      <div style={{ flex: 1, position: 'relative' }}>
                        <AnimatedAppointment
                          localFrame={localFrame}
                          index={1}
                          fps={fps}
                          top={150}
                          height={150}
                          borderColor="#ec4899"
                          bgColor="#ec489915"
                          opacity={0.5}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', gap: '8px' }}>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>09:30</div>
                              <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', fontFamily: 'Inter, sans-serif', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Cristina Ortiz</p>
                              <p style={{ fontSize: '14px', color: '#6b7280', fontFamily: 'Inter, sans-serif', margin: '4px 0 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Tinte Completo</p>
                            </div>
                            <span style={{ fontSize: '18px', color: '#16a34a' }}>✓</span>
                          </div>
                        </AnimatedAppointment>

                        {/* Carlos Rodríguez - Appointment 2 */}
                        <AnimatedAppointment
                          localFrame={localFrame}
                          index={6}
                          fps={fps}
                          top={450}
                          height={100}
                          borderColor="#14b8a6"
                          bgColor="#14b8a615"
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', gap: '8px' }}>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>12:30</div>
                              <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', fontFamily: 'Inter, sans-serif', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Miguel Ángel</p>
                              <p style={{ fontSize: '14px', color: '#6b7280', fontFamily: 'Inter, sans-serif', margin: '4px 0 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Corte Cabello Hombre</p>
                            </div>
                            <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>18.00€</div>
                          </div>
                        </AnimatedAppointment>
                      </div>

                      {/* Laura Martínez - Appointment 1 */}
                      <div style={{ flex: 1, position: 'relative' }}>
                        <AnimatedAppointment
                          localFrame={localFrame}
                          index={2}
                          fps={fps}
                          top={250}
                          height={100}
                          borderColor="#fb923c"
                          bgColor="#fb923c15"
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', gap: '8px' }}>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>10:30</div>
                              <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', fontFamily: 'Inter, sans-serif', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Elena Navarro</p>
                              <p style={{ fontSize: '14px', color: '#6b7280', fontFamily: 'Inter, sans-serif', margin: '4px 0 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Corte Cabello Mujer</p>
                            </div>
                            <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>35.00€</div>
                          </div>
                        </AnimatedAppointment>

                        {/* Laura Martínez - Appointment 2 */}
                        <AnimatedAppointment
                          localFrame={localFrame}
                          index={7}
                          fps={fps}
                          top={500}
                          height={200}
                          borderColor="#f59e0b"
                          bgColor="#f59e0b15"
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', gap: '8px' }}>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>13:00</div>
                              <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', fontFamily: 'Inter, sans-serif', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Lucía Fernández</p>
                              <p style={{ fontSize: '14px', color: '#6b7280', fontFamily: 'Inter, sans-serif', margin: '4px 0 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Balayage y Corte</p>
                            </div>
                            <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>120.00€</div>
                          </div>
                        </AnimatedAppointment>
                      </div>

                      {/* María González - Appointment 1 */}
                      <div style={{ flex: 1, position: 'relative' }}>
                        <AnimatedAppointment
                          localFrame={localFrame}
                          index={3}
                          fps={fps}
                          top={100}
                          height={150}
                          borderColor="#ec4899"
                          bgColor="#ec489915"
                          opacity={0.5}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', gap: '8px' }}>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>09:00</div>
                              <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', fontFamily: 'Inter, sans-serif', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Antonio Torres</p>
                              <p style={{ fontSize: '14px', color: '#6b7280', fontFamily: 'Inter, sans-serif', margin: '4px 0 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Tinte Completo</p>
                            </div>
                            <span style={{ fontSize: '18px', color: '#16a34a' }}>✓</span>
                          </div>
                        </AnimatedAppointment>

                        {/* María González - Appointment 2 */}
                        <AnimatedAppointment
                          localFrame={localFrame}
                          index={4}
                          fps={fps}
                          top={350}
                          height={100}
                          borderColor="#fb923c"
                          bgColor="#fb923c15"
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', gap: '8px' }}>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>11:30</div>
                              <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', fontFamily: 'Inter, sans-serif', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Antonio Torres</p>
                              <p style={{ fontSize: '14px', color: '#6b7280', fontFamily: 'Inter, sans-serif', margin: '4px 0 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Corte Cabello Mujer</p>
                            </div>
                            <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', fontFamily: 'Inter, sans-serif' }}>35.00€</div>
                          </div>
                        </AnimatedAppointment>

                        {/* María González - Appointment 3 */}
                        <AnimatedAppointment
                          localFrame={localFrame}
                          index={8}
                          fps={fps}
                          top={550}
                          height={150}
                          borderColor="#a855f7"
                          bgColor="#a855f715"
                          opacity={0.5}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', gap: '8px' }}>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280', marginBottom: '4px', fontFamily: 'Inter, sans-serif' }}>13:30</div>
                              <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', fontFamily: 'Inter, sans-serif', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Carmen Vega</p>
                              <p style={{ fontSize: '14px', color: '#6b7280', fontFamily: 'Inter, sans-serif', margin: '4px 0 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Hidratación Profunda</p>
                            </div>
                            <span style={{ fontSize: '18px', color: '#16a34a' }}>✓</span>
                          </div>
                        </AnimatedAppointment>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
