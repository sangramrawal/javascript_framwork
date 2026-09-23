# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\userdata.spec.js >> Login to Application
- Location: tests\smoke\userdata.spec.js:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Sign out' })

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
            - img "delete" [ref=e13] [cursor=pointer]
          - generic [ref=e14]:
            - link "Home" [ref=e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=e17] [cursor=pointer]:
              - /url: /practise
  - generic [ref=e20]:
    - img "Login" [ref=e22]
    - generic [ref=e23]:
      - generic [ref=e25]:
        - heading "Sign In" [level=2] [ref=e26]
        - textbox "Enter Email" [ref=e27]: admin@email.com
        - textbox "Enter Password" [ref=e28]: admin@1234
        - heading [level=2] [ref=e29]:
          - img "error" [ref=e30]
          - text: Email and Password Doesn't match
        - button "Sign in" [ref=e31] [cursor=pointer]
        - link "New user? Signup" [ref=e32] [cursor=pointer]:
          - /url: /signup
      - generic [ref=e33]:
        - heading "Connect with us" [level=2] [ref=e34]
        - generic [ref=e35] [cursor=pointer]:
          - link [ref=e36]:
            - /url: https://youtube.com/MukeshOtwani
          - link [ref=e40]:
            - /url: https://twitter.com/MukeshOtwani
          - link [ref=e43]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
          - link [ref=e46]:
            - /url: https://www.facebook.com/groups/256655817858291
          - link [ref=e49]:
            - /url: https://learn-automation/reddit
  - generic [ref=e64]:
    - generic [ref=e65]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e66]
      - heading "©2023 All rights reserved" [level=2] [ref=e67]
    - generic [ref=e68] [cursor=pointer]:
      - link [ref=e69]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=e73]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=e76]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=e79]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | export class DashboardPage
  2  | {
  3  |     constructor (page)
  4  |     {
  5  |         this.page=page;
  6  | 
  7  |         this.menuIcon= page.getByRole('img', { name: 'menu' });
  8  |         this.signOutButton= page.getByRole('button', { name: 'Sign out' })
  9  | 
  10 |     }
  11 | 
  12 |     async clickOnMenuIcon()
  13 |     {
  14 |         await this.menuIcon.click();
  15 | 
  16 |     }
  17 | 
  18 |     async clickOnSignOutButton()
  19 |     {
> 20 |         await this.signOutButton.click();
     |                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  21 |     }
  22 | }
```