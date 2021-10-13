export default function fetchCategory() {
    return new Promise((resolve, reject) => {
        var http = require('http');
        var options = {
            hostname: '127.0.0.1',
            port: 8080,
            method: 'GET'
        };
        var req = http.request(options, function (res) {
            res.setEncoding('utf8');
            res.on('data', function (data) {
                resolve(JSON.parse(data));
            });
        });
        req.on('error', function (e) {
            reject(e)
        });
        req.end();
    })
}