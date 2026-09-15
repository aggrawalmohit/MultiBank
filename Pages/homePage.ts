import { Page } from "@playwright/test";
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
}
