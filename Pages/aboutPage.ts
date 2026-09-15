import { Page, expect } from "@playwright/test";
import url from "../configuration/env";
import { Utils } from "../lib/utils";
import { aboutPageLocators } from "../locators/aboutPageLocators";



export class aboutPage{

    readonly page: Page;
    private readonly url: string;
    private readonly utils: Utils;
    aboutPageLocators = new aboutPageLocators()


    constructor(page: Page) {
        this.page = page;
        this.url = url;
        this.utils = new Utils(this.page);
    }

    async verifyHeadingaAndText(foundedIn2005Subtext:string,weBelieveTechnologySubtext:string,trustIsEarnedSubtext:string){

       await this.utils.verifyIsVisible( await this.utils.getByHeading(this.aboutPageLocators.whyMultiBankText))
       await this.utils.verifyIsVisible( await this.utils.getByHeading(this.aboutPageLocators.whyMultiBankSubText))
       await this.utils.verifyIsVisible( await this.utils.getByHeading(this.aboutPageLocators.atraditionOfGlobalLeadershipText))
       await this.utils.verifyTextContent(this.page.locator(this.aboutPageLocators.foundedIn2005Subtext),foundedIn2005Subtext);
       await this.utils.verifyIsVisible( await this.utils.getByHeading(this.aboutPageLocators.innovationwithPurposeText))
       await this.utils.verifyTextContent(this.page.locator(this.aboutPageLocators.weBelieveTechnologySubtext),weBelieveTechnologySubtext);
       await this.utils.verifyIsVisible( await this.utils.getByHeading(this.aboutPageLocators.integrityBuiltText))
       await this.utils.verifyTextContent(this.page.locator(this.aboutPageLocators.trustIsEarnedSubtext),trustIsEarnedSubtext);


    }


}