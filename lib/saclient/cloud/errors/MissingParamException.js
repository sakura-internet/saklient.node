'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

/**
* 不適切な要求です。必要なパラメータが指定されていません。
*
* @class MissingParamException
* @constructor
* @extends HttpBadRequestException
*/
var MissingParamException = (function (_super) {
    __extends(MissingParamException, _super);
    function MissingParamException() {
        _super.apply(this, arguments);
    }
    MissingParamException.defaultMessage = "不適切な要求です。必要なパラメータが指定されていません。";
    return MissingParamException;
})(HttpBadRequestException);
module.exports = MissingParamException;
