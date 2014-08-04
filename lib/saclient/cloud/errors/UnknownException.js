var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpInternalServerErrorException = require('../../errors/HttpInternalServerErrorException');

/**
* 予期しないエラーが発生しました。このエラーが繰り返し発生する場合は、サポートサイトやメンテナンス情報をご確認ください。
*
* @class UnknownException
* @constructor
* @extends HttpInternalServerErrorException
*/
var UnknownException = (function (_super) {
    __extends(UnknownException, _super);
    function UnknownException() {
        _super.apply(this, arguments);
    }
    UnknownException.defaultMessage = "予期しないエラーが発生しました。このエラーが繰り返し発生する場合は、サポートサイトやメンテナンス情報をご確認ください。";
    return UnknownException;
})(HttpInternalServerErrorException);
module.exports = UnknownException;
