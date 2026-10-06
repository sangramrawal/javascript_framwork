# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\different_user.spec.js >> login to application 2
- Location: tests\smoke\different_user.spec.js:7:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Password is required"
Received: undefined
```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - navigation [ref=f2e4]:
    - generic [ref=f2e5]:
      - generic [ref=f2e6] [cursor=pointer]:
        - img "logo" [ref=f2e7]
        - heading "Learn Automation Courses" [level=1] [ref=f2e8]
      - generic [ref=f2e9]:
        - img "menu" [ref=f2e10] [cursor=pointer]
        - generic [ref=f2e11]:
          - generic [ref=f2e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=f2e13] [cursor=pointer]
          - generic [ref=f2e14]:
            - link "Home" [ref=f2e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f2e17] [cursor=pointer]:
              - /url: /practise
  - generic [ref=f2e20]:
    - img "Login" [ref=f2e22]
    - generic [ref=f2e23]:
      - generic [ref=f2e25]:
        - heading "Sign In" [level=2] [ref=f2e26]
        - textbox "Enter Email" [ref=f2e27]: admin@email.com
        - textbox "Enter Password" [ref=f2e28]
        - heading [level=2] [ref=f2e29]:
          - img "error" [ref=f2e30]
          - text: Password is required
        - button "Sign in" [active] [ref=f2e31] [cursor=pointer]
        - link "New user? Signup" [ref=f2e32] [cursor=pointer]:
          - /url: /signup
      - generic [ref=f2e33]:
        - heading "Connect with us" [level=2] [ref=f2e34]
        - generic [ref=f2e35] [cursor=pointer]:
          - link [ref=f2e36]:
            - /url: https://youtube.com/MukeshOtwani
          - link [ref=f2e40]:
            - /url: https://twitter.com/MukeshOtwani
          - link [ref=f2e43]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
          - link [ref=f2e46]:
            - /url: https://www.facebook.com/groups/256655817858291
          - link [ref=f2e49]:
            - /url: https://learn-automation/reddit
  - generic [ref=f2e64]:
    - generic [ref=f2e65]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f2e66]
      - heading "©2023 All rights reserved" [level=2] [ref=f2e67]
    - generic [ref=f2e68] [cursor=pointer]:
      - link [ref=f2e69]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f2e73]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f2e76]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f2e79]:
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