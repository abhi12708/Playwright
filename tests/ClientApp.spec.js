const {test, expect}= require('@playwright/test');

test('Browser context playwright test', async ({browser})=>   // {browser} playwright fixture or global variable 
{
//If function does not have any name we called as anonymos function and for this type of function we use ()=> fat operator instead of Function()
// we use async before function to use await inside it.
//need to create intance 
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
})
