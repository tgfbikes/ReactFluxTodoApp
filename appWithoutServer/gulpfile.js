'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect'); // Runs local dev server
var open = require('gulp-open'); // Open a URL in a web browser

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    dist: './dist'
  }
};

// Set up for dev server
gulp.task('connect', function () {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

// Depends on connect ie run connect first then run open
gulp.task('open', ['connect'], function () {
  gulp.src('dist/index.html')
    .pipe(open({uri: config.devBaseUrl + ':' +config.port + '/'}));
});

// Take take all html files and put them in the dist directory and then reload
gulp.task('html', function () {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

// Watch all files on the html path and run the html task when they change
gulp.task('watch', function () {
  gulp.watch(config.paths.html, ['html'])
});

// Default task
gulp.task('default', ['html', 'open', 'watch']);