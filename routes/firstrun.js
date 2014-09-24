// Redirects from '/' page
exports.index = function (req, res) {
	res.redirect('/install');
};

// Installation page
exports.install = function (req, res) {
	res.render('FRE-install', {title: 'Tessel Installation', page: 'install'});
};

// Plug in Tessel, push Blinky
exports.blinky = function (req, res) {
	res.render('FRE-blinky', {title: 'Running Your First Script', page: 'blinky'});
};

// some usage examples
exports.usage = function (req, res) {
	res.render('FRE-usage', {title: 'Tessel CLI usage', page:"usage"});
};

//try a module page
exports.modules = function (req, res) {
	res.render('FRE-module', {title: 'Modules 101', page: 'modules'});
};

exports.wifi = function (req, res) {
	res.render('FRE-wifi.jade', {title: 'Connecting to Wifi', page: 'wifi'});
};

exports.tweet = function (req, res) {
	res.render('FRE-tweet.jade', {title: 'Tessel\'s First Tweet', page: 'tweet'});
};

exports.finished = function (req, res) {
	res.render('FRE-finished.jade', {title: 'Finished!', page: 'finished'});
};
