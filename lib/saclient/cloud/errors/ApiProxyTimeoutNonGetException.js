var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpGatewayTimeoutException = require('./HttpGatewayTimeoutException');

/**
* APIプロクシが応答しません。要求は実行された可能性があります。しばらく時間をおいてからご確認ください。
*
* @class ApiProxyTimeoutNonGetException
* @constructor
* @extends HttpGatewayTimeoutException
*/
var ApiProxyTimeoutNonGetException = (function (_super) {
    __extends(ApiProxyTimeoutNonGetException, _super);
    function ApiProxyTimeoutNonGetException() {
        _super.apply(this, arguments);
    }
    ApiProxyTimeoutNonGetException.defaultMessage = "APIプロクシが応答しません。要求は実行された可能性があります。しばらく時間をおいてからご確認ください。";
    return ApiProxyTimeoutNonGetException;
})(HttpGatewayTimeoutException);
module.exports = ApiProxyTimeoutNonGetException;
