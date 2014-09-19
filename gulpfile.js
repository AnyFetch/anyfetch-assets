var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var CSS  = './stylesheets/';
var JS   = './scripts/';
var DEST = './dist/';
var BOWER = './bower_components/';
var MOMENT = BOWER + 'moment/min/';

gulp.task('default', ['build']);

gulp.task('build', ['minifyCss', 'concatCss', 'minifyJs', 'concatJs']);

gulp.task('minifyCss', function minifyCss() {
  return gulp.src(CSS + '*.css')
    .pipe(gulp.dest(DEST))
    .pipe(minifyCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(DEST));
});

gulp.task('concatCss', ['minifyCss'], function concatCss() {
  return gulp.src([DEST + 'index.min.css', DEST + 'compact.min.css'])
    .pipe(concat('index-compact.min.css'))
    .pipe(gulp.dest(DEST));
});

gulp.task('minifyJs', function minifyJs() {
  return gulp.src(JS + '*.js')
    .pipe(gulp.dest(DEST))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST));
});

gulp.task('concatJs', ['minifyJs'], function concatCss() {
  return gulp.src([MOMENT + 'moment-with-locales.min.js', DEST + 'index.min.js'])
    .pipe(concat('index-moment.min.js'))
    .pipe(gulp.dest(DEST));
});

gulp.task('watch', function watch() {
  gulp.watch('./**/*', ['build']);
});
