class LoginPage 
{
    constructor(page)
    {
        this.page = page; //page is a global variable in playwright which is used to perform actions on the page
        this.signInbutton = page.locator("[value='Login']");
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
    }
    // async goTo() {
    //     await this.page.goto("https://rahulshettyacademy.com/client/") ;//this.page is used to access the page object of the class
    // }
    async validLogin(userName, password) {
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.signInbutton.click();
    }
}
module.exports = { LoginPage }; //exporting the class to use in other files
// //we can use this class in other files by importing it using require method

