var gulp = require('gulp');
var copy = require('gulp-copy-rex');

gulp.task('copy', function () {

    var opts = {
        min:true,
        filename:'vHttpService'
    };

    copy('./src/vHttpService.js', './dist', opts);
});

gulp.task('default', function () {
    gulp.run('copy');
});