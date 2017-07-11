var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');
    clean = require('gulp-clean');

// tarefa para criar a pasta dist com todos arquivos
gulp.task('copy',['clean'], function() {

    return gulp.src('src/**/*') // retorna uma stream dizendo que finalizou a tarefa "assincrona"
        .pipe(gulp.dest('dist'));
});

// tarefa para apagar
gulp.task('clean', function( ) {

    return gulp.src('dist') // retorna uma stream dizendo que finalizou a tarefa "assincrona"
        .pipe(clean());
});


// Tarefa para reduzir imagens
gulp.task('build-img', ['copy'], function() {

    gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

// // Static server
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });
