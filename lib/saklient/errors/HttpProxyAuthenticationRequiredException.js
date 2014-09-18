var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* HTTPエラー。Proxy Authentication Required.
*/
var HttpProxyAuthenticationRequiredException = (function (_super) {
    __extends(HttpProxyAuthenticationRequiredException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function HttpProxyAuthenticationRequiredException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "HTTPエラー。Proxy Authentication Required." : message);
    }
    return HttpProxyAuthenticationRequiredException;
})(HttpException);
module.exports = HttpProxyAuthenticationRequiredException;
