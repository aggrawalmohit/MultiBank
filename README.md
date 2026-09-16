==========Project Design=========

Tech Stack - PlayWright + TypeScript


================== Folder Structure ===============

 # lib
BasePage.ts          # Custom Playwright fixtures (page object injection)
utils.ts              # Reusable utility/helper methods used across page objects

 # Pages/
homePage.ts           # Home page actions & verifications
aboutPage.ts          # About page actions & verifications

# locators/
homePageLocators.ts   # Element locators/selectors for the Home page
aboutPageLocators.ts  # Element locators/selectors for the About page

# testData/
homePageData.json     # Data-driven test inputs for Home page tests
aboutPageData.json    # Data-driven test inputs for About page tests

# configuration/
env.ts                 # Environment/base URL configuration

# tests/
homePage.spec.ts      # Home page test specs
aboutPage.spec.ts     # About page test specs

# README.md

============= Design Pattern ============

Hybrid FrameWork with Page Object Model (POM) 

- Locators layer – Holds only element selectors (XPath/text), kept separate from logic so UI changes only require updates in one place.

- Page Object layer (/Pages) – Contains page-specific actions and business-level verification methods (e.g. verifyTradingCardsCount, verifyHeadingaAndText).

- Utils layer (lib/utils.ts) – Common utility class (Utils) for frequently used Playwright actions (navigation, visibility checks, text verification, redirection checks, broken-link scanning, etc.) 

- Fixtures layer (lib/BasePage.ts) – Extends Playwright's base test object to auto-inject homePage and aboutPage instances into every test, removing the need for manual instantiation in spec files.

- Test Data layer (/testData) –  Expected values (nav links, viewport sizes, banner text, etc.) into JSON files, enabling data-driven testing without hardcoding values.

- Spec layer (/tests) – Contains the actual test cases, clear, readable execution reporting.


======== How to Run ===========

Prerequisites
Node.js 
npm 

# Clone the repository
git clone
cd 

# Install Playwright browsers
npx playwright install

======= Environment Configuration ==========

The base URL is controlled via the TEST_ENV environment variable, configured in configuration/env.ts:

====== Content =======

# Home Page (homePage.spec.ts)

1	Top navigation links visibility	- Verifies all nav bar links are visible
2	Nav link navigation	- Verifies each link (internal/external) redirects to the correct destination URL
3	Responsive navigation	- Re-validates nav link navigation across multiple desktop viewport sizes
4	Spot trading section- Verifies 3 trading pair cards render, each containing 15 trading pairs
5	Trading pair categories	- Verifies "Top Gainers", "Top Losers", and "Trending Now" sections are visible
6	Trading pair data fields- Verifies each trading pair displays a name/price and percentage change
7	Marketing banner position - Verifies the marketing banner renders in the expected page region with correct text
8	App/Play Store link	- Verifies the Google Play download link redirects correctly (in a new tab)
9	Broken link - Scans all anchor tags on the page and asserts none return an error status (soft assertions)

# About Page (aboutPage.spec.ts)

1. Headings & content verification >  About page and verifies 3 headings and their subtext are visible


# Utils class (lib/utils.ts)

Contains helper funtions 
1. navigateTo()
2. getLinkByName() / getByHeading() / getByText()
3. clickAndVerifyRedirectionURL() 
4. verifyPageURL() 
5. verifyIsVisible() / verifyTextContent() 
6. verifyLocatorCount() / getLocatorCount() 
7. verifyBrokenLinks() 


# BasePage fixtures (lib/BasePage.ts)

Extends test object with  fixtures (homePage, aboutPage), so each test receives ready-to-use page object instances 

