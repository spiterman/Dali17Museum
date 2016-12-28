var gulp = require('gulp');
// var rimraf = require('rimraf');
var sequence = require('run-sequence');
// var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

var scripts = [
  './js/jquery.min.js',
  './js/jquery.easing.1.3.js',
  './js/bootstrap.min.js',
  './js/jquery.waypoints.min.js',
  './js/jquery.magnific-popup.min.js',
  './js/owl.carousel.min.js',
  './js/jquery.countTo.js',
  './js/main.js'
];

var styles = [
  './css/animate.css',
  './css/icomoon.css',
  './css/simple-line-icons.css',
  './css/magnific-popup.css',
  './css/owl.carousel.min.css',
  './css/owl.theme.default.min.css',
  './css/salvattore.css',
  './css/style.css'
];

gulp.task('scripts', function(){
  return gulp.src(scripts)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('styles', function(){
  return gulp.src(styles)
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./build'));
});

gulp.task('build', function(cb){
  sequence('scripts', ['styles'], cb);
});

