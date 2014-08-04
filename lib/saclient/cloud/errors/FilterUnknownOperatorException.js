var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

/**
* 不適切な要求です。不明な演算子がフィルタ中に含まれています。
*
* @class FilterUnknownOperatorException
* @constructor
* @extends HttpBadRequestException
*/
var FilterUnknownOperatorException = (function (_super) {
    __extends(FilterUnknownOperatorException, _super);
    function FilterUnknownOperatorException() {
        _super.apply(this, arguments);
    }
    FilterUnknownOperatorException.defaultMessage = "不適切な要求です。不明な演算子がフィルタ中に含まれています。";
    return FilterUnknownOperatorException;
})(HttpBadRequestException);
module.exports = FilterUnknownOperatorException;
