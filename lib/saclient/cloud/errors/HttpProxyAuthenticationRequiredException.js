var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

/**
* HTTPエラー。Proxy Authentication Required.
*
* @class HttpProxyAuthenticationRequiredException
* @constructor
* @extends HttpException
*/
var HttpProxyAuthenticationRequiredException = (function (_super) {
    __extends(HttpProxyAuthenticationRequiredException, _super);
    function HttpProxyAuthenticationRequiredException() {
        _super.apply(this, arguments);
    }
    HttpProxyAuthenticationRequiredException.defaultMessage = "HTTPエラー。Proxy Authentication Required.";
    return HttpProxyAuthenticationRequiredException;
})(HttpException);
module.exports = HttpProxyAuthenticationRequiredException;
