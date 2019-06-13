var gulp = require("gulp");
var cleanCSS = require("gulp-clean-css");
var htmlmin = require("gulp-htmlmin");
var tinyPNG = require("gulp-tinypng-compress");
gulp.task("default", defaultTask);

function defaultTask(cd) {
 cd();
}
gulp.task("minify-css", function(cd){
 gulp.src("./src/css/*.css")
 .pipe(cleanCSS({compatibility: 'ie8'}))
 .pipe(gulp.dest("dist/css/"))
 cd();
});
gulp.task("move-js", function(cd){
 gulp.src("./src/js/*.js")
 .pipe(gulp.dest("dist/js/"))
 cd();
});
gulp.task("htmlmin", function(cd){
 gulp.src("./src/*.html")
 .pipe(htmlmin({ collapseWhitespace: true }))
 .pipe(gulp.dest("dist/"))
 cd();
});
gulp.task("fonts", function(cd){
 gulp.src("./src/fonts/**/*")
 .pipe(gulp.dest("dist/fonts/"))
 cd();
});
gulp.task('tinypng', function (cd) {
 gulp.src('./src/img/**/*.{png,jpg,jpeg}')
 .pipe(tinyPNG({key: 'Uz6aJbeoJa5b5FbGLbVt4XqufMA08t7O'}))
 .pipe(gulp.dest('dist/img/'));
 cd();
});
