// @ts-check
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://www.azurestaticwebapps.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Static Web Apps!');
});

test.describe('navbar tests', () => {
  test('the "#ThisMonthInSWA" navbar link goes to the "thismonth" page', async ({ page }) => {
    await page.goto('https://www.azurestaticwebapps.dev/');
    await page.locator('.navbar__link', { hasText: '#ThisMonthInSWA' }).click();
    await expect(page).toHaveURL(/.*thismonth/);
  });

  test('the "#30DaysOfSWA" navbar link goes to the "blog" page', async ({ page }) => {
    await page.goto('https://www.azurestaticwebapps.dev/');
    await page.locator('.navbar__link', { hasText: "#30DaysOfSWA"}).click();
    await expect(page).toHaveURL(/.*blog/);
  });

  test('the "Roundup" navbar link goes to the "roundup" page', async ({ page }) => {
    await page.goto('https://www.azurestaticwebapps.dev/');
    await page.locator('.navbar__link', { hasText: "Roundup"}).click();
    await expect(page).toHaveURL(/.*roundup/);
  })

  test('the "Roadmap" navbar link goes to the "roadmap" page', async ({ page }) => {
    await page.goto('https://www.azurestaticwebapps.dev/');
    await page.locator('.navbar__link', { hasText: "Roadmap"}).click();
    await expect(page).toHaveURL(/.*roadmap/);
  })

  test('the "Docs" navbar link is present', async ({ page }) => {
    await page.goto('https://www.azurestaticwebapps.dev/');
    await expect(await page.locator('.navbar__link', { hasText: "Docs"})).toBeVisible();
  })

  test('the "Deploy" navbar link is present', async ({ page }) => {
    await page.goto('https://www.azurestaticwebapps.dev/');
    await expect(await page.locator('.navbar__link', { hasText: "Deploy"})).toBeVisible();
  })

//   test('the Github navbar link is present', async ({ page }) => {
//     await page.goto('https://www.azurestaticwebapps.dev/');
//     await expect(await page.getByRole('GitHub repository').click());
//   })

})
