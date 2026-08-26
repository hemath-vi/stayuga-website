import { test, expect } from "@playwright/test";

/** Every item currently in NAV_ITEMS (src/lib/nav.ts). */
const NAV = [
  { name: "Stays", url: "/properties" },
  { name: "Services", url: "/services" },
  { name: "Events", url: "/events" },
  { name: "About", url: "/about" },
];

test.describe("Desktop header navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");
  });

  for (const item of NAV) {
    test(`${item.name} nav link navigates to ${item.url}`, async ({ page }) => {
      await page
        .getByRole("navigation", { name: "Primary" })
        .getByRole("link", { name: new RegExp(`^${item.name}$`, "i") })
        .click();
      await expect(page).toHaveURL(item.url);
    });
  }

  test("active page link is marked with aria-current", async ({ page }) => {
    await page.goto("/services");
    const active = page
      .getByRole("navigation", { name: "Primary" })
      .getByRole("link", { name: /^services$/i });
    await expect(active).toHaveAttribute("aria-current", "page");
  });

  test("a nested property route keeps Stays active", async ({ page }) => {
    await page.goto("/properties/the-olive-retreat");
    await expect(
      page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: /^stays$/i })
    ).toHaveAttribute("aria-current", "page");
  });

  test("Reserve CTA goes to properties", async ({ page }) => {
    await page.getByRole("link", { name: /^reserve$/i }).first().click();
    await expect(page).toHaveURL("/properties");
  });
});

test.describe("Mobile drawer navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
  });

  test("drawer is closed until the hamburger is tapped", async ({ page }) => {
    await expect(page.getByRole("dialog", { name: /site menu/i })).toBeHidden();
    await page.getByRole("button", { name: /open menu/i }).click();
    await expect(page.getByRole("dialog", { name: /site menu/i })).toBeVisible();
  });

  test("tapping a drawer link navigates and closes the drawer", async ({ page }) => {
    await page.getByRole("button", { name: /open menu/i }).click();
    await page
      .getByRole("dialog", { name: /site menu/i })
      .getByRole("link", { name: /^events$/i })
      .click();
    await expect(page).toHaveURL("/events");
    await expect(page.getByRole("dialog", { name: /site menu/i })).toBeHidden();
  });

  test("Escape closes the drawer", async ({ page }) => {
    await page.getByRole("button", { name: /open menu/i }).click();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog", { name: /site menu/i })).toBeHidden();
  });
});

test.describe("Removed routes", () => {
  for (const url of ["/experiences", "/contact"]) {
    test(`${url} returns 404`, async ({ page }) => {
      const res = await page.goto(url);
      expect(res?.status()).toBe(404);
    });
  }

  test("no nav link points at a removed route", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('a[href="/experiences"]')).toHaveCount(0);
    await expect(page.locator('a[href="/contact"]')).toHaveCount(0);
  });
});