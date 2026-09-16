import { Locator, Page, expect ,request} from "@playwright/test";

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

    async getByHeading(name: string) {
        return this.page.getByRole('heading', {name,exact: true });
    }

    async getByText(text:string){
        return this.page.getByText(text);
    }

    async clickAndVerifyRedirectionURL(locator: Locator, url: string) {
        await this.verifyIsVisible(locator)
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

    async verifyIsVisible(locator:Locator){
        await expect(locator).toBeVisible();
    }

    async verifyLocatorCount(locator:Locator,Expectedcount:number){
        await locator.nth(1).waitFor({state:"visible"})
        const count = await locator.count()
        expect(count).toBe(Expectedcount);
    }

    async getLocatorCount(locator:Locator){
        await locator.nth(1).waitFor({state:"visible"})
        return await locator.count()
    }

    async verifyTextContent(locator:Locator,expectedText:string){
        await expect(locator).toContainText(expectedText);
    }

    async verifyBrokenLinks(){
 const apiContext = await request.newContext();
  const allLinks = this.page.locator('a[href]');
  const count = await allLinks.count();

  const seen = new Set<string>(); 

  for (let i = 0; i < count; i++) {
    const href = await allLinks.nth(i).getAttribute('href');

    if (!href) continue;
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:') || href.startsWith('/')) {
      continue;
    }

    const url = href.startsWith('http') ? href : new URL(href).toString();

    if (seen.has(url)) continue; // skip duplicates
    seen.add(url);

      const response = await apiContext.get(url);
      expect.soft(response.status(), `${url} returned ${response.status()}`).toBeLessThan(400);
    
  }




    }


}