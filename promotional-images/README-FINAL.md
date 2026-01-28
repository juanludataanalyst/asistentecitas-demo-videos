# Imágenes Promocionales - Asistentecitas (HTMLs Reales)

## Archivos Creados

2 imágenes promocionales HTML que incrustan los HTMLs REALES de la aplicación:

1. **calendar-promo.html** - Gestión de Citas (incrusta `screenshots/calendar.htm`)
2. **dashboard-promo.html** - Control Total (incrusta `screenshots/dashboard.htm`)

Estas imágenes cargan los HTMLs REALES de la aplicación usando la etiqueta `<object>`.

## Cómo Usar

### Opción 1: Servidor HTTP (Recomendado)

Los HTMLs reales necesitan un servidor HTTP porque cargan recursos relativos:

```bash
cd /home/juanludev/projects/asistentecitas-demo-videos
python3 -m http.server 8000
```

Luego abre en tu navegador:
- http://localhost:8000/promotional-images/calendar-promo.html
- http://localhost:8000/promotional-images/dashboard-promo.html

### Opción 2: Capturar como PNG

Una vez abierto en el navegador:

**Firefox/Chrome:**
1. Abre el HTML en el navegador
2. F12 (DevTools)
3. Cmd/Ctrl + Shift + P
4. Escribe "screenshot"
5. Selecciona "Capture full size screenshot"

**Manual:**
- Mac: Cmd + Shift + 4 (selección)
- Windows: Win + Shift + S (recorte)

## Características

- ✅ HTMLs REALES de la aplicación (calendar.htm, dashboard.htm)
- ✅ Marketing wrapper profesional
- ✅ Gradiente moderno blanco → verde
- ✅ Browser chrome simulado (estilo macOS)
- ✅ Logo + Marketing copy
- ✅ CTA "Agenda tu demo hoy"
- ✅ Badges con features
- ✅ 1920x1080px (Full HD)

## Archivos Originales

Los HTMLs reales de la aplicación están en:
- `screenshots/calendar.htm` (157KB) - Calendario completo
- `screenshots/dashboard.htm` (184KB) - Dashboard completo
- `screenshots/dashboard.PNG` (117KB) - Imagen estática del dashboard

## Notas Importantes

1. Los HTMLs necesitan un servidor HTTP para cargarse correctamente
2. Los recursos (CSS, JS, imágenes) están en rutas relativas
3. Para usar estos HTMLs fuera del proyecto, necesitarías copiar también:
   - La carpeta `calendar_files/` (si existe)
   - La carpeta `dashboard_files/` (si existe)
   - Los assets de la aplicación

## Personalización

Para modificar colores o textos, edita directamente el HTML. Los estilos están en el `<head>`.

Colores principales:
- Primario: `#56ff06` (verde Asistentecitas)
- Fondo: Gradiente de `#ffffff` a `#f0fdf4`
- Texto: `#1a1a1a` (casi negro)
- Subtítulos: `#666` (gris medio)
