var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpInternalServerErrorException = require('../../errors/HttpInternalServerErrorException');

'use strict';

/**
* 予期しないエラーが発生しました。このエラーが繰り返し発生する場合は、サポートサイトやメンテナンス情報をご確認ください。
*/
var UnknownException = (function (_super) {
    __extends(UnknownException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function UnknownException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "予期しないエラーが発生しました。このエラーが繰り返し発生する場合は、サポートサイトやメンテナンス情報をご確認ください。" : message);
    }
    return UnknownException;
})(HttpInternalServerErrorException);
module.exports = UnknownException;
