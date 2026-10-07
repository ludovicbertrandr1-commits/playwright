import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saq.com/');
  await page.getByRole('button', { name: 'Tout accepter: Accepter notre' }).click();
  await page.getByRole('menuitem', { name: 'Inspiration' }).click();
  await page.getByText('INSPIRATION', { exact: true }).click();
});