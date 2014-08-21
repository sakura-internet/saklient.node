var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* HTTPエラー。Bad Gateway.
*/
var HttpBadGatewayException = (function (_super) {
    __extends(HttpBadGatewayException, _super);
    function HttpBadGatewayException() {
        _super.apply(this, arguments);
    }
    HttpBadGatewayException.defaultMessage = "HTTPエラー。Bad Gateway.";
    return HttpBadGatewayException;
})(HttpException);
module.exports = HttpBadGatewayException;
