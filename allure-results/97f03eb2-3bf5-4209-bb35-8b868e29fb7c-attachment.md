# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\userlogin.spec.js >> Login Test >> Login to Application
- Location: tests\smoke\userlogin.spec.js:11:5

# Error details

```
ReferenceError: dashboradPage is not defined
```

# Test source

```ts
  1  | import {test as base} from "@playwright/test"
  2  | import { LoginPage } from "../pages/LoginPage.js"
  3  | import { DashboardPage } from "../pages/DashboadPage.js"
  4  | 
  5  | export const test=base.extend({
  6  | 
  7  |     loginPage: async ({page},use)=>
  8  |     {
  9  |         const loginPage = new LoginPage(page);
  10 |         await use(loginPage)
  11 |     },
  12 | 
  13 |     dashboardPage: async({page},use)=>
  14 |     {
  15 |         const dashboardPage = new DashboardPage(page);
> 16 |         await use(dashboradPage);
     |                   ^ ReferenceError: dashboradPage is not defined
  17 |     }
  18 | 
  19 | 
  20 | })
```