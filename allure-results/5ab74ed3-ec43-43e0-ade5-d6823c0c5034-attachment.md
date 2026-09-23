# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\newregistration.spec.js >> New User SignUp >> New User Registration
- Location: tests\smoke\newregistration.spec.js:9:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//div[text()=\'Signup successfully, Please login!\']')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('//div[text()=\'Signup successfully, Please login!\']') with timeout 5000ms
  - waiting for locator('//div[text()=\'Signup successfully, Please login!\']')
  - operation was aborted: Test ended.

```

```yaml
- navigation:
  - img "logo"
  - heading "Learn Automation Courses" [level=1]
  - img "menu"
  - text: Learn Automation Courses
  - img "delete"
  - link "Home":
    - /url: /
  - link "Practise":
    - /url: /practise
  - button "Log in"
- heading "Sign Up" [level=2]
- textbox "Name": sam sung
- textbox "Email": samsung5@example.com
- textbox "Password must be atleast 6 characters":
  - /placeholder: Password
  - text: password123
- heading "Interests" [level=4]
- checkbox "JAVA" [checked]
- text: JAVA
- checkbox "Selenium"
- text: Selenium
- heading "Gender" [level=4]
- radio [checked]
- text: Male
- radio
- text: Female
- heading "State:" [level=4]
- combobox:
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
- heading "Hobbies:" [level=4]
- listbox:
  - option "Playing"
  - option "Reading" [selected]
  - option "Swimming" [selected]
  - option "Singing"
  - option "Dancing" [selected]
- button "Sign up"
- link "Already a user? Login":
  - /url: /login
- img "Login"
- heading "Learn Automation By Mukesh Otwani" [level=3]
- heading "©2023 All rights reserved" [level=2]
- link:
  - /url: https://youtube.com/MukeshOtwani
  - img
- link:
  - /url: https://twitter.com/MukeshOtwani
  - img
- link:
  - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
  - img
- link:
  - /url: https://www.facebook.com/groups/256655817858291
  - img
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
> 25 |         expect(page.locator("//div[text()='Signup successfully, Please login!']")).toBeVisible({timeout:5000})
     |                                                                                    ^ Error: expect(locator).toBeVisible() failed
  26 | 
  27 |     })
  28 | 
  29 | 
  30 | 
  31 | 
  32 | 
  33 | })
```