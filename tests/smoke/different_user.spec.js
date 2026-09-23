import { test, expect } from "@playwright/test"
import { LoginPage } from "../../pages/LoginPage"
import multiuser from "../../testdata/allUser.json"

for (const user of multiuser) 
{
    test(`login to application ${user.id}`, async ({ page }) => 
        {

           await page.goto("/login");

           const loginPage = new LoginPage(page);

           console.log(`logging in user with: ${user.username} ${user.password} ${user.message}`);
           
           await loginPage.loginToApplication(user.username, user.password);
           expect(await loginPage.getErrorMessage()).toBe(user.message);

        })

}