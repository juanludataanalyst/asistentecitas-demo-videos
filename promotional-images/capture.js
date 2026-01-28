/**
 * Script para capturar automáticamente los HTML como PNG
 * Requiere: npm install puppeteer
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const images = [
  { name: 'whatsapp-feature', title: 'WhatsApp Automatizado' },
  { name: 'calendar-feature', title: 'Gestión de Citas' },
  { name: 'dashboard-feature', title: 'Dashboard Métricas' },
  { name: 'general-feature', title: 'Vista General' }
];

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: {
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2 // Para mejor calidad (Retina)
    }
  });

  const page = await browser.newPage();

  // Crear carpeta de output si no existe
  const outputDir = path.join(__dirname, 'output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  for (const image of images) {
    const filePath = path.join(__dirname, `${image.name}.html`);
    const outputFile = path.join(outputDir, `${image.name}.png`);

    console.log(`Capturando: ${image.title}...`);

    await page.goto(`file://${filePath}`);
    await page.waitForSelector('body');

    // Esperar a que cargue la fuente
    await page.waitForTimeout(500);

    await page.screenshot({
      path: outputFile,
      fullPage: false
    });

    console.log(`✅ Guardado: ${outputFile}`);
  }

  await browser.close();
  console.log('\n🎉 Todas las imágenes han sido capturadas!');
  console.log(`📁 Ubicación: ${outputDir}`);
}

captureScreenshots().catch(console.error);
