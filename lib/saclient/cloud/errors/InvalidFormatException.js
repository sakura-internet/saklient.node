var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
* 不適切な要求です。パラメータに含まれている値のフォーマットが一部不正です。
*
* @class InvalidFormatException
* @constructor
* @extends HttpBadRequestException
*/
var InvalidFormatException = (function (_super) {
    __extends(InvalidFormatException, _super);
    function InvalidFormatException() {
        _super.apply(this, arguments);
    }
    InvalidFormatException.defaultMessage = "不適切な要求です。パラメータに含まれている値のフォーマットが一部不正です。";
    return InvalidFormatException;
})(HttpBadRequestException);
module.exports = InvalidFormatException;
