const {test, expect}= require('@playwright/test');

test('Browser context playwright test', async ({browser})=>   // {browser} playwright fixture or global variable 
{
//If function does not have any name we called as anonymos function and for this type of function we use ()=> fat operator instead of Function()
// we use async before function to use await inside it.
//need to create intance 
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//for print the text in console we use console.log()
console.log(await page.title());
//css or xpath -->type & fill method is for same purpose, we use fill instead of type

const userName = page.locator('#username');
const signIn = page.locator('#signInBtn');

await page.locator('#username').fill("rahulshetty");
await page.locator("[type='password']").fill("learning");
await page.locator('#signInBtn').click();
//wait until this locator shown up to page  -> textContent() this method extract text preset in the locator
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect');

// 
const cardTitles = await page.locator(".card-body a");
await userName.fill("");  // when we use blank fill method than value wippes of above locators
await userName.fill("rahulshettyacademy"); 
await signIn.click();
console.log(await page.locator(".card-body a").first().textContent());
console.log(await page.locator(".card-body a").nth(1).textContent()); //when we want 1st element then we use zero th array so that we use .nth(0) or .first()
const allTitles= await cardTitles.allTextContents(); //for grab all the product titeles present on the page
console.log(allTitles);  //allTextContents() ->this element do not wait until page is load so we are using .textContent() metnod to wait page load  


});

test(' Page playwright test', async ({page})=>  //Page-> fixture just like browser, total 4 fixture in the playwright
{ 
await page.goto("https://www.google.co.in/");
//get the title assertions
console.log(await page.title());
await expect(page).toHaveTitle("Google");


});

// (npx playwright test)-> comand to runs the end-to-end tests.-> npx is the path which will point to the path of playwright module in the node module
//npx playwright test --headed  
// test.only to run only one test cases 