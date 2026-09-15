import { test } from "../lib/BasePage";
import homePageData from "../testData/homePageData.json"

test('Verify all the Top Navigation links are Visible', async ({ homePage }) => {

  test.step('Navigate to Home Page', async () => {
    await homePage.navigateTo();
  });

  for (const link of homePageData.navLinks) {
    await test.step(`"${link.name}" link`, async () => {
      await homePage.verifyTopNavigationLinks(link.name)
    })
  }

});


test('Verify all nav links navigate to correct destination', async ({ homePage }) => {
  test.step('Navigate to Home Page', async () => {
    await homePage.navigateTo();
  });

  for (const link of homePageData.navLinks) {
    await test.step(`"${link.name}" navigates correctly`, async () => {
      await homePage.verifyNavLinkNavigation(link.name, link.external, link.path);
    })
  }
});



