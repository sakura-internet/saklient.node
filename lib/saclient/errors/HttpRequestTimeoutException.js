'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

/**
* HTTPエラー。Request Timeout.
*
* @class HttpRequestTimeoutException
* @constructor
* @extends HttpException
*/
var HttpRequestTimeoutException = (function (_super) {
    __extends(HttpRequestTimeoutException, _super);
    function HttpRequestTimeoutException() {
        _super.apply(this, arguments);
    }
    HttpRequestTimeoutException.defaultMessage = "HTTPエラー。Request Timeout.";
    return HttpRequestTimeoutException;
})(HttpException);
module.exports = HttpRequestTimeoutException;
