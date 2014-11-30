// Module dependencies.
var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
var request = require('request');
var firstrun = require('./routes/firstrun');

var app = express()
  .set('port', process.env.PORT || 7000)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'jade')
  .use(express.favicon(path.join(__dirname, 'public/images/favicon.ico')))
  .use(express.logger('dev'))
  .use(express.json())
  .use(express.urlencoded())
  .use(express.methodOverride())

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.locals({
  s3url: "https://s3.amazonaws.com/technicalmachine-assets/fre+assets/"
  , forumUrl: "http://forums.tessel.io/category/"
  });

app.locals.ucfirst = function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Initialize all of the routes of the app
app.get('/', firstrun.index);
app.get('/install', firstrun.install);
app.get('/blinky', firstrun.blinky);
app.get('/usage', firstrun.usage);
app.get('/modules', firstrun.modules);
app.get('/wifi', firstrun.wifi);
app.get('/tweet', firstrun.tweet);
app.get('/finished', firstrun.finished);

app.get('/ja', firstrun.ja_index);
app.get('/ja/install', firstrun.ja_install);
app.get('/ja/blinky', firstrun.ja_blinky);
app.get('/ja/usage', firstrun.ja_usage);
app.get('/ja/modules', firstrun.ja_modules);
app.get('/ja/wifi', firstrun.ja_wifi);
app.get('/ja/tweet', firstrun.ja_tweet);
app.get('/ja/finished', firstrun.ja_finished);

// get the data from github
var githubCode = {
  accelerometer: {url: 'https://raw.githubusercontent.com/tessel/accel-mma84/master/examples/accelerometer.js', github: 'https://github.com/tessel/accel-mma84', code: '', updated: null, replace: 'accel-mma84'},
  ambient: {url: 'https://raw.githubusercontent.com/tessel/ambient-attx4/master/examples/ambient.js', github: 'https://github.com/tessel/ambient-attx4', code: '', updated: null, replace: 'ambient-attx4'},
  audio: {url: 'https://raw.githubusercontent.com/tessel/audio-vs1053b/master/examples/audio.js', github: 'https://github.com/tessel/audio-vs1053b', code: '', updated: null, replace: 'audio-vs1053b'},
  ble: {url: 'https://raw.githubusercontent.com/tessel/ble-ble113a/master/examples/ble.js', github: 'https://github.com/tessel/ble-ble113a', code: '', updated: null, replace: 'ble-ble113a'},
  camera: {url: 'https://raw.githubusercontent.com/tessel/camera-vc0706/master/examples/camera.js', github: 'https://github.com/tessel/camera-vc0706', code: '', updated: null, replace: 'camera-vc0706'},
  climate: {url: 'https://raw.githubusercontent.com/tessel/climate-si7005/master/examples/climate.js', github: 'https://github.com/tessel/climate-si7005', code: '', updated: null, replace: 'climate-si7005'},
  gprs: {url: 'https://raw.githubusercontent.com/tessel/gprs-sim900/master/examples/gprs.js', github: 'https://github.com/tessel/gprs-sim900', code: '', updated: null, replace: 'gprs-sim900'},
  gps: {url: 'https://raw.githubusercontent.com/tessel/gps-a2235h/master/examples/gps.js', github: 'https://github.com/tessel/gps-a2235h', code: '', updated: null, replace: 'gps-a2235h'},
  ir: {url: 'https://raw.githubusercontent.com/tessel/ir-attx4/master/examples/infrared.js', github: 'https://github.com/tessel/ir-attx4', code: '', updated: null, replace: 'ir-attx4'},
  microsd: {url: 'https://raw.githubusercontent.com/tessel/sdcard/master/examples/microsd.js', github: 'https://github.com/tessel/sdcard', code: '', updated: null, replace: 'sdcard'},
  nrf: {url: 'https://raw.githubusercontent.com/tessel/node-nrf/jh-tessel/examples/nrf24.js', github: 'https://github.com/tessel/rf-nrf24', code: '', updated: null, replace: 'rf-nrf24'},
  relay: {url: 'https://raw.githubusercontent.com/tessel/relay-mono/master/examples/relay.js', github: 'https://github.com/tessel/relay-mono', code: '', updated: null, replace: 'relay-mono'},
  rfid: {url: 'https://raw.githubusercontent.com/tessel/rfid-pn532/master/examples/rfid.js', github: 'https://github.com/tessel/rfid-pn532', code: '', updated: null, replace: 'rfid-pn532'},
  servo: {url: 'https://raw.githubusercontent.com/tessel/servo-pca9685/master/examples/servo.js', github: 'https://github.com/tessel/servo-pca9685', code: '', updated: null, replace: 'servo-pca9685'}
};

function modulePage(req, res) {
  var module = req.params.slug;
  var prefix = '';
  if (req.params.lang == 'ja') {
    prefix = 'ja-';
  }

  // update on anything older than 1 hour
  var d = new Date((new Date) * 1 - 1000 * 3600 * 1);
  // if any urls have blank code, request it
  if ((githubCode[module].code == '' &&  githubCode[module].url) || (githubCode[module].updated < d.valueOf())) {
    request.get(githubCode[module].url, function (err, data) {
      if (err) {
        return console.error('could not get code for', module, githubCode[module].code, err);
      }
      var code = data.body.replace(/require\(("|')\.\.\/("|')\)/, 'require(\'' + githubCode[module].replace + '\')');
      code = code.replace(' // Replace \'../\' with \'' + githubCode[module].replace + '\' in your own code', '');
      githubCode[module].code = code;
      githubCode[module].updated = Date.now();
      res.render(prefix + 'FRE-module-individual', {title: module, displayModule: module, page: 'modules/' + module, code: githubCode[module]});
    });
  } else {
    res.render(prefix + 'FRE-module-individual', {title: module, displayModule: module, page: 'modules/' + module, code: githubCode[module]});
  }
}

app.get('/modules/:slug', modulePage);
app.get('/:lang/modules/:slug', modulePage);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
  process.on('uncaughtException', function (err) {
    console.log(err);
	});
});
