/* GENERATED_BY: Antigravity QAAgent */
import { test, expect } from '@playwright/test';

test('Practice Flow', async ({ page }) => {
    await page.goto('/practice');
    await expect(page.locator('text=Camera Preview')).toBeVisible();

    // Start session
    await page.click('text=Mic Off');
    await expect(page.locator('text=Mic On')).toBeVisible();

    // Verify captions appear (stub)
    await expect(page.locator('[role="log"]')).toBeVisible();
});
