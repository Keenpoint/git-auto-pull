var http = require("http");
var exec = require("child_process").exec;
var path = require('path');

var execute = function(callback) {
    exec(`cd ${path.join(__dirname, process.argv[2])} && git pull`, function(e, stdout, stderr) {
        console.log(stdout);
        callback(stdout + "\n");
    });
}

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    execute(function(result) {
        res.end(result);
    });

}).listen(1337);
console.log('Git-auto-pull is running');
