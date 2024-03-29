const http = require('http'),
    fs = require('fs');

fs.readFile('./sensors.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8080);
});
