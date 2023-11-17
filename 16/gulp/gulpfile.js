const {series, parallel, src, dest} = require('gulp');
const concat = require('gulp-concat');
function defaultTask(cb) {
    // place code for your default task here
    console.log('Hello world');
    cb();
  }
  function jsTask(cb) {
    // place code for your default task here
    console.log('js');
    cb();
  }
  function css(cb) {
    // place code for your default task here
    console.log('css');
    cb();
  }

  function move (){
    // return src('app/index.js').pipe(dest('finish/'));
    // return src('app/*.js').pipe(dest('finish/'));
    return src(['app/**/*.js', 'app/*.html']).pipe(dest('finish/'));


  }
  function jsplus(){
    return src('app/**/*.js').pipe(concat('all.js')).pipe(dest('finish/work/'));
  }
exports.default = defaultTask
exports.dev = series(jsTask, css);
exports.prod = parallel(jsTask, css);
exports.move = move;
exports.jsplus = jsplus;