const {test, expect}= require('@playwright/test');
const { only } = require('node:test');

test ('Resistration form', async ({page})=>{
    try{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator(".text-reset").click();
    // Define variables for locators
    const firstNameField = page.locator("#firstName");
    const lastNameField = page.locator("#lastName");
    const emailField = page.locator("#userEmail");
    const mobileField = page.locator("#userMobile");
    const professionDropdown = page.locator(".custom-select.ng-pristine.ng-valid.ng-touched");
    const genderRadio = page.locator("[value='Male']");
    const passwordField = page.locator("#userPassword");
    const confirmPasswordField = page.locator("#confirmPassword");

    // Use variables for actions
    await firstNameField.fill("Abhishek");
    await lastNameField.fill("Sharma");
    await emailField.fill("abhishekit12708@gmail.com");
    await mobileField.fill("8707613918");
    await professionDropdown.click();
    await page.locator("text=Student").click(); // Select the "Student" option from the dropdown
    //await professionDropdown.selectOption({ value: "3" });
    await genderRadio.click();
    await passwordField.fill("Abhi12708@");
    await confirmPasswordField.fill("Abhi12708@");

}catch (error) {
    console.log("Error: ", error);
}
    finally{
        console.log("Test completed");
    }
});
