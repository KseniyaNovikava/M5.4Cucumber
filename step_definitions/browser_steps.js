const assert = require('assert');
const FilterFormPage = require('../support/pages/FilterFormPage.js');

let Steps = function () {

    this.Given(/^I open filter form$/, () => {
        return browser.wait(protractor.ExpectedConditions.presenceOf(FilterFormPage.filtersBtn), 10000).then(() => {
            return FilterFormPage.filtersBtn.click();
        });
    });

    this.When(/^I filter by (\d+) "([^"]*)" status$/, (option, status) => {
        return FilterFormPage.filter(status, option);
    });


    this.Then(/^(\d+) option is selected$/, (option) => {
        return FilterFormPage.checked.get(option).getAttribute('aria-hidden').then((result) => {
            return assert.equal(result, 'false');
        });
    });

};

module.exports = Steps;

