const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const htmlMin = require('gulp-htmlmin');
const inject = require('gulp-inject');
const stripHtmlComments = require('gulp-strip-comments');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('default', [
    'build-html',
    'build-css',
    'build-js',
]);

gulp.task('build-html', _ => {

    return gulp.src([ '!src/html/component/*', 'src/html/**/*.html' ])
        .pipe(inject(gulp.src('src/html/component/**/*.html'), {
            starttag: '<!-- inject:{{path}} -->',
            relative: true,
            transform: function (filePath, file) {
              return file.contents.toString('utf8')
            },
        }))
        .pipe(stripHtmlComments())
        .pipe(htmlMin({ 'collapseWhitespace': true, minifyCSS: true, minifyJS: true }))
        .pipe(gulp.dest('public'));

});

gulp.task('build-css', _ => {

    return gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss({ compatibility: 'ie7' }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('public/css'));

});

gulp.task('build-js', _ => {

    return gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env'],
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('public/js'));

});

gulp.task('watch', _ => {

    gulp.watch('src/scss/**/*.scss', ['build-css']);
    gulp.watch('src/html/**/*.html', ['build-html']);
    gulp.watch('src/js/**/*.js', ['build-js']);

});
