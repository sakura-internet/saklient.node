var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* HTTPエラー。Request Entity Too Large.
*/
var HttpRequestEntityTooLargeException = (function (_super) {
    __extends(HttpRequestEntityTooLargeException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function HttpRequestEntityTooLargeException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    HttpRequestEntityTooLargeException.defaultMessage = "HTTPエラー。Request Entity Too Large.";
    return HttpRequestEntityTooLargeException;
})(HttpException);
module.exports = HttpRequestEntityTooLargeException;
