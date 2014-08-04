var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

/**
* 不適切な要求です。フィールドの型に対応していない演算子がフィルタ中に含まれています。
*
* @class FilterBadOperatorException
* @constructor
* @extends HttpBadRequestException
*/
var FilterBadOperatorException = (function (_super) {
    __extends(FilterBadOperatorException, _super);
    function FilterBadOperatorException() {
        _super.apply(this, arguments);
    }
    FilterBadOperatorException.defaultMessage = "不適切な要求です。フィールドの型に対応していない演算子がフィルタ中に含まれています。";
    return FilterBadOperatorException;
})(HttpBadRequestException);
module.exports = FilterBadOperatorException;
