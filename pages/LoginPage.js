//import {page} from "@playwright/test"
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage
{
    constructor(page)
    {
        super(page)
        this.page=page;
        this.usernameField= page.getByRole('textbox', { name: 'Enter Email' })
        this.passwordField= page.getByPlaceholder('Enter Password')
        this.loginButton= page.getByRole('button', { name: 'Sign in' })
        this.newUserSignUpLink= page.getByRole('link', { name: 'New user? Signup' })
        this.errorMessage= page.locator(".errorMessage")
    }

    async loginToApplication(username, Password)
    {
        await this.type(this.usernameField, username)
        //await this.usernameField.fill(username);
        await this.type(this.passwordField, Password)
        //await this.passwordField.fill(Password);
        await this.click(this.loginButton)
        //await this.loginButton.click()
    }

    async clickOnNewUserSignUpLink()
    {
        await this.click(this.newUserSignUpLink)
        //await this.newUserSignUpLink.click()
    }

    async getErrorMessage()
    {
        await this.getText(this.errorMessage)
        //return await this.errorMessage.textContent();
    }
        
    

}