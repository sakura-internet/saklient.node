var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* 不適切な要求です。パラメータの指定誤り、入力規則違反です。入力内容をご確認ください。
*
* @class HttpBadRequestException
* @constructor
* @extends HttpException
*/
var HttpBadRequestException = (function (_super) {
    __extends(HttpBadRequestException, _super);
    function HttpBadRequestException() {
        _super.apply(this, arguments);
    }
    HttpBadRequestException.defaultMessage = "不適切な要求です。パラメータの指定誤り、入力規則違反です。入力内容をご確認ください。";
    return HttpBadRequestException;
})(HttpException);
module.exports = HttpBadRequestException;
