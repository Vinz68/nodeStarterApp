/* --------------------------------------------------------------------------------------------------
   nodeStarterApp - NodeJS Starter Application with
   - bunyan as logging framework 
   - express to build a REST Webservice API
   2019-10-11 Vincent van Beek
----------------------------------------------------------------------------------------------------- */
"use strict";
const path = require('path');               // The path module provides utilities for working with file and directory paths.
var express = require("express");           // Express web application framework. http://expressjs.com/
var bodyParser = require("body-parser");    // Parse incoming request bodies in a middleware before your handlers, 
                                            // available under the req.body property. See https://github.com/expressjs/body-parser

var APPNAME = "nodeStarterApp";                    // Name of this app used here and there
var PORT = process.env.PORT || 8088;        // Node will listen on port from environment setting, or when not set to port number...

var app = express();                        // W're using Express

var uuid = require("uuid-v4");              // Module for generating and validation V4 UUIDs. https://www.npmjs.com/package/uuid-v4

var bunyan = require("bunyan");             // Bunyan is a simple and fast JSON logging library. https://github.com/trentm/node-bunyan
var log = bunyan.createLogger({
    name: APPNAME,                          // use the application name
    src: true,                              // show source filename, function and line number
                                            // Note: set to false in the production environment since it is time consuming
    streams: [{
        type: "rotating-file",              // Log files will "roll" over (automatic deletion after configured period)
        path: "./logs/nodeStarterApp.log",  // Path and filename of the log file
        period: "1d",                       // daily rotation, each day a new log file
        count: 60                           // keep 60 copies / files (~1 months)
    }],
    serializers: {                          // usage of default serializers:
        req: bunyan.stdSerializers.req,     // Bunyan's HTTP server request serializer with a suggested set of keys.
        res: bunyan.stdSerializers.res      // Bunyan's HTTP server response serializer with a suggested set of keys.
    }
});


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());                 // find json object (in url) and make available in req.body


// CORS: Allow cross-domain requests (blocked by default)
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // Carry uuid (unique generated ID) and IP (the remote IP address of the request)
    // through out all log lines for a given request so that you can tie them all together.
    req.log = log.child({
        reqId: uuid(),
        reqIp: req.ip
    });
    next();
});


// static link to the 'html' sub directory 
var wwwroot = path.join(__dirname, 'html');
app.use('/',express.static(wwwroot));
log.info('www-root linked to: ' + wwwroot + '.');



// Start web-server and Log that we have started and accept incomming connections on the configured port.
app.listen(PORT, function () {
    log.info(APPNAME + " is ready and listening on port: " + PORT);
    console.log(APPNAME + " is ready and listening on port: " + PORT);
});


// In order to reach the app from other modules
// we need to export the express application
module.exports.getApp = app;

