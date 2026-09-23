import {test as base} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage.js"
import { DashboardPage } from "../pages/DashboadPage.js"

export const test=base.extend({

    loginPage: async ({page},use)=>
    {
        const loginPage = new LoginPage(page);
        await use(loginPage)
    },

    dashboardPage: async({page},use)=>
    {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    }


})
export {expect} from "@playwright/test"