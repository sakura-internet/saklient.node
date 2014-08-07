'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

/**
* サーバ内部エラーが発生しました。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。
*
* @class HttpInternalServerErrorException
* @constructor
* @extends HttpException
*/
var HttpInternalServerErrorException = (function (_super) {
    __extends(HttpInternalServerErrorException, _super);
    function HttpInternalServerErrorException() {
        _super.apply(this, arguments);
    }
    HttpInternalServerErrorException.defaultMessage = "サーバ内部エラーが発生しました。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。";
    return HttpInternalServerErrorException;
})(HttpException);
module.exports = HttpInternalServerErrorException;
