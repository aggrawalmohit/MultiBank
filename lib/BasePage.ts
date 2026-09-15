import { test as base, Page } from "@playwright/test";
import {homePage} from "../Pages/homePage";

export const test = base.extend<{
    page: Page;
    homePage: homePage;
}>({
 
    homePage: async ({ page }, use) => {
        await use(new homePage(page));
    }
});