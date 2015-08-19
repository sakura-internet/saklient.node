
var ExceptionFactory = require('../errors/ExceptionFactory');

var Fiber = require('fibers');
var https = require('https');

/**
* @ignore
*/
var Client = (function () {
    function Client(token, secret) {
        this.config = {};
        this.setApiRoot('https://secure.sakura.ad.jp/cloud/');
        this.setApiRootSuffix(null);
        this.setAccessKey(token, secret);
    }
    Client.prototype.cloneInstance = function () {
        var c = new Client(this.config.token, this.config.secret);
        c.setApiRoot(this.config.apiRoot);
        c.setApiRootSuffix(this.config.apiRootSuffix);
        return c;
    };

    Client.prototype.setApiRoot = function (url) {
        this.config.apiRoot = url;
    };

    Client.prototype.setApiRootSuffix = function (suffix) {
        this.config.apiRootSuffix = suffix;
    };

    Client.prototype.setAccessKey = function (token, secret) {
        this.config.token = token;
        this.config.secret = secret;
        this.config.authorization = 'Basic ' + (new Buffer(token + ':' + secret, 'utf8')).toString('base64');
    };

    Client.prototype.request = function (method, path, params) {
        var _fiber = Fiber.current;

        //
        method = method.toUpperCase();
        path = path.replace(/^\/?/, '/');
        var json = params != null ? JSON.stringify(params) : null;
        if (method == 'GET') {
            if (json != null)
                path += '?' + encodeURIComponent(json);
            json = null;
        }
        if (!path.match(/^http/)) {
            var urlRoot = this.config.apiRoot;
            if (this.config.apiRootSuffix != null) {
                urlRoot += this.config.apiRootSuffix;
                urlRoot = urlRoot.replace(/\/?$/, '/');
            }
            path = urlRoot + 'api/cloud/1.1' + path;
        }

        //			console.log("// APIリクエスト中: "+method+" "+path);
        //			console.log(params);
        var pathSegs = path.match(/^(https?:)\/\/([^\/]+)(.+)$/);

        var opts = {
            method: method == 'GET' ? 'GET' : 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': this.config.authorization,
                'User-Agent': 'saklient.node ver-0.0.3 rev-ba6f656e7fdf2e344bc279593970d0d325ad25dd',
                'X-Requested-With': 'XMLHttpRequest',
                'X-Sakura-No-Authenticate-Header': '1',
                'X-Sakura-HTTP-Method': method,
                'X-Sakura-Request-Format': 'json',
                'X-Sakura-Response-Format': 'json',
                'X-Sakura-Error-Level': 'warning'
            },
            protocol: pathSegs[1],
            port: pathSegs[1] == 'https:' ? 443 : 80,
            host: pathSegs[2],
            path: pathSegs[3]
        };
        opts.headers['Content-Length'] = json != null ? json.length : 0;
        var req = https.request(opts, function (res) {
            var body = '';
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                body += chunk;
            });
            res.on('end', function () {
                //console.log(body);
                var ret = body ? JSON.parse(body) : null;
                if (!(res && 200 <= res.statusCode && res.statusCode < 300)) {
                    var ex = ExceptionFactory.create(res.statusCode, ret ? ret.error_code : null, ret ? ret.error_msg : "");
                    var r = _fiber.throwInto(ex);
                    _fiber = null;
                    return r;
                }
                var r = _fiber.run(ret);
                _fiber = null;
                return r;
            });
        });
        req.on('error', function (ex) {
            throw ExceptionFactory.create(null, null, ex.message);
        });
        if (json != null)
            req.write(json);
        req.end();

        //
        return Fiber.yield();
    };
    return Client;
})();
module.exports = Client;
