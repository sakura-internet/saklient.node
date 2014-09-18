var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
* 不適切な要求です。不明な演算子がフィルタ中に含まれています。
*/
var FilterUnknownOperatorException = (function (_super) {
    __extends(FilterUnknownOperatorException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function FilterUnknownOperatorException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    FilterUnknownOperatorException.defaultMessage = "不適切な要求です。不明な演算子がフィルタ中に含まれています。";
    return FilterUnknownOperatorException;
})(HttpBadRequestException);
module.exports = FilterUnknownOperatorException;
