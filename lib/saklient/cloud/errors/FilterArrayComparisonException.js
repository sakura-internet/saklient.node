var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
* 不適切な要求です。配列とは比較できない演算子がフィルタ中に含まれています。
*
* @class FilterArrayComparisonException
* @constructor
* @extends HttpBadRequestException
*/
var FilterArrayComparisonException = (function (_super) {
    __extends(FilterArrayComparisonException, _super);
    function FilterArrayComparisonException() {
        _super.apply(this, arguments);
    }
    FilterArrayComparisonException.defaultMessage = "不適切な要求です。配列とは比較できない演算子がフィルタ中に含まれています。";
    return FilterArrayComparisonException;
})(HttpBadRequestException);
module.exports = FilterArrayComparisonException;
