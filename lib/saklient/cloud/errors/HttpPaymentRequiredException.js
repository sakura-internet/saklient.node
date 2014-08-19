var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

/**
* HTTPエラー。Payment Required.
*
* @class HttpPaymentRequiredException
* @constructor
* @extends HttpException
*/
var HttpPaymentRequiredException = (function (_super) {
    __extends(HttpPaymentRequiredException, _super);
    function HttpPaymentRequiredException() {
        _super.apply(this, arguments);
    }
    HttpPaymentRequiredException.defaultMessage = "HTTPエラー。Payment Required.";
    return HttpPaymentRequiredException;
})(HttpException);
module.exports = HttpPaymentRequiredException;
