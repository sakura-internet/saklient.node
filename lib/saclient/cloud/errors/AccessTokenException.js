var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpForbiddenException = require('../../errors/HttpForbiddenException');

/**
* 要求された操作は許可されていません。この操作は有効期限内のトークンが必要です。
*
* @class AccessTokenException
* @constructor
* @extends HttpForbiddenException
*/
var AccessTokenException = (function (_super) {
    __extends(AccessTokenException, _super);
    function AccessTokenException() {
        _super.apply(this, arguments);
    }
    AccessTokenException.defaultMessage = "要求された操作は許可されていません。この操作は有効期限内のトークンが必要です。";
    return AccessTokenException;
})(HttpForbiddenException);
module.exports = AccessTokenException;
