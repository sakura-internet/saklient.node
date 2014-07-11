var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

/**
* この操作は認証が必要です。IDまたはパスワードが誤っている可能性があります。
*
* @class HttpUnauthorizedException
* @constructor
* @extends HttpException
*/
var HttpUnauthorizedException = (function (_super) {
    __extends(HttpUnauthorizedException, _super);
    function HttpUnauthorizedException() {
        _super.apply(this, arguments);
    }
    HttpUnauthorizedException.defaultMessage = "この操作は認証が必要です。IDまたはパスワードが誤っている可能性があります。";
    return HttpUnauthorizedException;
})(HttpException);
module.exports = HttpUnauthorizedException;
