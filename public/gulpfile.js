var gulp = require('gulp')	 
  , stylus = require('gulp-stylus');

gulp.task('stylus',function(){
 	 gulp.src('./stylesheets/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./stylesheets/'));

});


gulp.task('watch', function(){
	 gulp.watch(['css/style.styl'], ['stylus']);
})


gulp.task('default',['stylus']);