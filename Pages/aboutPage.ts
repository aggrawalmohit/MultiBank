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

    async verifyHeadingaAndText(){

       await this.utils.verifyIsVisible( await this.utils.getByHeading(this.aboutPageLocators.whyMultiBankText))
       await this.utils.verifyIsVisible( await this.utils.getByHeading(this.aboutPageLocators.whyMultiBankSubText))
       await this.utils.verifyIsVisible( await this.utils.getByHeading(this.aboutPageLocators.atraditionOfGlobalLeadershipText))
       await this.utils.verifyIsVisible(await this.utils.getByText(this.aboutPageLocators.foundedIn2005Subtext));
       await this.utils.verifyIsVisible( await this.utils.getByHeading(this.aboutPageLocators.innovationwithPurposeText))
       await this.utils.verifyIsVisible(await this.utils.getByText(this.aboutPageLocators.weBelieveTechnologySubtext));
       await this.utils.verifyIsVisible( await this.utils.getByHeading(this.aboutPageLocators.integrityBuiltText))
       await this.utils.verifyIsVisible(await this.utils.getByText(this.aboutPageLocators.trustIsEarnedSubtext));


    }


}