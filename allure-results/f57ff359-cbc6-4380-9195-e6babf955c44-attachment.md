# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\newregistration.spec.js >> New User SignUp >> New User Registration
- Location: tests\smoke\newregistration.spec.js:9:9

# Error details

```
Error: toBeVisible can be only used with Locator object, was called with Promise Promise { <pending> }
```

# Page snapshot

```yaml
- generic [ref=f16e3]:
  - navigation [ref=f16e4]:
    - generic [ref=f16e5]:
      - generic [ref=f16e6] [cursor=pointer]:
        - img "logo" [ref=f16e7]
        - heading "Learn Automation Courses" [level=1] [ref=f16e8]
      - generic [ref=f16e9]:
        - img "menu" [ref=f16e10] [cursor=pointer]
        - generic [ref=f16e11]:
          - generic [ref=f16e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=f16e13] [cursor=pointer]
          - generic [ref=f16e14]:
            - link "Home" [ref=f16e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f16e17] [cursor=pointer]:
              - /url: /practise
            - button "Log in" [ref=f16e19] [cursor=pointer]
  - generic [ref=f16e21]:
    - generic [ref=f16e24]:
      - heading "Sign Up" [level=2] [ref=f16e25]
      - textbox "Name" [ref=f16e26]: sam sung
      - textbox "Email" [ref=f16e27]: samsung3@example.com
      - textbox "Password must be atleast 6 characters" [ref=f16e28]:
        - /placeholder: Password
        - text: password123
      - heading "Interests" [level=4] [ref=f16e29]
      - generic [ref=f16e30]:
        - generic [ref=f16e31]:
          - checkbox "JAVA" [checked] [ref=f16e33]
          - generic [ref=f16e34]: JAVA
        - generic [ref=f16e35]:
          - checkbox "Selenium" [ref=f16e37]
          - generic [ref=f16e38]: Selenium
      - heading "Gender" [level=4] [ref=f16e39]
      - generic [ref=f16e40]:
        - generic [ref=f16e41]:
          - radio [checked] [ref=f16e42]
          - generic [ref=f16e43]: Male
        - generic [ref=f16e44]:
          - radio [ref=f16e45]
          - generic [ref=f16e46]: Female
      - generic [ref=f16e47]:
        - heading "State:" [level=4] [ref=f16e48]
        - combobox [ref=f16e49]:
          - option "Andhra Pradesh"
          - option "Arunachal Pradesh"
          - option "Assam"
          - option "Bihar"
          - option "Chhattisgarh"
          - option "Goa"
          - option "Gujarat"
          - option "Haryana"
          - option "Himachal Pradesh"
          - option "Jammu and Kashmir"
          - option "Jharkhand"
          - option "Karnataka"
          - option "Kerala"
          - option "Madhya Pradesh"
          - option "Maharashtra" [selected]
          - option "Manipur"
          - option "Meghalaya"
          - option "Mizoram"
          - option "Nagaland"
          - option "Odisha"
          - option "Punjab"
          - option "Rajasthan"
          - option "Sikkim"
          - option "Tamil Nadu"
          - option "Telangana"
          - option "Tripura"
          - option "Uttarakhand"
          - option "Uttar Pradesh"
          - option "West Bengal"
          - option "Andaman and Nicobar Islands"
          - option "Chandigarh"
          - option "Dadra and Nagar Haveli"
          - option "Daman and Diu"
          - option "Delhi"
          - option "Lakshadweep"
          - option "Puducherry"
      - generic [ref=f16e50]:
        - heading "Hobbies:" [level=4] [ref=f16e51]
        - listbox [ref=f16e52]:
          - option "Playing" [ref=f16e53]
          - option "Reading" [selected] [ref=f16e54]
          - option "Swimming" [selected] [ref=f16e55]
          - option "Singing" [ref=f16e56]
          - option "Dancing" [selected] [ref=f16e57]
      - button "Sign up" [active] [ref=f16e58] [cursor=pointer]
      - link "Already a user? Login" [ref=f16e59] [cursor=pointer]:
        - /url: /login
    - img "Login" [ref=f16e61]
  - generic [ref=f16e63]:
    - generic [ref=f16e64]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f16e65]
      - heading "©2023 All rights reserved" [level=2] [ref=f16e66]
    - generic [ref=f16e67] [cursor=pointer]:
      - link [ref=f16e68]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f16e72]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f16e75]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f16e78]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | import {test, expect} from "@playwright/test"
  2  | import { LoginPage } from "../../pages/LoginPage.js"
  3  | import { NewRegistration } from "../../pages/NewRegistration.js"
  4  | 
  5  | import user from "../../testdata/newUser.json"
  6  | 
  7  | test.describe('New User SignUp',{tags:['smoke','signUp']}, ()=>
  8  | {
  9  |     test("New User Registration", async({page})=>
  10 |     {
  11 |         await page.goto("/login")
  12 | 
  13 |         const loginPage= new LoginPage(page)
  14 |         await loginPage.clickOnNewUserSignUpLink()
  15 | 
  16 |         const newUser= new NewRegistration(page)
  17 |         await newUser.userDetails(user.name, user.email, user.password)
  18 |         await newUser.selectInterest(user.interest)
  19 |         await newUser.selectGender(user.gender)
  20 |         await newUser.selectState(user.state)
  21 |         await newUser.selectHobbies(user.hobbies)
  22 |         await newUser.clickOnSignUpButton()
  23 | 
  24 |         //expect(newUser.getSuccessMessage()).toContain("Signup successfully, Please login!")
> 25 |         expect(newUser.getSuccessMessage()).toBeVisible({timeout:5000})
     |                                             ^ Error: toBeVisible can be only used with Locator object, was called with Promise Promise { <pending> }
  26 | 
  27 |     })
  28 | 
  29 | 
  30 | 
  31 | 
  32 | 
  33 | })
```