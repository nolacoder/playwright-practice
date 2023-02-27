// This suite hits https://www.azurestaticwebapps.dev/

// @ts-check
const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.azurestaticwebapps.dev/");
});

test("basic test", async ({ page }) => {
  const title = page.locator(".navbar__inner .navbar__title");
  await expect(title).toHaveText("Static Web Apps!");
});

test.describe("navbar tests", () => {
  test('the "#ThisMonthInSWA" navbar link goes to the "thismonth" page', async ({
    page,
  }) => {
    await page.getByText("#ThisMonthInSWA").click();
    await expect(page).toHaveURL(/.*thismonth/);
  });

  test('the "#30DaysOfSWA" navbar link goes to the "blog" page', async ({
    page,
  }) => {
    await page.getByText("#30DaysOfSWA").click();
    await expect(page).toHaveURL(/.*blog/);
  });

  test('the "Roundup" navbar link goes to the "roundup" page', async ({
    page,
  }) => {
    await page.getByText("Roundup").click();
    await expect(page).toHaveURL(/.*roundup/);
  });

  test('the "Roadmap" navbar link goes to the "roadmap" page', async ({
    page,
  }) => {
    await page.getByText("Roadmap").click();
    await expect(page).toHaveURL(/.*roadmap/);
  });

  test('the "Docs" navbar link is present', async ({ page }) => {
    await expect(page.getByText("Docs")).toBeVisible();
  });

  test('the "Deploy" navbar link is present', async ({ page }) => {
    await expect(page.getByText("Deploy")).toBeVisible();
  });

  test("the Github navbar link is present", async ({ page }) => {
    await expect(
      page.getByRole("link", { name: "GitHub repository" })
    ).toBeVisible();
  });

  test("use navbar dark mode toggle to go to and from dark mode", async ({
    page,
  }) => {
    const toggleBtn = page.getByRole("button", { name: /.*dark and light/ });
    const lightIcon = page.locator(".lightToggleIcon_v35p");
    const darkIcon = page.locator(".darkToggleIcon_nQuB");

    await expect(toggleBtn).toHaveAttribute("title", /.*currently light mode/); // full title text is: Switch between dark and light mode (currently light mode)"
    await expect(lightIcon).toBeVisible();

    await toggleBtn.click();
    await expect(toggleBtn).toHaveAttribute("title", /.*currently dark mode/); // full title text is: Switch between dark and light mode (currently dark mode)"
    await expect(darkIcon).toBeVisible();

    await toggleBtn.click();
    await expect(toggleBtn).toHaveAttribute("title", /.*currently light mode/); // full title text is: Switch between dark and light mode (currently light mode)"
    await expect(lightIcon).toBeVisible();
  });
});
