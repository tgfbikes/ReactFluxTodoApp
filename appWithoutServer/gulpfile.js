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