# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\different_user.spec.js >> login to application 3
- Location: tests\smoke\different_user.spec.js:7:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Email is required"
Received: undefined
```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - navigation [ref=f4e4]:
    - generic [ref=f4e5]:
      - generic [ref=f4e6] [cursor=pointer]:
        - img "logo" [ref=f4e7]
        - heading "Learn Automation Courses" [level=1] [ref=f4e8]
      - generic [ref=f4e9]:
        - img "menu" [ref=f4e10] [cursor=pointer]
        - generic [ref=f4e11]:
          - generic [ref=f4e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=f4e13] [cursor=pointer]
          - generic [ref=f4e14]:
            - link "Home" [ref=f4e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f4e17] [cursor=pointer]:
              - /url: /practise
  - generic [ref=f4e20]:
    - img "Login" [ref=f4e22]
    - generic [ref=f4e23]:
      - generic [ref=f4e25]:
        - heading "Sign In" [level=2] [ref=f4e26]
        - textbox "Enter Email" [ref=f4e27]
        - textbox "Enter Password" [ref=f4e28]: admin@123
        - heading [level=2] [ref=f4e29]:
          - img "error" [ref=f4e30]
          - text: Email is required
        - button "Sign in" [active] [ref=f4e31] [cursor=pointer]
        - link "New user? Signup" [ref=f4e32] [cursor=pointer]:
          - /url: /signup
      - generic [ref=f4e33]:
        - heading "Connect with us" [level=2] [ref=f4e34]
        - generic [ref=f4e35] [cursor=pointer]:
          - link [ref=f4e36]:
            - /url: https://youtube.com/MukeshOtwani
          - link [ref=f4e40]:
            - /url: https://twitter.com/MukeshOtwani
          - link [ref=f4e43]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
          - link [ref=f4e46]:
            - /url: https://www.facebook.com/groups/256655817858291
          - link [ref=f4e49]:
            - /url: https://learn-automation/reddit
  - generic [ref=f4e64]:
    - generic [ref=f4e65]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f4e66]
      - heading "©2023 All rights reserved" [level=2] [ref=f4e67]
    - generic [ref=f4e68] [cursor=pointer]:
      - link [ref=f4e69]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f4e73]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f4e76]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f4e79]:
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