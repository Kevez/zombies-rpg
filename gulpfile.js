var gulp = require('gulp');
var concat = require('gulp-concat'),
    webserver = require('gulp-webserver'),
    opn = require('opn'),
    serverConfig = {
        host: 'localhost',
        port: 5555
    };

gulp.task('concat-js', function() {
    return gulp.src([
        './namespace.js',
        './services/*.js',
        './components/**/*.js'
    ])
        .pipe(concat('app-built.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('webserver', function () {
    gulp.src('.')
        .pipe(webserver({
            host: serverConfig.host,
            port: serverConfig.port
        }))
});

gulp.task('open-browser', function () {
    opn('http://' + serverConfig.host + ':' + serverConfig.port);
});

gulp.task('watch', function () {
    gulp.watch('./components/**/*.js', ['concat-js']);
});

gulp.task('default', ['webserver', 'open-browser', 'concat-js', 'watch']);
