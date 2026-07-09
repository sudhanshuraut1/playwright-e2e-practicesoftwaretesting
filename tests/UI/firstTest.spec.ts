import test from "@playwright/test";
import { Page } from "@playwright/test";

test('first test' ,async ({page})=>{
    
   await  page.goto("");
    await page.waitForTimeout(3000);
})