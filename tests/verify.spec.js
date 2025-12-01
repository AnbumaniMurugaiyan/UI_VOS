
import { test, expect } from '@playwright/test';

test.describe('VOS Frontend Verification', () => {
  test('Dashboard Page', async ({ page }) => {
    await page.goto('http://localhost:5173/dashboard');
    await expect(page).toHaveScreenshot('dashboard.png');
  });

  test('Tasks Page', async ({ page }) => {
    await page.goto('http://localhost:5173/tasks');
    await expect(page).toHaveScreenshot('tasks.png');
  });

  test('Onboarding Page', async ({ page }) => {
    await page.goto('http://localhost:5173/onboarding');
    await expect(page).toHaveScreenshot('onboarding.png');
  });
});
