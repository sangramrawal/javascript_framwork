import { BasePage } from "./BasePage";

export class NewRegistration extends BasePage
{
    constructor(page)
    {
        super(page)
        this.page=page;
        this.name= page.getByPlaceholder("Name")
        this.email= page.getByPlaceholder("Email")
        this.password= page.getByPlaceholder("Password")
        this.interestJava= page.getByRole('checkbox', { name: 'JAVA' })
        this.interestSelenium= page.getByRole('checkbox', { name: 'Selenium' })
        this.genderMale= page.locator('#gender1')
        this.genderFemale= page.locator('#gender2')
        this.state= page.locator('#state')
        this.hobbies= page.locator('#hobbies')
        this.sigUpButton= page.getByRole('button',{name:'Sign up'})

        this.successMessage= page.locator("//div[text()='Signup successfully, Please login!']")
        
    }

    async userDetails(name,email,password)
    {
        await this.type(this.name, name)
        await this.type(this.email, email)
        await this.type(this.password, password)
    }
     async selectInterest(interest)
     {
        if(interest.toLowerCase()==="java")
        {
           await this.click(this.interestJava)
        }
        else if(interest.toLowerCase()==="selenium")
        {
            await this.click(this.interestSelenium)
        }
     }

     async selectGender(gender)
     {
         if(gender.toLowerCase()==="male")
        {
           await this.click(this.genderMale)
        }
        else if(gender.toLowerCase()==="female")
        {
            await this.click(this.genderFemale)
        }
     }

     async selectState(state)
     {
        await this.handleDropdown(this.state, state)
     }

     async selectHobbies(hobbies)
     {
        await this.handleDropdown(this.hobbies, hobbies)
     }

     async clickOnSignUpButton ()
     {
        await this.click(this.sigUpButton)
     }

     async getSuccessMessage()
     {
        return await this.getText(this.successMessage)
     }

}