var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpGatewayTimeoutException = require('../../errors/HttpGatewayTimeoutException');

/**
* APIプロクシがタイムアウトしました。サーバが混雑している可能性があります。
*
* @class ApiProxyTimeoutException
* @constructor
* @extends HttpGatewayTimeoutException
*/
var ApiProxyTimeoutException = (function (_super) {
    __extends(ApiProxyTimeoutException, _super);
    function ApiProxyTimeoutException() {
        _super.apply(this, arguments);
    }
    ApiProxyTimeoutException.defaultMessage = "APIプロクシがタイムアウトしました。サーバが混雑している可能性があります。";
    return ApiProxyTimeoutException;
})(HttpGatewayTimeoutException);
module.exports = ApiProxyTimeoutException;
