import {test, expect} from "@playwright/test"
import {LoginPage} from "../../pages/LoginPage.js"
import { DashboardPage } from "../../pages/DashboadPage.js";

test("Login to Application", async({page})=>
{
    await page.goto("/login")
    
    const loginPage = new LoginPage(page);
    
    await loginPage.loginToApplication('admin@email.com', 'admin@123');

    const dashboardPage = new DashboardPage(page);

    await dashboardPage.clickOnMenuIcon();
    await dashboardPage.clickOnSignOutButton();


})