import { test, expect } from "@playwright/test";

test("document has title", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page).toHaveTitle(
    "Senior front-end developer coding test - Econans"
  );
});

test("page has one h1", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page.locator("h1")).toHaveCount(1);
});
