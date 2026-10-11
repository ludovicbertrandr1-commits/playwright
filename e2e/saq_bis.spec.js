import { test, expect } from '@playwright/test';
import { meta } from 'reporting-labs';

test('Affiche Inspiration apres acceptation des cookies', async ({ page }, testInfo) => {
  meta({ priority: 'P2', feature: 'Navigation' });

  await test.step('Ouvrir le site SAQ', async () => {
    await page.goto('https://www.saq.com/');
  });
  await test.step('Accepter les cookies', async () => {
    await page.getByRole('button', { name: 'Tout accepter: Accepter notre' }).click();
  });

  await test.step('Naviguer vers Inspiration', async () => {
  if (testInfo.project.use.isMobile) {
    await page.getByRole('button', { name: 'Menu', exact: true }).click();
    await page.getByRole('menuitem', { name: 'Inspiration' }).click();
    await page.getByRole('button', { name: 'Tendances de saison' }).click();
    await page.getByRole('menuitem', { name: 'Voir tous les contenus' }).click();
  }

  else {
    await page.getByRole('menuitem', { name: 'Inspiration' }).click();
  }
  });

  await test.step('Acceder a Inspiration', async () => {
    await expect(page.getByText('INSPIRATION', { exact: true })).toBeVisible();
  });
});