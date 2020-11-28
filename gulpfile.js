// Require all plugins 
const gulp = require("gulp"), // Include gulp
    gulpconcat = require("gulp-concat"), //Concatenation
    prefix = require("gulp-autoprefixer"), // prefix webkit 
    sass = require("gulp-sass"),// sass 
    pugjs = require("gulp-pug"), // pugjs
    sourcemaps = require("gulp-sourcemaps"), // search inside files
    uglify  = require('gulp-uglify'), // compressed file  javascript\
    notify = require("gulp-notify"), // notification
    compres_zip = require("gulp-zip"); // compress files
const { logError } = require("gulp-sass");

// HTML TASK 
gulp.task("html",() => {
    return gulp.src("stage/html/*.pug")
    .pipe(pugjs({pretty:true}))
    .pipe(gulp.dest("dist/")) 
    .pipe(notify("HTML Done ... ")) 
});

// CSS TASK
gulp.task("css",() => {
    return gulp.src("stage/css/main.scss")
    .pipe(sourcemaps.init())
    .pipe(prefix())
    .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
    .pipe(gulpconcat('all.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("dist/css/"))
    .pipe(notify(" css Done"))

});

// JS TASK 
gulp.task("js",() => {
    return gulp.src("stage/js/*.js")
    // .pipe(uglify())
    .pipe(gulpconcat('store.js'))
    .pipe(gulp.dest("dist/js/")) 
    .pipe(notify("Js Done ... ")) 
});

// Min file finish 
gulp.task('finish', () => {
    return gulp.src("dist/**/*.*")
    .pipe(compres_zip('Store.zip'))
    .pipe(gulp.dest("project/"))
    .pipe(notify("Compeleted files"))
});

// Watch the Files
gulp.task("watch", () => {
    require("./server.js");
    gulp.watch("stage/html/**/*.pug", gulp.series("html"));
    gulp.watch("stage/css/main.scss", gulp.series("css"));
    gulp.watch("stage/js/*.js", gulp.series("js"));
    gulp.watch("dist/**/*.*",gulp.series("finish"));
});

