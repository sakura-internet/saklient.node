var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

/**
* HTTPエラー。Variant Also Negotiates.
*
* @class HttpVariantAlsoNegotiatesException
* @constructor
* @extends HttpException
*/
var HttpVariantAlsoNegotiatesException = (function (_super) {
    __extends(HttpVariantAlsoNegotiatesException, _super);
    function HttpVariantAlsoNegotiatesException() {
        _super.apply(this, arguments);
    }
    HttpVariantAlsoNegotiatesException.defaultMessage = "HTTPエラー。Variant Also Negotiates.";
    return HttpVariantAlsoNegotiatesException;
})(HttpException);
module.exports = HttpVariantAlsoNegotiatesException;
