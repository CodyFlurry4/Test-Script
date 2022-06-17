const { test, expect } = require("@playwright/test");
let projectCode = null;

//Create a project
test("Create Project", async ({ page }) => {
  await page.addListener("response", (res) => {
    if (res.url().includes("CreateProject")) {
      expect(res.url());
    }
  });
  // Go to https://crashquerytoolpreprod.lsu.edu/main/crash
  await page.goto("https://crashquerytoolpreprod.lsu.edu/main/crash");
  // Go to https://crashquerytoolpreprod.lsu.edu/
  await page.goto("https://crashquerytoolpreprod.lsu.edu/");
  // Go to https://crashquerytoolpreprod.lsu.edu/disclaimer?returnUrl=%2Fmain%2Fcrash
  await page.goto(
    "https://crashquerytoolpreprod.lsu.edu/disclaimer?returnUrl=%2Fmain%2Fcrash"
  );
  // Click text=Accepts
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
  // Click [aria-label="Select"] >> nth=3
  await page.locator('[aria-label="Select"]').nth(3).click();
  // Double click [aria-label="chevronright"] >> nth=2
  await page.locator('[aria-label="chevronright"]').nth(2).dblclick();
  // Click text=281234567891011121314151617181920212223242526272829303112345678910 >> [aria-label="Monday\, March 1\, 2021"]
  await page
    .locator(
      'text=281234567891011121314151617181920212223242526272829303112345678910 >> [aria-label="Monday\\, March 1\\, 2021"]'
    )
    .click();
  // Click text=Location
  await page.locator("text=Location").click();
  // Click [aria-label="Select"] >> nth=1
  await page.locator('[aria-label="Select"]').nth(1).click();
  // Click text=East Baton Rouge
  await page.locator("text=East Baton Rouge").click();
  // Click [aria-label="Select"] >> nth=2
  await page.locator('[aria-label="Select"]').nth(2).click();
  // Click text=CENTRAL
  await page.locator("text=CENTRAL").click();
  // Click text=Highway
  await page.locator("text=Highway").click();
  // Click [aria-label="Select"] >> nth=0
  await page.locator('[aria-label="Select"]').first().click();
  // Click text=STATE ROAD
  await page.locator("text=STATE ROAD").click();
  // Click [aria-label="Select"] >> nth=1
  await page.locator('[aria-label="Select"]').nth(1).click();
  // Click text=408
  await page.locator("text=408").click();
  // Click text=Load Crashes
  await page.locator("text=Load Crashes").click();
  // Click text=Close
  await page.locator("text=Close").click();
  // Click text=Project
  await page.locator("text=Project").click();
  // Click text=Create Project
  await page.locator("text=Create Project").click();
  // Click [placeholder="Project name"]
  await page.locator('[placeholder="Project name"]').click();
  // Fill [placeholder="Project name"]
  await page.locator('[placeholder="Project name"]').fill("Hooper Road");

  page.on("request", async (request) => {
    let res = await request.response();
    if (request.url().includes("InsertProjectData")) {
      expect(await res.json()).toBe(true);
    } else if (request.url().includes("SaveColumnName")) {
      expect(await res.json()).toBe(true);
    }
  });

  const [response] = await Promise.all([
    page.waitForResponse("CrashQueryToolService/api/Project/CreateProject"),
    // This action triggers the request
    page.locator("text=Create").nth(0).click(),
  ]);

  expect(await response.json()).toBeGreaterThan(0);
  projectCode = await response.json();
  await page.waitForTimeout(1000);
});

//Load Project
test("Load Project", async ({ page }) => {
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
  // Click text=Project
  await page.locator("text=Project").click();
  // Click text=My Projects
  await page.locator("text=My Projects").click();
  // Click text=Load >> nth=2

  page.on("response", async (res) => {
    if (res.url().includes("GetProjectData")) {
      expect(res.status()).toBe(200);
      expect(await res.json()).toBeDefined();
    } else if (res.url().includes("GetColumnNames")) {
      expect(res.status()).toBe(200);
      expect(await res.json()).toBeDefined();
    }
  });
  await page.locator("text=Load").nth(2).click();

  await page.waitForTimeout(2000);
});

//Delete Project

test("Delete Project", async ({ page }) => {
  await page.on("response", (res) => {
    if (res.url().includes("DeleteProject")) {
      expect(res.status()).toBe(200);
    }
  });

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
  // Click text=Project
  await page.locator("text=Project").click();
  // Click text=My Projects
  await page.locator("text=My Projects").click();
  // Click .dx-link.dx-link-delete >> nth=0
  await page.locator(".dx-link.dx-link-delete").first().click();
  // Click [aria-label="Yes"]
  await page.locator('[aria-label="Yes"]').click();
});
