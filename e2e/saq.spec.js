import { test, expect } from '@playwright/test';
import { meta } from 'reporting-labs';

test('Affiche Inspiration apres acceptation des cookies', async ({ page }) => {
  meta({ priority: 'P2', feature: 'Navigation' });

  await test.step('Ouvrir le site SAQ', async () => {
    await page.goto('https://www.saq.com/');
  });
  await test.step('Accepter les cookies', async () => {
    await page.getByRole('button', { name: 'Tout accepter: Accepter notre' }).click();
  });
  await test.step('Acceder a Inspiration', async () => {
    await page.getByRole('menuitem', { name: 'Inspiration' }).click();
    await page.getByText('INSPIRATION', { exact: true }).click();
  });
});