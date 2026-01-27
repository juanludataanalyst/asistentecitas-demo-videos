#!/bin/bash

# Script to render all Remotion compositions

echo "🎬 Rendering Remotion videos..."

# Create dist directory
mkdir -p dist

# Render horizontal version (1920x1080)
echo "📐 Rendering horizontal version (1920x1080)..."
npx remotion render FullDemo --output=dist/demo-horizontal.mp4 --codec=h264-ac --width=1920 --height=1080 --fps=30

# Render vertical version for social media (1080x1920)
echo "📱 Rendering vertical version (1080x1920)..."
npx remotion render FullDemo --output=dist/demo-vertical.mp4 --codec=h264-ac --width=1080 --height=1920 --fps=30

# Generate thumbnail
echo "🖼️  Generating thumbnail..."
npx remotion still FullDemo --output=dist/thumb.png --width=1920 --height=1080

echo "✅ All renders complete!"
echo "📂 Output files are in the dist/ directory"
