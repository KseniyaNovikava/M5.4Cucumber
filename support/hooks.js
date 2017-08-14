module.exports = function () {
    this.setDefaultTimeout(50000);

    this.Before(function () {
        return browser.get('https://staging.telescope.epam.com/health/board');
    });

    this.After(function () {
        return browser.executeScript('window.localStorage.clear();')
            .then(function () {
                browser.manage().deleteAllCookies();
            });
    });

};
