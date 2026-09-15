import { test } from "../lib/BasePage";

test('Home Page', async ({ homePage }) => {
    await homePage.navigateTo();
});



