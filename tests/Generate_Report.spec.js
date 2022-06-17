const { test, expect, request } = require("@playwright/test");

test.use({
  baseURL: "",
});
//Generate a report
test("Generate and Open a Report", async ({ page }) => {
  // Go to https://crashquerytoolpreprod.lsu.edu/main/crash
  await page.goto("https://crashquerytoolpreprod.lsu.edu/main/crash");
  // Go to https://crashquerytoolpreprod.lsu.edu/
  await page.goto("https://crashquerytoolpreprod.lsu.edu/");
  // Go to https://crashquerytoolpreprod.lsu.edu/disclaimer?returnUrl=%2Fmain%2Fcrash
  await page.goto(
    "https://crashquerytoolpreprod.lsu.edu/disclaimer?returnUrl=%2Fmain%2Fcrash"
  );
  // Click text=Accept
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://crashquerytoolpreprod.lsu.edu/main/crash' }*/),
    page.locator("text=Accept").click(),
  ]);
  // Click text=Date Range
  await page.locator("text=Date Range").click();
  // Click [aria-label="Select"] >> nth=0
  await page.locator('[aria-label="Select"]').first().click();
  // Click [aria-label="\32 021"]
  await page.locator('[aria-label="\\32 021"]').click();
  // Click [aria-label="Select"] >> nth=1
  await page.locator('[aria-label="Select"]').nth(1).click();
  // Click text=2021 >> nth=1
  await page.locator("text=2021").nth(1).click();
  // Click text=By Date
  await page.locator("text=By Date").click();
  // Click [aria-label="Select"] >> nth=2
  await page.locator('[aria-label="Select"]').nth(2).click();
  // Click .dx-calendar-cell.dx-state-hover > span
  await page
    .locator('[aria-label="Wednesday\\, January 6\\, 2021"]')
    .nth(0)
    .click();
  // Click [aria-label="Select"] >> nth=3
  await page.locator('[aria-label="Select"]').nth(3).click();
  // Click [aria-label="Friday\, January 8\, 2021"] >> nth=2
  await page
    .locator('[aria-label="Friday\\, January 8\\, 2021"]')
    .nth(2)
    .click();
  // Click text=Location
  await page.locator("text=Location").click();
  // Click input[role="combobox"] >> nth=1
  await page.locator('input[role="combobox"]').nth(1).click();
  // Click text=East Baton Rouge
  await page.locator("text=East Baton Rouge").click();
  // Click text=Highway
  await page.locator("text=Highway").click();
  // Click input[role="combobox"] >> nth=0
  await page.locator('input[role="combobox"]').first().click();
  // Click text=STATE ROAD
  await page.locator("text=STATE ROAD").click();
  // Click input[role="combobox"] >> nth=1
  await page.locator('input[role="combobox"]').nth(1).click();
  // Click text=64 >> nth=0
  await page.locator("text=64").first().click();
  // Click text=Load Crashes
  await page.locator("text=Load Crashes").click();
  // Click text=210107083639255
  await page.locator("text=210107083639255").click();
  // Click text=Crash Report
  await page.locator("text=Crash Report").click();
  // Click text=Generate Crash Report
  const [response] = await Promise.all([
    page.waitForResponse(
      "https://cartspdfapipreprod.lsu.edu/Report?crashNumber=210107083639255&crashYear=2021"
    ),
    page.locator("text=Generate Crash Report").click(),
  ]);
  expect(response.status()).toBe(200);

  await page.locator("text=Generate Crash Report").click();
  // Click text=Crash Report
  await page.waitForTimeout(1000);
  await page.locator("text=Crash Report").nth(0).click();
  // Click text=Show Crash Report
  await page.locator("text=Show Crash Report").click();
});

test("Show Narrative", async ({ page }) => {
  // Go to https://crashquerytoolpreprod.lsu.edu/main/crash
  await page.goto("https://crashquerytoolpreprod.lsu.edu/main/crash");
  // Go to https://crashquerytoolpreprod.lsu.edu/
  await page.goto("https://crashquerytoolpreprod.lsu.edu/");
  // Go to https://crashquerytoolpreprod.lsu.edu/disclaimer?returnUrl=%2Fmain%2Fcrash
  await page.goto(
    "https://crashquerytoolpreprod.lsu.edu/disclaimer?returnUrl=%2Fmain%2Fcrash"
  );
  // Click text=Accept
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://crashquerytoolpreprod.lsu.edu/main/crash' }*/),
    page.locator("text=Accept").click(),
  ]);
  // Click text=Date Range
  await page.locator("text=Date Range").click();
  // Click [aria-label="Select"] >> nth=0
  await page.locator('[aria-label="Select"]').first().click();
  // Click [aria-label="\32 021"]
  await page.locator('[aria-label="\\32 021"]').click();
  // Click [aria-label="Select"] >> nth=1
  await page.locator('[aria-label="Select"]').nth(1).click();
  // Click [aria-label="\32 021"] >> nth=1
  await page.locator('[aria-label="\\32 021"]').nth(1).click();
  // Click text=By Date
  await page.locator("text=By Date").click();
  // Click [aria-label="Select"] >> nth=2
  await page.locator('[aria-label="Select"]').nth(2).click();
  // Click .dx-calendar-cell.dx-state-hover > span
  await page
    .locator('[aria-label="Wednesday\\, January 6\\, 2021"]')
    .nth(0)
    .click();
  // Click [aria-label="Select"] >> nth=3
  await page.locator('[aria-label="Select"]').nth(3).click();
  // Click [aria-label="Friday\, January 8\, 2021"] >> nth=2
  await page
    .locator('[aria-label="Friday\\, January 8\\, 2021"]')
    .nth(2)
    .click();
  // Click text=Location
  await page.locator("text=Location").click();
  // Click input[role="combobox"] >> nth=1
  await page.locator('input[role="combobox"]').nth(1).click();
  // Click text=East Baton Rouge
  await page.locator("text=East Baton Rouge").click();
  // Click text=Highway
  await page.locator("text=Highway").click();
  // Click input[role="combobox"] >> nth=0
  await page.locator('input[role="combobox"]').first().click();
  // Click text=STATE ROAD
  await page.locator("text=STATE ROAD").click();
  // Click input[role="combobox"] >> nth=1
  await page.locator('input[role="combobox"]').nth(1).click();
  // Click text=64 >> nth=0
  await page.locator("text=64").first().click();
  // Click text=Load Crashes
  await page.locator("text=Load Crashes").click();
  // Click text=210107083639255
  await page.locator("text=210107083639255").click();
  // Click text=Show Narrative/Diagram
  const [response] = await Promise.all([
    page.waitForResponse((res) => res.url().includes("GetNarrative")),
    page.locator("text=Show Narrative/Diagram").click(),
  ]);
  expect(response.status()).toBe(200);
});
