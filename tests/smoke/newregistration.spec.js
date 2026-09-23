import {test, expect} from "@playwright/test"
import { LoginPage } from "../../pages/LoginPage.js"
import { NewRegistration } from "../../pages/NewRegistration.js"

import user from "../../testdata/newUser.json"

test.describe('New User SignUp',{tags:['smoke','signUp']}, ()=>
{
    test("New User Registration", async({page})=>
    {
        await page.goto("/login")

        const loginPage= new LoginPage(page)
        await loginPage.clickOnNewUserSignUpLink()

        const newUser= new NewRegistration(page)
        await newUser.userDetails(user.name, user.email, user.password)
        await newUser.selectInterest(user.interest)
        await newUser.selectGender(user.gender)
        await newUser.selectState(user.state)
        await newUser.selectHobbies(user.hobbies)
        await newUser.clickOnSignUpButton()

        //expect(newUser.getSuccessMessage()).toContain("Signup successfully, Please login!")
        //expect(page.locator("//div[text()='Signup successfully, Please login!']")).toBeVisible({timeout:5000})

    })





})