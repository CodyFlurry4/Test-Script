// playwright.config.js
// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  reporter: [["list"], ["json", { outputFile: "test-results.json" }]],
  timeout: 150000,
  use: {
    // All requests we se
    storageState: "auth.json",
    baseURL: "https://crashquerytoolpreprod.lsu.edu",
    extraHTTPHeaders: {
      // Assuming personal access token available in the environment.
      // 'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc5NEY1QTYwOTM2REY2QkEwNEI0REQ2OEQzRUQ3NEQzIiwidHlwIjoiSldUIn0.eyJpc3MiOiJodHRwczovL2NhcnRzYXV0aGVudGljYXRpb25wcmVwcm9kLmxzdS5lZHUiLCJuYmYiOjE2NTUxMjQ3MjcsImlhdCI6MTY1NTEyNDcyNywiZXhwIjoxNjU1MTYwNzI3LCJhdWQiOiJDcmFzaFF1ZXJ5VG9vbCIsImFtciI6WyJtZmEiXSwibm9uY2UiOiI1NzViNTU5YjZjOWI0YzhhYmFmYmE1N2UyMjAzZjc5YiIsImF0X2hhc2giOiI2ejdLdGFDbEItLVRlZ1pDTVN6cUhnIiwic2lkIjoiMDkzNDk2MDUyMUFCMzZDREJDRDFFOEMxQ0E2OTI1QjYiLCJzdWIiOiJiZDllNDRkZC1kNDMwLTQ2OWQtODUwNC1hODAzNmY1OTcxMGEiLCJhdXRoX3RpbWUiOjE2NTUxMjQ3MjcsImlkcCI6IkNBUlRTIiwiZW1haWwiOiJjZmx1cnIxQGxzdS5lZHUiLCJnaXZlbl9uYW1lIjoiQ29keSIsImZhbWlseV9uYW1lIjoiRmx1cnJ5IiwibmFtZSI6IkNvZHkgRmx1cnJ5Iiwicm9sZSI6WyJSZWRhY3RlZFBERlZpZXdlciIsIkNyYXNoUXVlcnlUb29sUHJlUHJvZFVzZXJzIl0sInBlcm1pc3Npb24iOiJDUVRQcmVQcm9kLlZpZXciLCJ1c2VybmFtZSI6IkNmbHVycjEiLCJvcmdhbml6YXRpb24iOiJDQVJUUyJ9.HzdgPQU-ObJNofdJAEB2RkuuOgGrgOl_CBx133tbFGnzAEieCcH1RLvtIDRzmdbgEQfAM2RMxXJcgoCF4WIW4MJ-XW3Fm8NkFsIfD6cRa7KfzOE0k3kl1hFy9mztltjVd_ETjOBQkWskzQqR5tMbRpSqO5EpESj83VE16G6mXD1dfNih365ZCuxCIrGrmZbs6GCAJCzaJ7cmEHUXF9tG4ZbQz5yRelsero8s_IfwQoWGaEKwoGEA2F5L3hmFuKY8RSBzab5azP11M7LuwwySu8SIXboZ2LKLxkW38MNYJ6JSqCGMDGyJuixP--Sy2eRgX1Eods3bXO5Ms4uHaxo3GQ`,
    },
  },
};
module.exports = config;
