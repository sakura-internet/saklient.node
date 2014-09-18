var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* HTTPエラー。Variant Also Negotiates.
*/
var HttpVariantAlsoNegotiatesException = (function (_super) {
    __extends(HttpVariantAlsoNegotiatesException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function HttpVariantAlsoNegotiatesException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    HttpVariantAlsoNegotiatesException.defaultMessage = "HTTPエラー。Variant Also Negotiates.";
    return HttpVariantAlsoNegotiatesException;
})(HttpException);
module.exports = HttpVariantAlsoNegotiatesException;
