var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');

gulp.task('js', function() {
  return gulp.src(
    ['src/index.js', 'src/store.jsx', 'src/actions/*.js', 'src/components/*.jsx', 'src/containers/*.jsx', 'src/reducers/*.jsx']
  )
    .pipe(concat('app.min.js'))
    .pipe(babel({presets: ['env']}))
    .pipe(uglify().on('error', function(e){
      console.log(e);
    }))
    .pipe(gulp.dest('dist/js/'))
});

gulp.task('css', function() {
  return gulp.src(['style/style.css', 'src/sass/style.scss'])
  .pipe(sass())
  .pipe(concat('main.min.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('dist/css/'))
})
