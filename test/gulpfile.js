var config = {
  gulp: require('gulp'),
  appDir: 'app',
  testDir: 'test',
  testDest: 'www/build/test'
}

var imports = {
  gulp: require('gulp'),
  runSequence: require('run-sequence'),
  ionicGulpfile: require("" + process.cwd() + '/gulpfile.js')
}

var gulp = imports.gulp;
var runSequence = imports.runSequence;

// just a hook into ionic's build
gulp.task('build-app', function (done) {
  runSequence(
    'build',
    (done)
  );
});

// run jasmine unit tests using karma with PhantomJS2 in single run mode
gulp.task('karma', function (done) {

  var karma = require('karma');
  var karmaOpts = {
    configFile: "" + process.cwd() + '/' + config.testDir + '/' + 'karma.conf.js',
    singleRun: true,
  };

  console.log("KARMA OPTS");
  console.log(JSON.stringify(karmaOpts));

  new karma.Server(karmaOpts, done).start();
});

// build unit tests, run unit tests, remap and report coverage
gulp.task('unit-test', function (done) {
  runSequence(
    ['clean'], // Ionic's clean task, nukes the whole of www/build
    ['html'],
    'karma',
    (done)
  );
});
