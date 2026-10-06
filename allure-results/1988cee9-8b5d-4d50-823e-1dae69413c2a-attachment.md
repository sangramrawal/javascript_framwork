# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\different_user.spec.js >> login to application 4
- Location: tests\smoke\different_user.spec.js:7:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Email and Password is required"
Received: undefined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6] [cursor=pointer]:
        - img "logo" [ref=e7]
        - heading "Learn Automation Courses" [level=1] [ref=e8]
      - generic [ref=e9]:
        - img "menu" [ref=e10] [cursor=pointer]
        - generic [ref=e11]:
          - generic [ref=e12]:
            - text: Learn Automation Courses
            - img "delete"
          - generic [ref=e13]:
            - link "Home" [ref=e14] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=e16] [cursor=pointer]:
              - /url: /practise
  - generic [ref=e19]:
    - generic [ref=e20]:
      - img "Login"
    - generic [ref=e21]:
      - generic [ref=e23]:
        - heading "Sign In" [level=2] [ref=e24]
        - textbox "Enter Email" [ref=e25]
        - textbox "Enter Password" [ref=e26]
        - heading "error Email and Password is required" [level=2] [ref=e27]:
          - img "error"
          - text: Email and Password is required
        - button "Sign in" [active] [ref=e28] [cursor=pointer]
        - link "New user? Signup" [ref=e29] [cursor=pointer]:
          - /url: /signup
      - generic [ref=e30]:
        - heading "Connect with us" [level=2] [ref=e31]
        - generic [ref=e32] [cursor=pointer]:
          - link [ref=e33]:
            - /url: https://youtube.com/MukeshOtwani
          - link [ref=e37]:
            - /url: https://twitter.com/MukeshOtwani
          - link [ref=e40]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
          - link [ref=e43]:
            - /url: https://www.facebook.com/groups/256655817858291
          - link [ref=e46]:
            - /url: https://learn-automation/reddit
  - generic [ref=e61]:
    - generic [ref=e62]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e63]
      - heading "©2023 All rights reserved" [level=2] [ref=e64]
    - generic [ref=e65] [cursor=pointer]:
      - link [ref=e66]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=e70]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=e73]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=e76]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | import { LoginPage } from "../../pages/LoginPage"
  3  | import multiuser from "../../testdata/allUser.json"
  4  | 
  5  | for (const user of multiuser) 
  6  | {
  7  |     test(`login to application ${user.id}`, async ({ page }) => 
  8  |         {
  9  | 
  10 |            await page.goto("/login");
  11 | 
  12 |            const loginPage = new LoginPage(page);
  13 | 
  14 |            console.log(`logging in user with: ${user.username} ${user.password} ${user.message}`);
  15 |            
  16 |            await loginPage.loginToApplication(user.username, user.password);
> 17 |            expect(await loginPage.getErrorMessage()).toBe(user.message);
     |                                                      ^ Error: expect(received).toBe(expected) // Object.is equality
  18 | 
  19 |         })
  20 | 
  21 | }
```