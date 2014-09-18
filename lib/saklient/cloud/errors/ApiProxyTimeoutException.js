var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpGatewayTimeoutException = require('../../errors/HttpGatewayTimeoutException');

'use strict';

/**
* APIプロクシがタイムアウトしました。サーバが混雑している可能性があります。
*/
var ApiProxyTimeoutException = (function (_super) {
    __extends(ApiProxyTimeoutException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function ApiProxyTimeoutException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    ApiProxyTimeoutException.defaultMessage = "APIプロクシがタイムアウトしました。サーバが混雑している可能性があります。";
    return ApiProxyTimeoutException;
})(HttpGatewayTimeoutException);
module.exports = ApiProxyTimeoutException;
