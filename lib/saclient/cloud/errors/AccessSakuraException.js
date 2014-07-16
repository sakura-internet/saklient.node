var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpForbiddenException = require('./HttpForbiddenException');

/**
* 要求された操作は許可されていません。さくらインターネットの会員メニューより認証後に実行してください。
*
* @class AccessSakuraException
* @constructor
* @extends HttpForbiddenException
*/
var AccessSakuraException = (function (_super) {
    __extends(AccessSakuraException, _super);
    function AccessSakuraException() {
        _super.apply(this, arguments);
    }
    AccessSakuraException.defaultMessage = "要求された操作は許可されていません。さくらインターネットの会員メニューより認証後に実行してください。";
    return AccessSakuraException;
})(HttpForbiddenException);
module.exports = AccessSakuraException;