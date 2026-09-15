import { Page, expect } from "@playwright/test";
import url from "../configuration/env";
import { Utils } from "../lib/utils";


export class homePage {
    readonly page: Page;
    private readonly url: string;
    private readonly utils: Utils;

    constructor(page: Page) {
        this.page = page;
        this.url = url;
        this.utils = new Utils(this.page);
    }

    async navigateTo() {
        await this.utils.navigateTo(this.url);
    }

    async verifyTopNavigationLinks(link: string) {
        const locator = await this.utils.getLinkByName(link);
        await expect(locator).toBeVisible()
    };

    async verifyNavLinkNavigation(link: string, external: boolean, url: string) {
        const locator = await this.utils.getLinkByName(link);
        console.log(locator)
        await expect(locator).toBeVisible();

        if (external) {
            await this.utils.clickAndVerifyRedirectionURL(locator, url)
        } else {
            await locator.click();
            await this.utils.verifyPageURL(this.page, url)

        }
    }
}






