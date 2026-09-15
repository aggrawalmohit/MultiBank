import { Locator, Page, expect } from "@playwright/test";

export class Utils {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });

    }

    async getLinkByName(name: string) {
        return this.page.getByRole('link', { name, exact: true });
    }

    async clickAndVerifyRedirectionURL(locator: Locator, url: string) {
        await expect(locator).toBeVisible();
        const [popup] = await Promise.all([
            this.page.waitForEvent('popup'),
            locator.click(),
        ]);
       let link :string = popup.url()
        expect(link).toContain(url)
        await popup.close();
    }

    async verifyPageURL(page: Page, url: string) {
        await page.waitForLoadState('domcontentloaded')
        await expect(page).toHaveURL(url);
    }
}