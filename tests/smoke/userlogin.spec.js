//import {test, expect} from "@playwright/test"
//import {LoginPage} from "../../pages/LoginPage.js"
//import { DashboardPage } from "../../pages/DashboadPage.js";

import {test, expect} from "../../fixture/fixture.js"

import user from "../../testdata/user.json"

test.describe("Login Test", {tags: ['smoke','login']},()=>{

test("Login to Application", async({page,loginPage,dashboardPage})=>
{
    await page.goto("/login")
    
    //const loginPage = new LoginPage(page);
    
    await loginPage.loginToApplication(user.username, user.password);

    //const dashboardPage = new DashboardPage(page);

    await dashboardPage.clickOnMenuIcon();
    await dashboardPage.clickOnSignOutButton();

    expect(page.url()).not.toContain('/login')


});

})