var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

/**
* HTTPエラー。Requested Range Not Satisfiable.
*
* @class HttpRequestedRangeNotSatisfiableException
* @constructor
* @extends HttpException
*/
var HttpRequestedRangeNotSatisfiableException = (function (_super) {
    __extends(HttpRequestedRangeNotSatisfiableException, _super);
    function HttpRequestedRangeNotSatisfiableException() {
        _super.apply(this, arguments);
    }
    HttpRequestedRangeNotSatisfiableException.defaultMessage = "HTTPエラー。Requested Range Not Satisfiable.";
    return HttpRequestedRangeNotSatisfiableException;
})(HttpException);
module.exports = HttpRequestedRangeNotSatisfiableException;
