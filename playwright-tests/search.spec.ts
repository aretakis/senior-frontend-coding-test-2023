import { test, expect } from "@playwright/test";

test("page is rendering the search result title after making a search", async ({ page }) => {
    await page.goto("http://localhost:5173/");
    await expect(page.getByTestId("searchResultTitle")).not.toBeVisible();
    await page.getByRole('textbox').fill('Batman');
    await expect(page.getByTestId("searchResultTitle")).toBeVisible();
});
