import {test} from "@playwright/test"

export class BasePage
{

    constructor(page)
    {
        this.page= page;

    }

    // waits, alerts, fill, type, dropdown, handle multiple tabs, capture text and more method can be addess here.

    async handleDropdown(selector, value)
    {
        await selector.selectOption(value);
        console.log(`**** dropdown handled with value ${value} ****`);
    }

    async getText(selector)
    {
        return await selector.textContent()
    }

    async type(selector, text)
    {
        await selector.fill(text)
    }

    async click(selector)
    {
        await selector.click();
    }
    
    async nevigateToApplication(URL)
    {
        await this.page.goto(URL);
    }

    async uploadFiles(selector, filePaths)
    {
        await selector.setInputFiles(filePaths);
    }

}