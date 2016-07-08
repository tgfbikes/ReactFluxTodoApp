'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect'); // Runs local dev server
var open = require('gulp-open'); // Open a URL in a web browser
var browserify = require('browserify'); // Bundles JS and lets us use CommonJS pattern in browser
var reactify = require('reactify'); // Transpiles JSX into JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); // Concatenates files together to make one file

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './client/src/*.html',
    js: './client/src/**/*.js',
    mainJs: './client/src/main.js',
    images: './client/src/images/*',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      'node_modules/toastr/build/toastr.css',
      './client/src/css/main.css'
    ],
    dist: './dist'
  }
};

// Take take all html files and put them in the dist directory and then reload
gulp.task('html', function () {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist));
});

// Grab all the different css files, concatenate them into one file and put them in bundle.css
gulp.task('css', function () {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'));
});

//
gulp.task('js', function () {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'));
});

gulp.task('images', function () {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'))
    .pipe(connect.reload());
});

// Watch all files on the html path and run the html task when they change
gulp.task('watch', function () {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
  gulp.watch(config.paths.css, ['css']);
});

// Default task
gulp.task('default', ['html', 'css', 'images', 'js', 'watch']);