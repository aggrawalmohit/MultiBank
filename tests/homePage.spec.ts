import { test } from "../lib/BasePage";
import homePageData from "../testData/homePageData.json"


/**
 * This test verifies all the nav Bar iteams if they are visible
*/
test('Verify all the Top Navigation links are Visible', async ({ homePage }) => {

  await test.step('Navigate to Home Page', async () => {
    await homePage.navigateTo();
  });

  for (const link of homePageData.navLinks) {
    await test.step(`"${link.name}" link`, async () => {
      await homePage.verifyTopNavigationLinks(link.name)
    })
  }

});

/**
 * This test clicks and verifies all the nav Bar links
 * if they are navigating to correct destination URL
*/
test('Verify all nav links navigate to correct destination', async ({ homePage }) => {
  await test.step('Navigate to Home Page', async () => {
    await homePage.navigateTo();
  });

  for (const link of homePageData.navLinks) {
    await test.step(`"${link.name}" navigates correctly`, async () => {
      await homePage.verifyNavLinkNavigation(link.name, link.external, link.path);
    })
  }
});

/**
 * This test clicks and verifies all the nav Bar links
 * if they are navigating to correct destination URL with different viewport sizes
 * 
*/
test('Verify Navigation behaves correctly at standard desktop viewport sizes', async ({ page, homePage }) => {

  for (const viewport of homePageData.desktop) {
    await test.step(`"${viewport.name}" with resolution ${viewport.height, viewport.width}`, async () => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height })

      await test.step('Navigate to Home Page', async () => {
        await homePage.navigateTo();
      });

      for (const link of homePageData.navLinks) {
        await test.step(`"${link.name}" navigates correctly`, async () => {
          await homePage.verifyNavLinkNavigation(link.name, link.external, link.path);
        })
      }


    }
    )
  }

});

/**
 * This test verifies all the 3 trading pair cards are visible on home page
 * this test also checks if 15 trading pairs are available inside those cards
 * 
*/
test('Verify Spot trading section renders and displays trading pairs', async ({ homePage }) => {
  await test.step('Navigate to Home Page', async () => {
    await homePage.navigateTo();
  });
  await test.step("verify trading cards count 3", async () => {
    await homePage.verifyTradingCardsCount(3);
  })

  await test.step("verify trading pairs count should be 15", async () => {
    await homePage.verifyTradingPairsCount(15);
  })

});

/**
 * This test verifies all the 3 trading pair cards are visible home page
 * this test also checks if 3 Categories are available inside those cards
 * 
*/
test('Verify Trading pairs are correctly grouped into categories', async ({ homePage }) => {
  await test.step('Navigate to Home Page', async () => {
    await homePage.navigateTo();
  });

  await test.step("verify 3 categories are visible", async () => {
    await homePage.verifyALLTradingPairsGroups()
  })

});

/**
 * This test verifies all the 3 trading pair cards are visible home page
 * this test also checks if the trading pairs contains the data 
 * 
*/
test('Trading pair entries contain the expected data fields', async ({ homePage }) => {
  await test.step('Navigate to Home Page', async () => {
    await homePage.navigateTo();
  });

  await test.step("verify Trading Pair Data", async () => {
    await homePage.verifyTradingPairDataIsVisible()
  })

});

/**
 * 
 * This test verifies that the marketing banner is available at the a particular position
 * we are using a section and checking if marketing banner is available just below that
 * 
*/
test('Verify Marketing banners render in the expected page region', async ({ homePage }) => {
  await test.step('Navigate to Home Page', async () => {
    await homePage.navigateTo();
  });

  await test.step("verify Trading Pair Data", async () => {
    await homePage.verifyMarketingBannerRendersAtCorrectPosition(homePageData.MarketingBannerText)
  })

});

/**
 * 
 * This test verifies that the android play store link is redirecting correctly
 * 
*/
test('Verify App Store and Google Play download links resolve correctly', async ({ homePage }) => {
  await test.step('Navigate to Home Page', async () => {
    await homePage.navigateTo();
  });

  await test.step("verify Trading Pair Data", async () => {
    await homePage.verifyAppStoreLinkNavigation(homePageData.appStoreLink)
  })

});

/**
 * This test checks if all the links on homepage are working
 * 
*/
test('Verify no broken links on home page', async ({ homePage }) => {
  await test.step('Navigate to Home Page', async () => {
    await homePage.navigateTo();
  });
  
  await test.step('Analyse broken Links', async () => {
    await homePage.verifyHomePageBrokenLinks();
  });

});


