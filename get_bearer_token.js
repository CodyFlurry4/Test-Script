const { chromium } = require("playwright");
let y = null;

const getToken = async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ storageState: "auth.json" });
  const page = await context.newPage();
  page.on("request", async (response) => {
    if (response.url().includes("GetDistricts")) {
      headers = await response.allHeaders();
      auth = headers["authorization"];
      console.log(auth);
      return auth;
    }
  });
  await page.goto("https://crashquerytoolpreprod.lsu.edu/main/crash");
  page.locator("text=Accept").click();
  await page.waitForTimeout(1000);
  await browser.close();
};

console.log(getToken());
