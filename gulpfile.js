var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

var DEST = './dist/';

gulp.task('default', ['build']);

gulp.task('build', function build() {
  return gulp.src('./*.css')
    .pipe(gulp.dest(DEST))
    .pipe(minifyCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(DEST));
});

gulp.task('watch', function watch() {
  gulp.watch('./*.css', ['build']);
});
