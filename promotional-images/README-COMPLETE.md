# Imágenes Promocionales - Asistentecitas

Colección completa de imágenes promocionales profesionales creadas con React + Remotion.

## Imágenes Generadas

Todas las imágenes son formato **1920x1080px (Full HD)** en **PNG** con diseño SaaS profesional.

### 1. Dashboard de Métricas
**Archivo**: `saas-dashboard.png` (512KB)

**Componente**: `src/compositions/SaaSPromotionalImage.tsx`

**Contenido**:
- Logo de Asistentecitas
- Título: "Dashboard de Métricas"
- Copy: "Visualiza ingresos, citas, productos más vendidos y rendimiento de empleados en tiempo real."
- Screenshot del dashboard completo
- Marca de agua: asistentecitas.com

**Uso ideal**: Capterra, Product Hunt, landing pages

---

### 2. Gestión de Citas
**Archivo**: `calendar.png` (295KB)

**Componente**: `src/compositions/CalendarPromotionalImage.tsx`

**Contenido**:
- Logo de Asistentecitas
- Título: "Gestión de Citas"
- Copy: "Organiza tu agenda con un calendario intuitivo. Visualiza, programa y gestiona citas de forma eficiente."
- Screenshot del calendario
- URL: asistentecitas.com/calendario
- Marca de agua: asistentecitas.com

**Uso ideal**: Marketing de calendario, demostraciones

---

### 3. WhatsApp Integrado
**Archivo**: `whatsapp.png` (300KB)

**Componente**: `src/compositions/WhatsAppPromotionalImage.tsx`

**Contenido**:
- Logo de Asistentecitas
- Título: "WhatsApp Integrado"
- Copy: "Automatiza recordatorios y confirmaciones por WhatsApp. Mantén a tus clientes informados sin esfuerzo."
- Screenshot de la integración WhatsApp
- URL: asistentecitas.com/whatsapp
- Marca de agua: asistentecitas.com

**Uso ideal**: Marketing de automatización, WhatsApp Business

---

### 4. Gestión Completa
**Archivo**: `general.png` (308KB)

**Componente**: `src/compositions/GeneralPromotionalImage.tsx`

**Contenido**:
- Logo de Asistentecitas
- Título: "Gestión Completa para Salones de Belleza"
- Copy: "Todo lo que necesitas para administrar tu negocio: citas, clientes, inventario, métricas y más en una sola plataforma."
- Screenshot general de la plataforma
- URL: asistentecitas.com
- Marca de agua: asistentecitas.com

**Uso ideal**: Presentaciones generales, overview del producto

---

## Características del Diseño

Todas las imágenes comparten el mismo estilo profesional:

- ✅ **React + Remotion** - Componentes React reproducibles
- ✅ **Estilo SaaS** - Inspirado en Capterra/Product Hunt
- ✅ **Fuente Sora** - Tipografía profesional
- ✅ **Off-white background** - #fafbfa (blanco roto)
- ✅ **Acentos verde lima** - #56ff06 (marca Asistentecitas)
- ✅ **Browser frame** - Marco de navegador macOS-style con dots
- ✅ **Glow effect** - Efecto de brillo sutil detrás del screenshot
- ✅ **Marca de agua** - asistentecitas.com en esquina inferior derecha
- ✅ **Screenshot completo** - Todas las capturas son visibles completamente

## Cómo Modificar las Imágenes

### Cambiar Textos
Edita el componente correspondiente en `src/compositions/`:
- `SaaSPromotionalImage.tsx`
- `CalendarPromotionalImage.tsx`
- `WhatsAppPromotionalImage.tsx`
- `GeneralPromotionalImage.tsx`

Busca las cadenas de texto y modifícalas según necesites.

### Cambiar Colores
Los colores están definidos en los estilos inline:
- Background: `#fafbfa`
- Texto oscuro: `#111827`
- Texto secundario: `#1f2937`
- Verde lima: `#56ff06`
- Marca de agua: `rgba(0, 0, 0, 0.3)`

### Cambiar Screenshots
Las imágenes se cargan desde el directorio `screenshots/`:
- `dashboard.PNG`
- `calendar.png`
- `whatsapp.png`
- `general.png`

Para usar un screenshot diferente, cambia la ruta en la línea:
```tsx
src={new URL('../../screenshots/TU_IMAGEN.png', import.meta.url).href}
```

## Cómo Regenerar las Imágenes

```bash
# Dashboard de Métricas
npx remotion render SaaSPromotionalImage \
  --frames=0 \
  --sequence \
  --image-format=png \
  --output=./promotional-images/saas-dashboard \
  --overwrite

# Gestión de Citas
npx remotion render CalendarPromotionalImage \
  --frames=0 \
  --sequence \
  --image-format=png \
  --output=./promotional-images/calendar \
  --overwrite

# WhatsApp Integrado
npx remotion render WhatsAppPromotionalImage \
  --frames=0 \
  --sequence \
  --image-format=png \
  --output=./promotional-images/whatsapp \
  --overwrite

# Gestión Completa
npx remotion render GeneralPromotionalImage \
  --frames=0 \
  --sequence \
  --image-format=png \
  --output=./promotional-images/general \
  --overwrite
```

**Nota**: Remotion crea un directorio con `element-0.png`. Mueve el archivo al directorio principal:
```bash
mv promotional-images/NOMBRE/element-0.png promotional-images/NOMBRE.png
rmdir promotional-images/NOMBRE
```

## Uso Recomendado

Perfectas para:
- ✅ **Capterra** - Listings de software
- ✅ **Product Hunt** - Lanzamientos
- ✅ **Landing pages** - Hero sections, features
- ✅ **Presentaciones** - Pitch decks, sales decks
- ✅ **Marketing materials** - Social media, email marketing
- ✅ **Documentación** - Help centers, guías de usuario

## Crear Nuevas Imágenes

Para crear imágenes adicionales con el mismo estilo:

1. **Duplicar un componente existente**:
   ```bash
   cp src/compositions/SaaSPromotionalImage.tsx src/compositions/NuevaImagen.tsx
   ```

2. **Cambiar el nombre del componente**:
   ```tsx
   export const NuevaImagen = () => { ... }
   ```

3. **Modificar contenido**:
   - Título y copy
   - Ruta del screenshot
   - URL en el browser frame

4. **Registrar en `src/index.tsx`**:
   ```tsx
   import { NuevaImagen } from "./compositions/NuevaImagen";

   <Composition
     id="NuevaImagen"
     component={NuevaImagen}
     durationInFrames={1}
     fps={30}
     width={1920}
     height={1080}
   />
   ```

5. **Renderizar**:
   ```bash
   npx remotion render NuevaImagen \
     --frames=0 \
     --sequence \
     --image-format=png \
     --output=./promotional-images/nueva-imagen \
     --overwrite
   ```

## Stack Tecnológico

- **React** - Componentes UI
- **Remotion** - Framework de renderizado
- **TypeScript** - Type safety
- **Sora Font** - Tipografía Google Fonts
- **PNG** - Formato de salida de alta calidad

## Archivos del Proyecto

```
src/compositions/
├── SaaSPromotionalImage.tsx      # Dashboard
├── CalendarPromotionalImage.tsx  # Calendario
├── WhatsAppPromotionalImage.tsx  # WhatsApp
└── GeneralPromotionalImage.tsx   # General

screenshots/
├── dashboard.PNG
├── calendar.png
├── whatsapp.png
└── general.png

promotional-images/
├── saas-dashboard.png
├── calendar.png
├── whatsapp.png
├── general.png
└── README-COMPLETE.md            # Este archivo
```

## Soporte

Para problemas o preguntas sobre las imágenes promocionales:
1. Revisa que el screenshot exista en `screenshots/`
2. Verifica la ruta en el componente
3. Asegúrate de que el componente esté registrado en `src/index.tsx`
4. Regenera la imagen con el comando de renderizado
