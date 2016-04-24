"use strict";
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
gulp.task('default', function () {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 8000
        },
        ignore: ['./node_modules/**']
    })
        .on('restart', function () { return console.log("Restarting"); });
});
//# sourceMappingURL=gulpfile.js.map