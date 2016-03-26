var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat-js', function() {
    return gulp.src([
        './namespace.js',
        './services/*.js',
        './components/**/*.js'
    ])
        .pipe(concat('app-built.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
    gulp.watch('./components/**/*.js', ['concat-js']);
});

gulp.task('default', ['concat-js', 'watch']);