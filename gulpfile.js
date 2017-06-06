var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var sass = require('gulp-sass');

gulp.task('styles', function() { 
  return gulp.src('style.scss') 
  .pipe(sass().on('error', sass.logError))
 .pipe(postcss([autoprefixer])) 
 .pipe(gulp.dest('cssDest/'));
});