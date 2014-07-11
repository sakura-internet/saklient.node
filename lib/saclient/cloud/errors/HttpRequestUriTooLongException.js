var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

/**
* HTTPエラー。Request Uri Too Long.
*
* @class HttpRequestUriTooLongException
* @constructor
* @extends HttpException
*/
var HttpRequestUriTooLongException = (function (_super) {
    __extends(HttpRequestUriTooLongException, _super);
    function HttpRequestUriTooLongException() {
        _super.apply(this, arguments);
    }
    HttpRequestUriTooLongException.defaultMessage = "HTTPエラー。Request Uri Too Long.";
    return HttpRequestUriTooLongException;
})(HttpException);
module.exports = HttpRequestUriTooLongException;
