var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
* 不適切な要求です。フィールドの型に対応していない演算子がフィルタ中に含まれています。
*/
var FilterBadOperatorException = (function (_super) {
    __extends(FilterBadOperatorException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function FilterBadOperatorException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    FilterBadOperatorException.defaultMessage = "不適切な要求です。フィールドの型に対応していない演算子がフィルタ中に含まれています。";
    return FilterBadOperatorException;
})(HttpBadRequestException);
module.exports = FilterBadOperatorException;
