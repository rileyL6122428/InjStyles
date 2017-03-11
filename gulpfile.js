var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('scss', ['compile-sass']);
gulp.task('wscss', ['watch-compile-sass']);

gulp.task('compile-scss', function () {
  return gulp.src('./styles/site.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/main/webapp'));
});

gulp.task('watch-compile-scss',['compile-scss'], function () {
  gulp.watch('./styles/**/*.scss', ['compile-scss']);
});
