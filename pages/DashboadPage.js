import { BasePage } from "./BasePage";

export class DashboardPage extends BasePage
{
    constructor (page)
    {
        super(page)
        this.page=page;

        this.menuIcon= page.getByRole('img', { name: 'menu' });
        this.signOutButton= page.getByRole('button', { name: 'Sign out' })

    }

    async clickOnMenuIcon()
    {
        await this.click(this.menuIcon)
        //await this.menuIcon.click();

    }

    async clickOnSignOutButton()
    {
        await this.click(this.signOutButton)
        //await this.signOutButton.click();
    }
}