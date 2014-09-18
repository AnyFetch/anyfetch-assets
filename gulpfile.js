var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var DEST = './dist/';

gulp.task('default', ['build']);

gulp.task('build', ['concat']);

gulp.task('minify', function build() {
  return gulp.src('./*.css')
    .pipe(gulp.dest(DEST))
    .pipe(minifyCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(DEST));
});

gulp.task('concat', ['minify'], function build() {
  return gulp.src([DEST + 'index.min.css', DEST + 'compact.min.css'])
    .pipe(concat('index-compact.min.css'))
    .pipe(gulp.dest(DEST));
});


gulp.task('watch', function watch() {
  gulp.watch('./*.css', ['build']);
});
