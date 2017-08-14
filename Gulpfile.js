const gulp = require('gulp'),
    util = require('gulp-util'),
    gulpProtractorAngular = require('gulp-angular-protractor');

gulp.task('default', (callback) => {
    util.env.browser ? process.env.BROWSER = util.env.browser : process.env.BROWSER = 'chrome';
    util.env.tag ? process.env.TAGS = util.env.tag : process.env.TAGS = [];

    gulp
        .src(['features/*'])
        .pipe(gulpProtractorAngular({
            'configFile': 'conf.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function (e) {
            console.log(e);
        });
});
