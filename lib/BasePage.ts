import { test as base, Page } from "@playwright/test";
import {homePage} from "../Pages/homePage";
import { aboutPage } from "../Pages/aboutPage";

export const test = base.extend<{
    page: Page;
    homePage: homePage;
    aboutPage : aboutPage;
}>({
 
    homePage: async ({ page }, use) => {
        await use(new homePage(page));
    },

    aboutPage: async ({ page }, use) => {
        await use(new aboutPage(page));
    }
});