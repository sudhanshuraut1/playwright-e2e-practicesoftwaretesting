import test from "@playwright/test";
import { Page } from "@playwright/test";
import { generateRandomEmail } from "../../utils/randomdata";

test('first test' ,async ({page})=>{
   await  page.goto("");
    await page.waitForTimeout(3000);
    generateRandomEmail({provider : "accelya.com"});
    generateRandomEmail({});
})