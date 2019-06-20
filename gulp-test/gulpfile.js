// import gulp librery from node_modules we installed via npm
var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

// operate on the object we imported
// task method will have two params: task name, callback function
gulp.task('dupa', ()=>{
    return console.log('dupa test from dupa task')
})

// processing css files
gulp.task('styles', function(){
    // .src fetches the file
    // .pipe shows what will be done with the file
    // .dest saves the file in folder specified
    // we need return as gulp.src is a async function
    return gulp.src('./watched.css')
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('./main/'));
})


gulp.task('watch', function(){
    // accepts file on pc for changes
    // callback function defining what we want it to do
    watch('./watched.css', function(){
        // gulp.start('dupa')
        console.log('dupa test');
        gulp.start('styles')
    })

    watch('./secondw.css', function(){
        console.log('druga dupa')
        gulp.start('dupa')
    })

    
})