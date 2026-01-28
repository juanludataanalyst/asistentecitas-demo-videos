#!/bin/bash

# Script para generar screenshots de los componentes Remotion

echo "🎬 Generando screenshots de componentes Remotion..."
echo ""

# Crear directorio de screenshots si no existe
mkdir -p ../screenshots

# Usar el CLI de Remotion para renderizar frames como PNG
# Para cada componente, renderizamos un frame específico y lo guardamos como PNG

echo "📱 Generando screenshot de WhatsApp..."
npx remotion render SeriesSequence whatsapp-feature --frames=0 --image-sequence --output=../screenshots/whatsapp.png --overwrite

echo "📅 Generando screenshot de Calendario..."
npx remotion render SeriesSequence calendar-feature --frames=0 --image-sequence --output=../screenshots/calendar.png --overwrite

echo "📊 Dashboard screenshot ya existe..."

echo ""
echo "✅ Screenshots generados en ../screenshots/"
echo ""
echo "Para capturar las imágenes promocionales como PNG:"
echo "1. Abre los archivos HTML en promotional-images/"
echo "2. Usa las herramientas de desarrollador del navegador (F12)"
echo "3. Cmd/Ctrl + Shift + P → escribe 'screenshot'"
echo "4. Selecciona 'Capture full size screenshot'"
