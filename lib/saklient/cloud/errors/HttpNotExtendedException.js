var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

/**
* HTTPエラー。Not Extended.
*
* @class HttpNotExtendedException
* @constructor
* @extends HttpException
*/
var HttpNotExtendedException = (function (_super) {
    __extends(HttpNotExtendedException, _super);
    function HttpNotExtendedException() {
        _super.apply(this, arguments);
    }
    HttpNotExtendedException.defaultMessage = "HTTPエラー。Not Extended.";
    return HttpNotExtendedException;
})(HttpException);
module.exports = HttpNotExtendedException;
