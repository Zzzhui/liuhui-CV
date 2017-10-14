var gulp = require('gulp');
var uglify = require('gulp-uglify');  //压缩js
var csso = require('gulp-csso');  //压缩css
var pump = require('pump');

gulp.task('compjs', function (cb) {
  pump([
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('compcss', function () {
    return gulp.src('src/css/*.css')
        .pipe(csso())
        .pipe(gulp.dest('dist'));
});

gulp.task('vendor', function() {
    gulp.src(['./bower_components/fullpage.js/jquery.fullpage.min.js',
            './bower_components/fullpage.js/jquery.fullpage.css','./bower_components/jquery/dist/jquery.min.js','./bower_components/fullpage.js/vendors/scrolloverflow.min.js'])
        .pipe(gulp.dest('./vendor'));
});

gulp.task('default', function() {
    gulp.run('compjs');
    gulp.run('compcss');
    gulp.run('vendor');

    // gulp.watch('./scss/**', function(event) {
    //     gulp.run('compass');
    // });
});
