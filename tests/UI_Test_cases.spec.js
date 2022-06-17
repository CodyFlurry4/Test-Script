const { test, expect, request } = require("@playwright/test");

test.use({
  storageState: "auth.json",
});
test("Test Case 1", async ({ page, request }) => {
  // Go to https://crashquerytoolpreprod.lsu.edu/
  await page.goto("https://crashquerytoolpreprod.lsu.edu/");
  // Go to https://crashquerytoolpreprod.lsu.edu/disclaimer
  await page.goto("https://crashquerytoolpreprod.lsu.edu/disclaimer");
  // Click text=Accept
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://crashquerytoolpreprod.lsu.edu/main/crash' }*/),
    page.locator("text=Accept").click(),
  ]);
  // Click text=Date Range
  await page.locator("text=Date Range").click();
  // Click [aria-label="Select"] >> nth=0
  await page.locator('[aria-label="Select"]').first().click();
  // Click text=2020 >> nth=1
  await page.locator("text=2020").nth(1).click();
  // Click [aria-label="Select"] >> nth=1
  await page.locator('[aria-label="Select"]').nth(1).click();
  // Click [aria-label="\32 021"] >> nth=1
  await page.locator('[aria-label="\\32 021"]').nth(1).click();
  // Click text=Location
  await page.locator("text=Location").click();
  // Click input[role="combobox"] >> nth=1
  await page.locator('input[role="combobox"]').nth(1).click();
  // Click text=Caddo
  await page.locator("text=Caddo").click();
  // Click input[role="combobox"] >> nth=2
  await page.locator('input[role="combobox"]').nth(2).click();
  // Click text=HOSSTON
  await page.locator("text=HOSSTON").click();
  // Click text=Highway
  await page.locator("text=Highway").click();
  // Click input[role="combobox"] >> nth=0
  await page.locator('input[role="combobox"]').first().click();
  // Click text=STATE ROAD
  await page.locator("text=STATE ROAD").click();
  // Click input[role="combobox"] >> nth=1
  await page.locator('input[role="combobox"]').nth(1).click();
  // Click text=175
  await page.locator("text=175").click();
  // Click text=Load Crashes
  await page.locator("text=Load Crashes").click();
  // Click text=Close
  await page.locator("text=Close").click();

  const [response] = await Promise.all([
    page.waitForResponse((res) => res.url().includes("ECrash/GetCrashData")),
  ]);

  expect(await response.json()).toContainEqual({
    agencyName: "Caddo PSO",
    agencyType: "Parish",
    city: "RURAL CADDO",
    cityID: 52,
    constructionMaintenanceZone: "NOT REPORTED",
    constructionMaintenanceZoneCode: "-1",
    controlSection: "035-06",
    crashDate: "11/2/2020 12:00:00 AM",
    crashKey: 2459921,
    crashNumber: "201102094447709",
    crashTime: "07:11:00",
    dayofWeek: "Monday",
    district: "04",
    functionClass: null,
    highwayClass: null,
    highwayType: "STATE ROAD",
    highwayTypeCode: "102",
    hitAndRun: "No",
    hour: 7,
    hourRange: "6 A.M. - 12 P.M.",
    intersectingRoadName: "ELLERBE",
    intersection: "Yes",
    latitude: 32.301377,
    lighting: "DAWN/DUSK",
    lightingCode: "200",
    logmile: 1.003,
    longitude: -93.628094,
    mannerCollision: "ANGLE - PERPENDICULAR/OTHER ANGLE",
    mannerCollisionCode: "105",
    milepost: 0,
    milePoint: 60.655,
    month: 11,
    monthName: "November",
    parish: "Caddo",
    parishCode: "09",
    primaryContributingFactor: "VIOLATIONS",
    primaryContributingFactorCode: "100",
    primaryDirection: "N",
    primaryDistance: 25.1,
    primaryHighwayNumber: 175,
    primaryRoadName: "GAYLE RED BLUFF",
    publicPropertyDamage: "",
    roadwayCondition: "NONE",
    roadwayConditionCode: "000",
    roadwayRelation: "ON ROADWAY",
    roadwayRelationCode: "104",
    secondaryContributingFactor: "NOT REPORTED",
    secondaryContributingFactorCode: "-1",
    severity: "(C) POSSIBLE INJURY",
    severityCode: "103",
    surfaceCondition: "DRY",
    surfaceConditionCode: "000",
    troop: "G",
    weather: "CLEAR",
    weatherCode: "000",
    year: "2020",
    bicycle: false,
    cmv: false,
    distracted: false,
    inattentive: false,
    infrastructure: true,
    laneDeparture: false,
    motorcycle: false,
    noRestraint: false,
    olderDriver: true,
    pedestrian: false,
    predictedAlcohol: false,
    railRoadTrainInvolved: false,
    roadwayDeparture: false,
    workZone: false,
    youngDriver: false,
    crashPoint: "POINT (-93.628094 32.301377)",
  });
});

test("Test Case 2", async ({ page }) => {
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
  // Click text=2020 >> nth=1
  await page.locator("text=2020").nth(1).click();
  // Click input[role="combobox"] >> nth=1
  await page.locator('input[role="combobox"]').nth(1).click();
  // Fill input[role="combobox"] >> nth=1
  await page.locator('input[role="combobox"]').nth(1).fill("2021");
  // Click text=Location
  await page.locator("text=Location").click();
  // Click [aria-label="Select"] >> nth=1
  await page.locator('[aria-label="Select"]').nth(1).click();
  // Click text=East Baton Rouge
  await page.locator("text=East Baton Rouge").click();
  // Click text=Highway
  await page.locator("text=Highway").click();
  // Click input[role="combobox"] >> nth=0
  await page.locator('input[role="combobox"]').first().click();
  // Click text=INTERSTATE
  await page.locator("text=INTERSTATE").click();
  // Click input[role="combobox"] >> nth=1
  await page.locator('input[role="combobox"]').nth(1).click();
  // Click text=110
  await page.locator("text=110").click();
  // Click text=Control Section
  await page.locator("text=Control Section").click();
  // Click input[role="combobox"]
  await page.locator('input[role="combobox"]').click();
  // Click text=450-92
  await page.locator("text=450-92").click();
  // Click text=Load Crashes
  await page.locator("text=Load Crashes").click();

  const [response] = await Promise.all([
    page.waitForResponse((res) => res.url().includes("ECrash/GetCrashData")),
  ]);

  expect(await response.json()).toContainEqual({
    agencyName: "Baton Rouge PD",
    agencyType: "City",
    city: "BATON ROUGE",
    cityID: 102,
    constructionMaintenanceZone: "NOT REPORTED",
    constructionMaintenanceZoneCode: "-1",
    controlSection: "450-92",
    crashDate: "2/24/2020 12:00:00 AM",
    crashKey: 2509316,
    crashNumber: "202002241701002295",
    crashTime: "15:48:00",
    dayofWeek: "Monday",
    district: "61",
    functionClass: null,
    highwayClass: null,
    highwayType: "INTERSTATE",
    highwayTypeCode: "100",
    hitAndRun: "No",
    hour: 15,
    hourRange: "12 P.M. - 6 P.M.",
    intersectingRoadName: "I-110",
    intersection: "No",
    latitude: 30.457728,
    lighting: "DAYLIGHT",
    lightingCode: "100",
    logmile: 2.021,
    longitude: -91.170824,
    mannerCollision: "NOT A COLLISION BETWEEN TWO MOTOR VEHICLES",
    mannerCollisionCode: "000",
    milepost: 1.8,
    milePoint: 2.021,
    month: 2,
    monthName: "February",
    parish: "East Baton Rouge",
    parishCode: "17",
    primaryContributingFactor: "MOVEMENT PRIOR TO CRASH",
    primaryContributingFactorCode: "101",
    primaryDirection: "N",
    primaryDistance: 399.5,
    primaryHighwayNumber: 110,
    primaryRoadName: "I-110",
    publicPropertyDamage: "",
    roadwayCondition: "NONE",
    roadwayConditionCode: "000",
    roadwayRelation: "ON ROADWAY",
    roadwayRelationCode: "104",
    secondaryContributingFactor: "NOT REPORTED",
    secondaryContributingFactorCode: "-1",
    severity: "(O) PROPERTY DAMAGE-ONLY",
    severityCode: "104",
    surfaceCondition: "WET",
    surfaceConditionCode: "107",
    troop: "A",
    weather: "RAIN",
    weatherCode: "105",
    year: "2020",
    bicycle: false,
    cmv: false,
    distracted: false,
    inattentive: true,
    infrastructure: true,
    laneDeparture: true,
    motorcycle: false,
    noRestraint: false,
    olderDriver: false,
    pedestrian: false,
    predictedAlcohol: false,
    railRoadTrainInvolved: false,
    roadwayDeparture: true,
    workZone: false,
    youngDriver: true,
    crashPoint: "POINT (-91.170824 30.457728)",
  });
});

test("Test Case 3", async ({ page }) => {
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
  // Click text=2019202020212022 >> [aria-label="\32 020"]
  await page
    .locator('text=2019202020212022 >> [aria-label="\\32 020"]')
    .click();
  // Click [aria-label="Select"] >> nth=1
  await page.locator('[aria-label="Select"]').nth(1).click();
  // Click [aria-label="\32 020"] >> nth=2
  await page.locator('[aria-label="\\32 020"]').nth(2).click();
  // Click text=By Date
  await page.locator("text=By Date").click();
  // Click [aria-label="Select"] >> nth=3
  await page.locator('[aria-label="Select"]').nth(3).click();
  // Click [aria-label="Wednesday\, January 15\, 2020"] >> text=15
  await page
    .locator('[aria-label="Wednesday\\, January 15\\, 2020"] >> text=15')
    .click();
  // Click text=Location
  await page.locator("text=Location").click();
  // Click [aria-label="Select"] >> nth=1
  await page.locator('[aria-label="Select"]').nth(1).click();
  // Click text=Ascension
  await page.locator("text=Ascension").click();
  // Click text=Highway
  await page.locator("text=Highway").click();
  // Click [aria-label="Select"] >> nth=0
  await page.locator('[aria-label="Select"]').first().click();
  // Click text=US HIGHWAY
  await page.locator("text=US HIGHWAY").click();
  // Click input[role="combobox"] >> nth=1
  await page.locator('input[role="combobox"]').nth(1).click();
  // Click [aria-label="Select"] >> nth=1
  await page.locator('[aria-label="Select"]').nth(1).click();
  // Click text=Highway Number:Pull down to refresh...Release to refresh...Refreshing...61Loadin >> input[role="combobox"]
  await page
    .locator(
      'text=Highway Number:Pull down to refresh...Release to refresh...Refreshing...61Loadin >> input[role="combobox"]'
    )
    .click();
  // Click text=61
  await page.locator("text=61").click();
  // Click text=Load Crashes
  await page.locator("text=Load Crashes").click();

  const [response] = await Promise.all([
    page.waitForResponse((res) => res.url().includes("ECrash/GetCrashData")),
  ]);

  expect(await response.json()).toContainEqual({
    agencyName: "LSP",
    agencyType: "State",
    city: "RURAL ASCENSION",
    cityID: 16,
    constructionMaintenanceZone: "NOT REPORTED",
    constructionMaintenanceZoneCode: "-1",
    controlSection: "007-07",
    crashDate: "1/15/2020 12:00:00 AM",
    crashKey: 2479821,
    crashNumber: "20200005452",
    crashTime: "13:20:00",
    dayofWeek: "Wednesday",
    district: "61",
    functionClass: null,
    highwayClass: null,
    highwayType: "US HIGHWAY",
    highwayTypeCode: "101",
    hitAndRun: "No",
    hour: 13,
    hourRange: "12 P.M. - 6 P.M.",
    intersectingRoadName: "COMMERCE",
    intersection: "No",
    latitude: 30.330922,
    lighting: "DAYLIGHT",
    lightingCode: "100",
    logmile: 12.579,
    longitude: -90.984264,
    mannerCollision: "SIDESWIPE - WITH FLOW",
    mannerCollisionCode: "505",
    milepost: 0,
    milePoint: 63.929,
    month: 1,
    monthName: "January",
    parish: "Ascension",
    parishCode: "03",
    primaryContributingFactor: "VIOLATIONS",
    primaryContributingFactorCode: "100",
    primaryDirection: "N",
    primaryDistance: 24.8011,
    primaryHighwayNumber: 61,
    primaryRoadName: "AIRLINE",
    publicPropertyDamage: "",
    roadwayCondition: "NONE",
    roadwayConditionCode: "000",
    roadwayRelation: "ON ROADWAY",
    roadwayRelationCode: "104",
    secondaryContributingFactor: "MOVEMENT PRIOR TO CRASH",
    secondaryContributingFactorCode: "101",
    severity: "(O) PROPERTY DAMAGE-ONLY",
    severityCode: "104",
    surfaceCondition: "DRY",
    surfaceConditionCode: "000",
    troop: "A",
    weather: "CLEAR",
    weatherCode: "000",
    year: "2020",
    bicycle: false,
    cmv: false,
    distracted: false,
    inattentive: false,
    infrastructure: true,
    laneDeparture: true,
    motorcycle: false,
    noRestraint: false,
    olderDriver: true,
    pedestrian: false,
    predictedAlcohol: false,
    railRoadTrainInvolved: false,
    roadwayDeparture: false,
    workZone: false,
    youngDriver: false,
    crashPoint: "POINT (-90.984264 30.330922)",
  });
});

test("Test Case 4", async ({ page }) => {
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
  // Click text=2019202020212022 >> [aria-label="\32 020"]
  await page
    .locator('text=2019202020212022 >> [aria-label="\\32 020"]')
    .click();
  // Click [aria-label="Select"] >> nth=1
  await page.locator('[aria-label="Select"]').nth(1).click();
  // Click [aria-label="\32 020"] >> nth=2
  await page.locator('[aria-label="\\32 020"]').nth(2).click();
  // Click text=By Date
  await page.locator("text=By Date").click();
  // Click [aria-label="Select"] >> nth=2
  await page.locator('[aria-label="Select"]').nth(2).click();
  // Click [aria-label="chevronright"] >> nth=2
  await page.locator('[aria-label="chevronright"]').nth(2).click();
  // Click [aria-label="Thursday\, February 13\, 2020"] >> text=13
  await page
    .locator('[aria-label="Thursday\\, February 13\\, 2020"] >> text=13')
    .click();
  // Click [aria-label="Select"] >> nth=3
  await page.locator('[aria-label="Select"]').nth(3).click();
  // Click [aria-label="chevronright"] >> nth=3
  await page.locator('[aria-label="chevronright"]').nth(3).click();
  // Click .dx-calendar-cell.dx-state-hover > span
  await page
    .locator('[aria-label="Friday\\, February 14\\, 2020"] >> text=14')
    .nth(1)
    .click();
  // Click text=Close
  await page.locator("text=Close").click();
  // Click text=Location
  await page.locator("text=Location").click();
  // Click [aria-label="Select"] >> nth=1
  await page.locator('[aria-label="Select"]').nth(1).click();
  // Click text=East Baton Rouge
  await page.locator("text=East Baton Rouge").click();
  // Click [aria-label="Select"] >> nth=2
  await page.locator('[aria-label="Select"]').nth(2).click();
  // Click text=BATON ROUGE >> nth=3
  await page.locator("text=BATON ROUGE").nth(3).click();
  // Click text=Highway
  await page.locator("text=Highway").click();
  // Click [aria-label="Select"] >> nth=0
  await page.locator('[aria-label="Select"]').first().click();
  // Click text=INTERSTATE
  await page.locator("text=INTERSTATE").click();
  // Click [aria-label="Select"] >> nth=1
  await page.locator('[aria-label="Select"]').nth(1).click();
  // Click text=12
  await page.locator("text=12").click();
  // Click text=Load Crashes
  await page.locator("text=Load Crashes").click();
  // Click text=Close
  await page.locator("text=Close").click();

  const [response] = await Promise.all([
    page.waitForResponse((res) => res.url().includes("ECrash/GetCrashData")),
  ]);

  expect(await response.json()).toContainEqual({
    agencyName: "Baton Rouge PD",
    agencyType: "City",
    city: "BATON ROUGE",
    cityID: 102,
    constructionMaintenanceZone: "NOT REPORTED",
    constructionMaintenanceZoneCode: "-1",
    controlSection: "454-01",
    crashDate: "2/13/2020 12:00:00 AM",
    crashKey: 2508728,
    crashNumber: "202002131701001810",
    crashTime: "18:18:00",
    dayofWeek: "Thursday",
    district: "61",
    functionClass: null,
    highwayClass: null,
    highwayType: "INTERSTATE",
    highwayTypeCode: "100",
    hitAndRun: "No",
    hour: 18,
    hourRange: "6 P.M. - 12 A.M.",
    intersectingRoadName: "I-12",
    intersection: "No",
    latitude: 30.441473,
    lighting: "DAYLIGHT",
    lightingCode: "100",
    logmile: 7.103,
    longitude: -91.008234,
    mannerCollision: "FRONT TO REAR - REAR END",
    mannerCollisionCode: "300",
    milepost: 7,
    milePoint: 7.103,
    month: 2,
    monthName: "February",
    parish: "East Baton Rouge",
    parishCode: "17",
    primaryContributingFactor: "VIOLATIONS",
    primaryContributingFactorCode: "100",
    primaryDirection: "N",
    primaryDistance: 119.3,
    primaryHighwayNumber: 12,
    primaryRoadName: "I-12",
    publicPropertyDamage: "",
    roadwayCondition: "NONE",
    roadwayConditionCode: "000",
    roadwayRelation: "ON ROADWAY",
    roadwayRelationCode: "104",
    secondaryContributingFactor: "NOT REPORTED",
    secondaryContributingFactorCode: "-1",
    severity: "(O) PROPERTY DAMAGE-ONLY",
    severityCode: "104",
    surfaceCondition: "DRY",
    surfaceConditionCode: "000",
    troop: "A",
    weather: "CLOUDY",
    weatherCode: "102",
    year: "2020",
    bicycle: false,
    cmv: false,
    distracted: false,
    inattentive: true,
    infrastructure: false,
    laneDeparture: false,
    motorcycle: false,
    noRestraint: false,
    olderDriver: false,
    pedestrian: false,
    predictedAlcohol: false,
    railRoadTrainInvolved: false,
    roadwayDeparture: false,
    workZone: true,
    youngDriver: false,
    crashPoint: "POINT (-91.008234 30.441473)",
  });
});
