var http = require("http");
var exec = require("child_process").exec;
var path = require('path');

const projectPath = process.argv[2];
const absolutePath = path.join(__dirname, projectPath);

var execute = function(callback) {
    exec(`cd ${absolutePath} && git pull`, function(err, stdout, stderr) {
        callback(err, ` stdout: ${stdout} \n stderr: ${stderr}`);
    });
}

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    execute(function(err, result) {
        if (err) console.error(`exec error: ${err}`);
        console.log(result);
        res.end();
    });

}).listen(1337);
console.log('Git-auto-pull is running');
