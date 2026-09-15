import { test } from "../lib/BasePage";
import homePageData from "../testData/homePageData.json"

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

test('Verify Trading pairs are correctly grouped into categories', async ({ homePage }) => {
  await test.step('Navigate to Home Page', async () => {
    await homePage.navigateTo();
  });

  await test.step("verify 3 categories are visible", async () => {
    await homePage.verifyALLTradingPairsGroups()
  })

});

test('Trading pair entries contain the expected data fields', async ({ homePage }) => {
  await test.step('Navigate to Home Page', async () => {
    await homePage.navigateTo();
  });

  await test.step("verify Trading Pair Data", async () => {
    await homePage.verifyTradingPairDataIsVisible()
  })

});

test('Verify Marketing banners render in the expected page region', async ({ homePage }) => {
  await test.step('Navigate to Home Page', async () => {
    await homePage.navigateTo();
  });

  await test.step("verify Trading Pair Data", async () => {
    await homePage.verifyMarketingBannerRendersAtCorrectPosition(homePageData.MarketingBannerText)
  })

});


test('Verify App Store and Google Play download links resolve correctly', async ({ homePage }) => {
  await test.step('Navigate to Home Page', async () => {
    await homePage.navigateTo();
  });

  await test.step("verify Trading Pair Data", async () => {
    await homePage.verifyAppStoreLinkNavigation(homePageData.appStoreLink)
  })

});


