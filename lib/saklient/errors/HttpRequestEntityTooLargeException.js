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
*
* @class HttpRequestEntityTooLargeException
* @constructor
* @extends HttpException
*/
var HttpRequestEntityTooLargeException = (function (_super) {
    __extends(HttpRequestEntityTooLargeException, _super);
    function HttpRequestEntityTooLargeException() {
        _super.apply(this, arguments);
    }
    HttpRequestEntityTooLargeException.defaultMessage = "HTTPエラー。Request Entity Too Large.";
    return HttpRequestEntityTooLargeException;
})(HttpException);
module.exports = HttpRequestEntityTooLargeException;
