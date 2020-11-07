const server = require("static-server");

var staticserver = new server({
    rootPath:'./dist/',
    port:8000
});
    
staticserver.start(function () {
    console.log('Server listening to', staticserver.port);
});