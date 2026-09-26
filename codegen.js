const { chromium } = require('playwright');

(async () => {
  // Récupère l'URL passée en argument dans le terminal, ou utilise l'URL par défaut
  const targetUrl = process.argv[2] || 'https://www.saq.com';

  // S'assure que l'URL commence par http:// ou https://
  const url = targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`;

  const browser = await chromium.launch({
    headless: false,
    channel: 'chrome', // Ou 'chromium' si Chrome n'est pas installé
    args: ['--start-maximized']
  });

  // viewport: null adapte la fenêtre à 100% de la résolution de l'écran
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();

  // 1. Charger la page en premier
  await page.goto(url);

  // 2. Activer l'inspecteur / enregistreur Playwright
  await page.pause();
})();