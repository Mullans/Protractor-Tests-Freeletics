# Protractor-Tests-Freeletics

A suite of Protractor tests written for the Freeletics website

## Specifications

- Framework: Jasmine

- Broswers: Chrome

## Current Tests

### Home Page

1. Title should be "Intensive workouts & individual training plans | FREELETICS"

2. The top-most login button should navigate to the login page.

3. The main page should only have 2 displayed logos

### Shop Page - Reflective Mesh Sleeveless

1. Clicking on each description header should set them to 'is-active'

## Custom Matchers
All custom matchers are stored in `custom matchers.js` and loaded to `global.customMatchers` in the `onPrepare` section of `config.js`

1. toHaveClass:
    * Usage: `expect(element.toHaveClass(className)`
    * Checks if the Dom element promised by `element` has the CSS class named `className`
    
## Custom Locators
All custom locators are stored in `customLocators.js` and loaded globally in the `onPrepare` section of `config.js`

1. link:
    * Usage `by.link(query)`
    * Returns a list of all of the `a` elements on the page with and `href` attribute equal to `query`