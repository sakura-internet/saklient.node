var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
* 不適切な要求です。nullとは比較できない演算子がフィルタ中に含まれています。
*/
var FilterNullComparisonException = (function (_super) {
    __extends(FilterNullComparisonException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function FilterNullComparisonException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    FilterNullComparisonException.defaultMessage = "不適切な要求です。nullとは比較できない演算子がフィルタ中に含まれています。";
    return FilterNullComparisonException;
})(HttpBadRequestException);
module.exports = FilterNullComparisonException;