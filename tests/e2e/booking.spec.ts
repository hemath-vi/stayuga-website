import { test, expect } from "@playwright/test";

test.describe("Booking inquiry form", () => {
  test("Send enquiry button is visible on a property page", async ({ page }) => {
    // Navigate to properties list and open the first property
    await page.goto("/properties");
    const firstCard = page.locator("a[href^='/properties/']").first();
    await firstCard.click();
    await page.waitForLoadState("networkidle");

    // Check enquiry form is present
    await expect(page.getByRole("button", { name: /send enquiry/i })).toBeVisible();
  });

  test("Send enquiry is disabled when required fields are empty", async ({ page }) => {
    await page.goto("/properties");
    const firstCard = page.locator("a[href^='/properties/']").first();
    await firstCard.click();
    await page.waitForLoadState("networkidle");

    await expect(page.getByRole("button", { name: /send enquiry/i })).toBeDisabled();
  });

  test("WhatsApp enquiry button is visible", async ({ page }) => {
    await page.goto("/properties");
    const firstCard = page.locator("a[href^='/properties/']").first();
    await firstCard.click();
    await page.waitForLoadState("networkidle");

    await expect(page.getByRole("link", { name: /whatsapp/i })).toBeVisible();
  });
});

test.describe("Homepage CTAs", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Browse properties button links to /properties", async ({ page }) => {
    await expect(page.getByRole("link", { name: /browse properties/i })).toHaveAttribute("href", "/properties");
  });

  test("View all properties link navigates correctly", async ({ page }) => {
    await page.getByRole("link", { name: /view all properties/i }).click();
    await expect(page).toHaveURL("/properties");
  });

});