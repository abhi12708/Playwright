// @ts-check
import { defineConfig, devices } from '@playwright/test';

const config= ({           //config-> Java script object
  testDir: './tests',
  timeout: 30 *1000,
  expect: {  //in the form of Assertion
    timeout: 6000
  },
  reporter : 'html',
 
  use: {

    browserName:'chromium',
    headless : false  //to invoke browser on the screen to use true/false

  },

 });
module.exports= config  //so that it is avilable across all the file in project
