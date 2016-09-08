# Protractor-Tests-Freeletics

A suite of Protractor tests written for the Freeletics website

## Specifications

- Framework: Jasmine

- Broswers: Chrome

## Current Tests

### Home Page

1. Title should be "Intensive workouts & individual training plans | FREELETICS"

##Custom Matchers
All custom matchers are stored in `custom matchers.js` and loaded to `global.customMatchers` in `config.js`

1. toHaveClass:
    * Usage: `expect(element.toHaveClass(className)`
    * Checks if the Dom element promised by `element` has the CSS class named `className`