import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saq.com/');
  await page.getByRole('button', { name: 'Tout accepter: Accepter notre' }).click();
  await page.getByRole('menuitem', { name: 'Inspiration' }).click();
  await page.getByRole('link', { name: 'Lire l\'article' }).nth(3).click();
  await expect(page.getByRole('heading', { name: '6 vins pour célébrer la saison des vendanges' })).toBeVisible();
});