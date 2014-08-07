var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
* 不適切な要求です。同時に指定できないパラメータが含まれています。
*
* @class InvalidParamCombException
* @constructor
* @extends HttpBadRequestException
*/
var InvalidParamCombException = (function (_super) {
    __extends(InvalidParamCombException, _super);
    function InvalidParamCombException() {
        _super.apply(this, arguments);
    }
    InvalidParamCombException.defaultMessage = "不適切な要求です。同時に指定できないパラメータが含まれています。";
    return InvalidParamCombException;
})(HttpBadRequestException);
module.exports = InvalidParamCombException;
