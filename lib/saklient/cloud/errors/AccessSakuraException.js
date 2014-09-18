var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
* 要求された操作は許可されていません。さくらインターネットの会員メニューより認証後に実行してください。
*/
var AccessSakuraException = (function (_super) {
    __extends(AccessSakuraException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function AccessSakuraException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    AccessSakuraException.defaultMessage = "要求された操作は許可されていません。さくらインターネットの会員メニューより認証後に実行してください。";
    return AccessSakuraException;
})(HttpForbiddenException);
module.exports = AccessSakuraException;
