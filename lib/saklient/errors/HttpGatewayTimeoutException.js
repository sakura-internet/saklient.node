var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* HTTPエラー。Gateway Timeout.
*/
var HttpGatewayTimeoutException = (function (_super) {
    __extends(HttpGatewayTimeoutException, _super);
    function HttpGatewayTimeoutException() {
        _super.apply(this, arguments);
    }
    HttpGatewayTimeoutException.defaultMessage = "HTTPエラー。Gateway Timeout.";
    return HttpGatewayTimeoutException;
})(HttpException);
module.exports = HttpGatewayTimeoutException;
