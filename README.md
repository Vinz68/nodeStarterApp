<img src="https://raw.githubusercontent.com/Vinz68/logTest/master/images/logTestImg.png" width="250"></img> 
## nodeStarterApp 
is a minimal NodeJS app which will serve as a quick-start (template) for my next NodeJS projects. It includes a logging framework (bunyan) and express for requests routing and middlewares. 
There are some essential middlewares for web APIs already setup, like express, body-parser and CORS.

## Purpose 
The goal of this project is to build a minimal NodeJS application using best practises and available (free & frequently used) packages that meets the most often needed requirements.

## Requirements
Best practises requirements, we want:
- **open source**,
  - the choosen modules/tools/solutions need to be free (as in no costs) and have support of an active community.
- **HTML5, css3**,
  - the app serves as a webserver with a near-empty HTML-5 page, based on the HTML5 Boilerplate (https://html5boilerplate.com/)
- **logging**, 
  - with "context" like module/function, date/time stamp, log levels (debug info,warn, error as minimum)
  - support of configurable output (flat file, roling file, syslog, ..)
  - for now we will implement/use a rolling file output (so automatic cleanup of log files)
  - logging output suitable for filtering (and/or script processing for finding issues)
- **REST Webserivice API**,
  - we want to implement an API, so our webserver can give a response on a (web) request
  - we will return our response in JSON format
- **use build tools** 
  - unit testing (mocha, should, sinon)  
  - integration testing (supertest)
   - for automatic node restarts when source files are changes
  - compress/uglify source files to distribution folder 
- **security**

- https
  - mechanism to start the app after boot (we will use [PM2](http://pm2.keymetrics.io/)) 
  - targets Unix/Linux (will be tested on Ubuntu and Raspbian PI )


Not all of it will be implemented in the code; some aspects might need (free) third party tools and/or configuration settings.

| Packages        | Requirement           | install        |
|:---------------:| --------------------- | --------------:|
| gulp | Build-Tool, install it so it can run from command line |  |
|  | It can copy and uglify/compress source files | sudo npm install gulp -g ||  | to the destination/production folder |  |
|  | |  |
| gulp-nodemon | Build-Tool, detect source file changes | npm install gulp-nodemon --save-dev |
|  | |  |
| [bunyan](https://github.com/trentm/node-bunyan) | Logging | npm install bunyan --save |
|  | |  |
| express | REST API | npm install express --save |
|  | |  |
| body-parser | make json objects available in req.body | npm install body-parser --save |
|  | |  |
| mocha | unit testing framework. gulp-mocha is the gulp plugin of mocha, should = assertion framework, sinon = mocking framework | npm install gulp-mocha should sinon --save-dev |
|  | |  |
| supertest | intergration tests with supertest | npm install supertest gulp-env --save-dev |
|  | |  |



## Installation notes
1. fork this package to your github account


2. clone it from github to your folder (or fork the entire repository into your own repository)
``` bash
git clone https://github.com/Vinz68/logTest.git
```


3. install node and npm when needed.   ( find [here](https://github.com/nodesource/distributions) how to install node)
   
   test first if you have node already installed. Let it show its version number

```
node --version
```



4. install its dependencies 
```
npm install
```
NOTE: Use npm install --only=production to install only dependencies, and not devDependencies,regardless of the value of the NODE_ENV environment variable.


5. run the program
```
gulp
```
or
```
node nodeStarterApp.js
```
or use PM2 (auto start / auto restart)
```
pm2 start nodeStarterApp.js
```

6. open a web browser and test with:
```
http://[your ip or domainname]:8088
```


7. execute the unit- and integration tests
(note you need to install gulp, see above in the table)
```
gulp test
```


8. show log output from the logfile 
(note you need to install bunyan, see above in the table)
```
cd logs
bunyan logTest.log 
```



## Contribute

Report a bug or a suggestion by posting an issue on the git repository (https://github.com/Vinz68/nodeStarterApp/issues).

![Alt text](images/logTestImg.png?raw=true "logTest")


 
## TODO List:
 - [ ] include code quality check (JSLint or something else..)     
 - [ ] add client authentication using OAUTH2 
 - [ ] use https



