/**
* App Config
**/

/* Dependencies */
var express = require('express'),
	http = require('http'),
	path = require('path'),
	app = express();

/* Configure App */
app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.bodyParser());
	app.use(express.logger('dev'));
	app.use(express.methodOverride());
	app.use(app.router);
});

/* Routes */
app.get('/', function(req, res){
	res.render('index', {
		title: 'Home'
	});
});

/* Server */
http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});