# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\newregistration.spec.js >> New User SignUp >> New User Registration
- Location: tests\smoke\newregistration.spec.js:9:9

# Error details

```
TypeError: received is not iterable
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
            - button "Log in" [ref=f4e19] [cursor=pointer]
  - generic [ref=f4e21]:
    - generic [ref=f4e24]:
      - heading "Sign Up" [level=2] [ref=f4e25]
      - textbox "Name" [ref=f4e26]: sam sung
      - textbox "Email" [ref=f4e27]: samsung@example.com
      - textbox "Password must be atleast 6 characters" [ref=f4e28]:
        - /placeholder: Password
        - text: password123
      - heading "Interests" [level=4] [ref=f4e29]
      - generic [ref=f4e30]:
        - generic [ref=f4e31]:
          - checkbox "JAVA" [checked] [ref=f4e33]
          - generic [ref=f4e34]: JAVA
        - generic [ref=f4e35]:
          - checkbox "Selenium" [ref=f4e37]
          - generic [ref=f4e38]: Selenium
      - heading "Gender" [level=4] [ref=f4e39]
      - generic [ref=f4e40]:
        - generic [ref=f4e41]:
          - radio [checked] [ref=f4e42]
          - generic [ref=f4e43]: Male
        - generic [ref=f4e44]:
          - radio [ref=f4e45]
          - generic [ref=f4e46]: Female
      - generic [ref=f4e47]:
        - heading "State:" [level=4] [ref=f4e48]
        - combobox [ref=f4e49]:
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
      - generic [ref=f4e50]:
        - heading "Hobbies:" [level=4] [ref=f4e51]
        - listbox [ref=f4e52]:
          - option "Playing" [ref=f4e53]
          - option "Reading" [selected] [ref=f4e54]
          - option "Swimming" [selected] [ref=f4e55]
          - option "Singing" [ref=f4e56]
          - option "Dancing" [selected] [ref=f4e57]
      - heading [level=2] [ref=f4e58]:
        - img "error" [ref=f4e59]
        - text: Email already registered!
      - button "Sign up" [active] [ref=f4e60] [cursor=pointer]
      - link "Already a user? Login" [ref=f4e61] [cursor=pointer]:
        - /url: /login
    - img "Login" [ref=f4e63]
  - generic [ref=f4e65]:
    - generic [ref=f4e66]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f4e67]
      - heading "©2023 All rights reserved" [level=2] [ref=f4e68]
    - generic [ref=f4e69] [cursor=pointer]:
      - link [ref=f4e70]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f4e74]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f4e77]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f4e80]:
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
> 24 |         expect(newUser.getSuccessMessage).toContain("Signup successfully, Please login!")
     |                                           ^ TypeError: received is not iterable
  25 | 
  26 |     })
  27 | 
  28 | 
  29 | 
  30 | 
  31 | 
  32 | })
```