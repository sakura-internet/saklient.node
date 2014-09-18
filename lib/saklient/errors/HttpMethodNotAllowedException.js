var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* 要求されたHTTPメソッドは対応していません。
*/
var HttpMethodNotAllowedException = (function (_super) {
    __extends(HttpMethodNotAllowedException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function HttpMethodNotAllowedException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    HttpMethodNotAllowedException.defaultMessage = "要求されたHTTPメソッドは対応していません。";
    return HttpMethodNotAllowedException;
})(HttpException);
module.exports = HttpMethodNotAllowedException;
