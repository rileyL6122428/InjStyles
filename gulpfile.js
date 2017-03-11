var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('scss', ['compile-scss']);
gulp.task('wscss', ['watch-compile-scss']);

gulp.task('compile-scss', function () {
  return gulp.src('./styles/example/newspaper-stylesheet.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles/target'));
});

gulp.task('watch-compile-scss',['compile-scss'], function () {
  gulp.watch('./styles/**/*.scss', ['compile-scss']);
});
