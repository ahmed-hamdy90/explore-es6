'use strict';

var gulp       = require('gulp');
var babelify   = require('babelify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

// Create Gulp task named build to Set browserify configuration
// for transform ES6 syntax to ES5 syntax
gulp.task('build', function () {
	browserify({
		entries: './client/app/main.js' ,
		debug: true
	})
	// tranform using Babel
	.transform(babelify)
	// collect the files and thier dependencies
	// into one single javascript file
	.bundle()
	// define single javascript file name
	// which use to write into the collection of the files and thies dependecies
	.pipe(source('app.bundle.js'))
	// destenstion folder will use to put a single javascript file into it
	// even if folder does not exists, Glup will create it
	.pipe(gulp.dest('./dist'));
});

// create Gulp task named copy
// which copy index html file under client folder
// into dist folder
gulp.task('copy', function () {
	gulp.src('client/index.html')
	    .pipe(gulp.dest('./dist'));
});

// create Gulp task named watch
// to watch any changed into any javascript files
// and html files under client Folder
gulp.task('watch', function () {
	// Run build task every any change on javascript files
	gulp.watch('client/**/*.js', ['build']);
	// Run copy task every any change on html files
	gulp.watch('client/*.html', ['copy']);
});

// create Gulp task named default
// it`s dependencies is all three Gulp tasks
// When we Run default task will Run all Glup tasks
gulp.task('default', ['copy', 'build', 'watch']);
