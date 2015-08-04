// include egg module
var egg = require('egg');

// http is required to create server
var http = require('http');

// create new egg application
app = egg.create({});

// get application instance
var router = egg.app();

// install global request callbacks
router.after = function (request, response) {
    // global after callback
    console.log("I m global after callback");
}

router.before = function (request, response) {
    // global before callback
    console.log("I m global after before");
}

// config not found page
router.missing = function (request, response) {

    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE 'html'>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Opps! page not found.</title>");
    response.write("</head>");
    response.write("<body>");
    response.write("404 Not Found.!");
    response.write("</body>");
    response.write("</html>");
    response.end();

};

// install routes
router.get('/',function (egg, request) {
    egg.render('index');
}).after(function () {
    console.log("I m homepage after callback");
}).before(function () {
    console.log("I m homepage before callback");
});


router.get('/about', function (egg) {

    egg.render('about');
});

// create server and pass instance of egg created application.
http.createServer(app).listen(88);