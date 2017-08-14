
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 200000,
    chromeOnly: true,
    chromeDriver: 'webdriver/chromedriver',
    capabilities: {
        'browserName': process.env.BROWSER
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {

        require: [
            'support/world.js',
            'support/hooks.js',
            'step_definitions/*.js',
        ],
        format: "pretty",
        tags: process.env.TAGS,
    },

    specs: ['features/*.feature'],
};