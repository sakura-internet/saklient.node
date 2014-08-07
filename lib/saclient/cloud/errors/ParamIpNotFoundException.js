var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
* 不適切な要求です。パラメータで指定されたIPアドレスを含むネットワークが存在しません。
*
* @class ParamIpNotFoundException
* @constructor
* @extends HttpBadRequestException
*/
var ParamIpNotFoundException = (function (_super) {
    __extends(ParamIpNotFoundException, _super);
    function ParamIpNotFoundException() {
        _super.apply(this, arguments);
    }
    ParamIpNotFoundException.defaultMessage = "不適切な要求です。パラメータで指定されたIPアドレスを含むネットワークが存在しません。";
    return ParamIpNotFoundException;
})(HttpBadRequestException);
module.exports = ParamIpNotFoundException;
