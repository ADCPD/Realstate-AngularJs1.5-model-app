'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');

/** PATH TO REGROUP RESOURCES */
var bases = {
    app: "app/",
    dist: "app/dist/"
};


/** PATH OF PROJECT RESOURCES */
var paths = {
    vendors: [
        'app/components/*'
    ],
    versionning: [
        'app/components/version/version.js',
        'app/components/version/version-directive.js',
        'app/components/version/interpolate-filter.js',
    ],
    alls: [
        'app/app.js',
        'app/dist/templates.js',
        'app/dist/services.js',
        'app/dist/app.js'
    ],
    files: [
        'app/bower_components/angularUtils-pagination/dirPagination.js',
        'app/components/version/version.js',
        'app/components/version/version-directive.js',
        'app/components/version/interpolate-filter.js',
        'app/view*/*.js',
        'app/*.js',
        'dist/*.js',
        'app/services/*.js'

    ],
    native: [
        'app/bower_components/angularUtils-pagination/dirPagination.js',
        'app/components/version/version.js',
        'app/components/version/version-directive.js',
        'app/components/version/interpolate-filter.js'
    ],
    app: [
        'app/view*/view*.js'
    ],
    directive: [
        'app/directives/directives.js',
        'app/directives/deps/*.js'
    ],
    services: [
        'app/services/*.js'
    ],
    templates: [
        'app/view*/view*.html',
        'app/templates/*.html'
    ],
    css: [
        'app/bower_components/animate.css/animate.min.css',
        'css/*.css'
    ]
};

/*  COMMAND TO CONFIGURE GULP */

gulp.task("default", ['css', 'templates', 'app', 'services', 'versionning'], function () {

    return gulp.src(paths.alls)
        .pipe(concat('regroup-all.js'))
        .pipe(gulp.dest(bases.dist));

});


// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(paths.app, ['default']);
    gulp.watch(paths.services, ['default']);
    gulp.watch(paths.templates, ['default']);
    gulp.watch(paths.css, ['default']);
});


/**
 * CONCAT ALL DIST FILES *JS
 */
gulp.task('regroup', function () {
    return gulp.src(paths.alls)
        .pipe(concat('regroup-all.js'))
        .pipe(gulp.dest(bases.dist));
});

/**
 * SERVICES GENERATOR
 *
 * CONCAT ALL SERVICES FILES
 * command :  Gulp services
 */
gulp.task('services', function () {
    return gulp
        .src(paths.services)
        .pipe(concat('services.js'))
        .pipe(gulp.dest(bases.dist));
});

/**
 * JS CONCAT RESSOURCE GENERATOR
 * Command : "gulp app"
 * Description : Creer le fichier ./dist/app.js
 * */
gulp.task("app", function () {
    return gulp
        .src(paths.app)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(bases.dist));

});

/**
 * TEMPLATE GENERATOR
 *
 *  Command :  "gulp css"
 *  Description : Creer  le fichier ./dist/style.css"
 *
 */
gulp.task('css', function () {

    return gulp
        .src(paths.css)
        .pipe(concat('style.css'))
        .pipe(gulp.dest(bases.dist));

});


/**
 * TEMPLATES GENERATOR
 *
 *  Command :  "gulp templates"
 *  Description : Creer  le fichier ./dist/templates.js"
 *
 */
gulp.task(
    'templates', function () {
        return gulp
            .src(paths.templates)
            .pipe(templateCache('templates.js', {
                module: "realstateApp"
            }))
            .pipe(gulp.dest(bases.dist));
    }
);

gulp.task('versionning', function () {

    return gulp
        .src(paths.versionning)
        .pipe(concat('version-loader.js'))
        .pipe(gulp.dest(bases.dist));

});







