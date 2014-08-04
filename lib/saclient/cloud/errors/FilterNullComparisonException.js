var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

/**
* 不適切な要求です。nullとは比較できない演算子がフィルタ中に含まれています。
*
* @class FilterNullComparisonException
* @constructor
* @extends HttpBadRequestException
*/
var FilterNullComparisonException = (function (_super) {
    __extends(FilterNullComparisonException, _super);
    function FilterNullComparisonException() {
        _super.apply(this, arguments);
    }
    FilterNullComparisonException.defaultMessage = "不適切な要求です。nullとは比較できない演算子がフィルタ中に含まれています。";
    return FilterNullComparisonException;
})(HttpBadRequestException);
module.exports = FilterNullComparisonException;
