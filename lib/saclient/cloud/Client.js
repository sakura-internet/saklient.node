/// <reference path="../../node.d.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        // https://github.com/dhruvbird/http-sync
        var httpSync = require('http-sync');

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
                        if (this.config.apiRootSuffix.match(/is1[v-z]/)) {
                            urlRoot = urlRoot.replace(/\/cloud\/$/, '/cloud-test/');
                        }
                        urlRoot += this.config.apiRootSuffix;
                        urlRoot = urlRoot.replace(/\/?$/, '/');
                    }
                    path = urlRoot + 'api/cloud/1.1' + path;
                }
                console.log("// APIリクエスト中: " + method + " " + path);
                console.log(params);

                var pathSegs = path.match(/^(https?):\/\/([^\/]+)(.+)$/);

                var req = httpSync.request({
                    method: 'GET',
                    headers: {
                        //'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': this.config.authorization,
                        'X-Requested-With': 'XMLHttpRequest',
                        'X-Sakura-No-Authenticate-Header': '1',
                        'X-Sakura-HTTP-Method': method,
                        'X-Sakura-Request-Format': 'json',
                        'X-Sakura-Response-Format': 'json',
                        'X-Sakura-Error-Level': 'warning'
                    },
                    body: json,
                    protocol: pathSegs[1],
                    port: pathSegs[1] == 'https' ? 443 : 80,
                    host: pathSegs[2],
                    path: pathSegs[3]
                });
                console.log(this.config.authorization);
                if (json != null) {
                    req.write(json);
                }
                var data = req.end();
                if (!(data && 200 <= data.statusCode && data.statusCode < 300)) {
                    throw "Status " + data.statusCode;
                }
                return JSON.parse(data.body);
            };
            return Client;
        })();
        cloud.Client = Client;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
