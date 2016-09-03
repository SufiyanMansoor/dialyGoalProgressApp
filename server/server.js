/**
 * Created by Sufiyan on 9/3/2016.
 */
var restify     =   require('restify');
var mongojs     =   require('mongojs');
var morgan  	=   require('morgan');
var db          =   mongojs('bucketlistapp', ['appUsers','bucketLists']);
var app      =   restify.createServer();

app.use(restify.acceptParser(server.acceptable));
app.use(restify.queryParser());
app.use(restify.bodyParser());
app.use(morgan('dev')); // LOGGER

// CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

server.listen(process.env.PORT || 3000, function () {
    console.log("Server started @ ",process.env.PORT || 3000);
});