var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var svgmin = require("gulp-svgmin");
var debug = require('gulp-debug');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');

var LESS  = './stylesheets/style.less';
var JS   = './scripts/';
var IMG   = './images/';
var DEST = './dist/';
var BOWER = './bower_components/';
var MOMENT = BOWER + 'moment/min/';

gulp.task('less.normal', function() {
  return gulp.src(LESS)
    .pipe(less())
    .pipe(rename({
      basename: 'index',
      extname: '.css'
    }))
    .pipe(gulp.dest(DEST));
});

gulp.task('less.min', function() {
  return gulp.src(LESS)
    .pipe(less())
    .pipe(minifyCss())
    .pipe(rename({
      basename: 'index',
      extname: '.min.css'
    }))
    .pipe(gulp.dest(DEST));
});

gulp.task('less', ['less.normal', 'less.min']);

gulp.task('lint', function() {
  return gulp.src(JS + '*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
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

gulp.task('svgProviders', function svgProviders() {
  return gulp.src(IMG + 'providers/*.svg')
    .pipe(svgmin([
      { convertPathData: false },
    ]))
    .pipe(gulp.dest(DEST + "images/providers/"));
});

gulp.task('img', ['svgProviders']);

gulp.task('watch', function watch() {
  gulp.watch('./**/*', ['build']);
});

gulp.task('default', ['build']);

gulp.task('build', ['less', 'lint', 'minifyJs', 'concatJs', 'img']);
