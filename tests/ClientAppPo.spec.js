const {test, expect}= require('@playwright/test');
const {LoginPage} = require('../pageobjects/loginPage.js'); //importing the page object class to use in this file

test('Client App login', async ({ page }) => {
    
    const userName = 'anshika@gmail.com';
    const password = "Iamking@000";
    const loginPage = new LoginPage(page); //create instance of page object class
    await page.goto("https://rahulshettyacademy.com/client/") ; //call the method of page object class to go to the url
    await page.waitForTimeout(3000);
    loginPage.validLogin(userName, password); //call the method of page object class to perform login 
    


})