import { Page, expect } from "@playwright/test";
import url from "../configuration/env";
import { Utils } from "../lib/utils";
import { HomePageLocators } from "../locators/homePageLocators"; 

export class homePage {
    readonly page: Page;
    private readonly url: string;
    private readonly utils: Utils;
    HomePageLocators = new HomePageLocators()

    constructor(page: Page) {
        this.page = page;
        this.url = url;
        this.utils = new Utils(this.page);
    }

   

    async navigateTo() {
        await this.utils.navigateTo(this.url);
    }

    async navigateToAbout(){
      await (await this.utils.getLinkByName(this.HomePageLocators.CompanyLink)).click()
      await this.page.waitForLoadState('domcontentloaded')
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

    async verifyTradingCardsCount(Expectedcount:number){
       await this.utils.verifyLocatorCount (this.page.locator(this.HomePageLocators.tradingPairCards),Expectedcount)
    }
    async verifyTradingPairsCount(Expectedcount:number){
        await this.utils.verifyLocatorCount(this.page.locator(this.HomePageLocators.tradingPairs),Expectedcount)
    }

    async verifyALLTradingPairsGroups(){
        await this.utils.verifyIsVisible(await this.utils.getByHeading(this.HomePageLocators.TopGainers))
        await this.utils.verifyIsVisible(await this.utils.getByHeading(this.HomePageLocators.TopLosers))
        await this.utils.verifyIsVisible(await this.utils.getByHeading(this.HomePageLocators.TrendingNow))

    }

    async verifyTradingPairDataIsVisible(){
      const Namecount =  await this.utils.getLocatorCount(this.page.locator(this.HomePageLocators.tradingPairNameNprice))
      const percentageCount =  await this.utils.getLocatorCount(this.page.locator(this.HomePageLocators.tradingPairPercentage))
      for(let i=0;i<Namecount;i++){
        await this.utils.verifyIsVisible(this.page.locator(this.HomePageLocators.tradingPairNameNprice).nth(i))
      }

      for(let i=0;i<percentageCount;i++){
        await this.utils.verifyIsVisible(this.page.locator(this.HomePageLocators.tradingPairPercentage).nth(i))
      }

    }

    async verifyMarketingBannerRendersAtCorrectPosition(expectedText:string){
        
        const locator = this.page.locator(this.HomePageLocators.marketingBanner).nth(0)
        await this.utils.verifyTextContent(locator,expectedText)
  
      }

      async verifyAppStoreLinkNavigation(url:string){
      await this.utils.clickAndVerifyRedirectionURL(await this.utils.getLinkByName(this.HomePageLocators.DownloadAppButton),url)
      }


      async verifyHomePageBrokenLinks(){
        await this.utils.verifyBrokenLinks();
      }
}






