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
- generic [ref=f6e3]:
  - navigation [ref=f6e4]:
    - generic [ref=f6e5]:
      - generic [ref=f6e6] [cursor=pointer]:
        - img "logo" [ref=f6e7]
        - heading "Learn Automation Courses" [level=1] [ref=f6e8]
      - generic [ref=f6e9]:
        - img "menu" [ref=f6e10] [cursor=pointer]
        - generic [ref=f6e11]:
          - generic [ref=f6e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=f6e13] [cursor=pointer]
          - generic [ref=f6e14]:
            - link "Home" [ref=f6e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f6e17] [cursor=pointer]:
              - /url: /practise
  - generic [ref=f6e20]:
    - img "Login" [ref=f6e22]
    - generic [ref=f6e23]:
      - generic [ref=f6e25]:
        - heading "Sign In" [level=2] [ref=f6e26]
        - textbox "Enter Email" [ref=f6e27]
        - textbox "Enter Password" [ref=f6e28]
        - heading [level=2] [ref=f6e29]:
          - img "error" [ref=f6e30]
          - text: Email and Password is required
        - button "Sign in" [active] [ref=f6e31] [cursor=pointer]
        - link "New user? Signup" [ref=f6e32] [cursor=pointer]:
          - /url: /signup
      - generic [ref=f6e33]:
        - heading "Connect with us" [level=2] [ref=f6e34]
        - generic [ref=f6e35] [cursor=pointer]:
          - link [ref=f6e36]:
            - /url: https://youtube.com/MukeshOtwani
          - link [ref=f6e40]:
            - /url: https://twitter.com/MukeshOtwani
          - link [ref=f6e43]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
          - link [ref=f6e46]:
            - /url: https://www.facebook.com/groups/256655817858291
          - link [ref=f6e49]:
            - /url: https://learn-automation/reddit
  - generic [ref=f6e64]:
    - generic [ref=f6e65]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f6e66]
      - heading "©2023 All rights reserved" [level=2] [ref=f6e67]
    - generic [ref=f6e68] [cursor=pointer]:
      - link [ref=f6e69]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f6e73]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f6e76]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f6e79]:
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