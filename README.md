# Asistentecitas Demo Videos

Remotion project for generating demo videos of the Asistentecitas salon management dashboard and calendar.

## Tech Stack

- **Remotion 4.x** - React-based video generation
- **React 18** - UI framework
- **Recharts** - Chart library for dashboard visualizations
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **TypeScript** - Type safety

## Project Structure

```
├── src/
│   ├── index.tsx              # Remotion entry point
│   ├── compositions/
│   │   ├── FullDemo.tsx       # Main composition coordinating all scenes
│   │   ├── DashboardDemo.tsx  # Dashboard scene with stats and charts
│   │   └── CalendarDemo.tsx   # Calendar scene with colored bookings
│   ├── components/
│   │   ├── TitlesOverlay.tsx  # Animated title/subtitle overlays
│   │   └── ui/                # shadcn/ui components
│   └── styles.css             # Global styles
├── scripts/
│   └── render-all.sh          # Batch rendering script
└── remotion.config.ts         # Remotion configuration
```

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the Remotion Studio to preview and edit compositions:

```bash
npm start
```

Open http://localhost:3000 in your browser.

### Rendering Videos

#### Render All Formats

```bash
./scripts/render-all.sh
```

This generates:
- `dist/demo-horizontal.mp4` - Horizontal version (1920x1080)
- `dist/demo-vertical.mp4` - Vertical version (1080x1920) for social media
- `dist/thumb.png` - Thumbnail image

#### Manual Rendering

Render specific format:

```bash
# Horizontal (1920x1080)
npx remotion render FullDemo --output=dist/demo.mp4 --codec=h264 --width=1920 --height=1080 --fps=30

# Vertical for social media (1080x1920)
npx remotion render FullDemo --output=dist/demo-vertical.mp4 --codec=h264 --width=1080 --height=1920 --fps=30

# Generate thumbnail
npx remotion still FullDemo --output=dist/thumb.png --width=1920 --height=1080
```

## Video Specifications

- **Format:** MP4 (H.264 codec)
- **Resolution:** 1920x1080 (16:9) or 1080x1920 (9:16)
- **Frame Rate:** 30fps
- **Duration:** 60 seconds
- **Bitrate:** ~5 Mbps

## Demo Scenes

1. **Dashboard Scene (0-30s)**
   - Real-time metrics (revenue, bookings, occupancy)
   - Animated charts (line, bar, pie)
   - Staff availability

2. **Calendar Scene (30-55s)**
   - Week/day view with colored bookings
   - Service-based color coding
   - Fresha-style layout

3. **Booking Flow Scene (55-60s)**
   - Quick appointment creation
   - Payment processing

## Styling

The project uses the same design system as the main salon-app:
- **Primary Color:** Purple (#5A2D82)
- **Accent Color:** Lime Green (#56ff06)
- **Fonts:** Sora (display), Inter (body)
- **Border Radius:** 0.5rem
- **Elevation:** Material-style shadows

## Customization

### Modify Scene Timings

Edit `src/compositions/FullDemo.tsx`:

```typescript
const DASHBOARD_END = 30 * fps; // Change 30 to desired seconds
const CALENDAR_END = CALENDAR_START + (25 * fps); // Change 25 to desired seconds
```

### Modify Mock Data

Edit the mock data in:
- `src/compositions/DashboardDemo.tsx` - Dashboard stats
- `src/compositions/CalendarDemo.tsx` - Calendar bookings

### Add New Scenes

1. Create new composition component in `src/compositions/`
2. Import and add to `FullDemo.tsx`
3. Add scene config to `scenes` array
4. Update timings

## Performance Tips

- Use `spring()` for smooth animations
- Pre-calculate data where possible
- Avoid expensive calculations per frame
- Test render times before final render

## Troubleshooting

### Video rendering fails

Ensure FFMPEG is installed:

```bash
# Ubuntu/Debian
sudo apt-get install ffmpeg

# macOS
brew install ffmpeg
```

### Animations are jerky

Use `spring()` with proper damping:
```typescript
const opacity = spring({
  frame: localFrame,
  fps,
  config: { damping: 200 },
});
```

### Wrong colors/fonts

The project copies assets from the main salon-app. Ensure:
- Tailwind config is synced
- CSS variables are consistent
- Fonts are loaded (Sora & Inter)

## License

ISC

## Repository

https://github.com/juanludataanalyst/asistentecitas-demo-videos
