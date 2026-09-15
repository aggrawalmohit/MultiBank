import { test } from "../lib/BasePage";
import aboutPageData from "../testData/aboutPageData.json"


test('Verify Headings and text content on page @mohit', async ({ homePage,aboutPage }) => {

    await test.step('Navigate to Home Page', async () => {
        await homePage.navigateTo();
      });

    await test.step('Navigate about Page ', async () => {
        await homePage.navigateToAbout()
      });
      
     await aboutPage.verifyHeadingaAndText(aboutPageData.foundedIn2005Subtext,aboutPageData.weBelieveTechnologySubtext,aboutPageData.trustIsEarnedSubtext)

});