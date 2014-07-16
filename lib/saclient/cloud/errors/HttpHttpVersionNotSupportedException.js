var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

/**
* HTTPエラー。Http Version Not Supported.
*
* @class HttpHttpVersionNotSupportedException
* @constructor
* @extends HttpException
*/
var HttpHttpVersionNotSupportedException = (function (_super) {
    __extends(HttpHttpVersionNotSupportedException, _super);
    function HttpHttpVersionNotSupportedException() {
        _super.apply(this, arguments);
    }
    HttpHttpVersionNotSupportedException.defaultMessage = "HTTPエラー。Http Version Not Supported.";
    return HttpHttpVersionNotSupportedException;
})(HttpException);
module.exports = HttpHttpVersionNotSupportedException;