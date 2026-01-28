# Imágenes Promocionales Profesionales - Asistentecitas

## 4 Imágenes Creadas

Todas usan PNGs REALES de la aplicación:

1. **dashboard-promo-final.html** - Dashboard (screenshots/dashboard.PNG)
2. **calendar-promo-final.html** - Calendario (screenshots/calendar.png)
3. **whatsapp-promo-final.html** - WhatsApp (screenshots/whatsapp.png)
4. **general-promo-final.html** - Vista General (screenshots/general.png)

## Cómo Usar

### Abrir en navegador:

```bash
# Opción 1: Abrir directamente
xdg-open promotional-images/dashboard-promo-final.html
xdg-open promotional-images/calendar-promo-final.html
xdg-open promotional-images/whatsapp-promo-final.html
xdg-open promotional-images/general-promo-final.html

# Opción 2: Servidor HTTP
python3 -m http.server 8000
# Luego abre: http://localhost:8000/promotional-images/
```

### Capturar como PNG:

**Método recomendado (Firefox/Chrome):**
1. Abre el HTML en el navegador
2. Presiona F12 (DevTools)
3. Presiona Cmd/Ctrl + Shift + P
4. Escribe "screenshot"
5. Selecciona "Capture full size screenshot"

**Manual:**
- Mac: Cmd + Shift + 4 (selección)
- Windows: Win + Shift + S (recorte)

## Características de Diseño

Cada imagen incluye:

- ✅ PNG REAL de la aplicación
- ✅ Gradiente moderno: blanco → verde claro (#f0fdf4)
- ✅ Browser chrome simulado (estilo macOS)
- ✅ Logo Asistentecitas
- ✅ Marketing copy destacado
- ✅ Feature badges (3-4 características)
- ✅ CTA: "Agenda tu demo hoy"
- ✅ Badge promocional
- ✅ Efectos glow sutiles
- ✅ Decoración con puntos
- ✅ Dimensiones: 1920x1080px (Full HD)

## Detalles por Imagen

### 1. Dashboard - "Control Total"
- Copy: "Control Total de tu Negocio"
- Subtitle: "Métricas en tiempo real para tomar mejores decisiones"
- Badges: Dashboard, Real-time, Analytics
- Badge: "Potencia tu negocio"

### 2. Calendar - "Gestión de Citas"
- Copy: "Gestión de Citas Inteligente"
- Subtitle: "Calendario integrado para organizar tu salón"
- Badges: Calendario, Smart Booking, Múltiples Empleados
- Badge: "Organiza tu tiempo"

### 3. WhatsApp - "WhatsApp Automatizado"
- Copy: "WhatsApp Automatizado"
- Subtitle: "IA que responde 24/7 por ti"
- Badges: IA Chatbot, 24/7, Respuestas Automáticas
- Badge: "Potenciado por IA"

### 4. General - "Todo en Uno"
- Copy: "Todo lo que tu Salón Necesita"
- Subtitle: "WhatsApp, Citas y Métricas en una sola plataforma"
- Badges: WhatsApp, Calendario, Dashboard, Todo en Uno
- Badge: "All-in-One Platform"

## Paleta de Colores

- **Primario**: `#56ff06` (verde Asistentecitas)
- **Fondo**: Gradiente `#ffffff` → `#f0fdf4`
- **Texto principal**: `#1a1a1a`
- **Subtítulos**: `#666`
- **Sombra**: `rgba(86, 255, 6, 0.3)` para elementos verdes

## Personalización

Para modificar textos o colores, edita directamente el archivo HTML. Los estilos están en el `<head>`.

### Ejemplos de personalización:

```css
/* Cambiar color primario */
background: #56ff06; → background: #tu-color;

/* Cambiar tamaño del título */
font-size: 68px; → font-size: tu-tamaño;

/* Cambiar texto del CTA */
Agenda tu demo hoy → Tu texto aquí
```

## Archivos de Imágenes

Los PNGs fuente están en `/screenshots/`:
- dashboard.PNG (117KB) - Original de la app
- calendar.png (498KB) - Generado desde Remotion
- whatsapp.png (498KB) - Generado desde Remotion
- general.png (498KB) - Generado desde Remotion
