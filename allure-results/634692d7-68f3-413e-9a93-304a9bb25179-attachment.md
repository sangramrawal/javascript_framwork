# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\newregistration.spec.js >> New User SignUp >> New User Registration
- Location: tests\smoke\newregistration.spec.js:10:9

# Error details

```
ReferenceError: NewRegistration is not defined
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
  16 |         await use(dashboardPage);
  17 |     },
  18 |     newRegistration: async({page},use)=>
  19 |     {
> 20 |         const newUser= new NewRegistration(page);
     |                        ^ ReferenceError: NewRegistration is not defined
  21 |         await use(newUser);
  22 |     }
  23 | 
  24 | 
  25 | })
  26 | export {expect} from "@playwright/test"
```