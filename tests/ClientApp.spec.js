const {test, expect}= require('@playwright/test');
const { only } = require('node:test');

test ('Resistration form', async ({page})=>{
    try{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator(".text-reset").click();
    await page.locator("#firstName").fill("Abhishek");
    await page.locator("#lastName").fill("Sharma");
    await page.locator("#userEmail").fill("abhishekit12708@gmail.com");
    await page.locator("#userMobile").fill("8707613918");
    await page.locator(".custom-select ng-pristine ng-valid ng-touched").selectOption({label: "Engineer"});
}catch (error) {
    console.log("Error: ", error);
}
    finally{
        console.log("Test completed");
    }
});

// test('Browser context playwright test', async ({page})=>   // {browser} playwright fixture or global variable 
// {
// await page.locator("#userEmail").fill("abhishekit12708@gmail.com");
// await page.locator("#userPassword").type("Anshika@123");
// await page.locator("[value='Login']").click();
// await page.waitForLoadState('networkidle'); // wait for network idle state to ensure all requests are completed (Through API)
// await page.locator("")
// })
