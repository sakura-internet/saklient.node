var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpForbiddenException = require('./HttpForbiddenException');

/**
* 要求された操作は許可されていません。このAPIはアカウントを特定できる認証方法でアクセスする必要があります。
*
* @class AccountNotSpecifiedException
* @constructor
* @extends HttpForbiddenException
*/
var AccountNotSpecifiedException = (function (_super) {
    __extends(AccountNotSpecifiedException, _super);
    function AccountNotSpecifiedException() {
        _super.apply(this, arguments);
    }
    AccountNotSpecifiedException.defaultMessage = "要求された操作は許可されていません。このAPIはアカウントを特定できる認証方法でアクセスする必要があります。";
    return AccountNotSpecifiedException;
})(HttpForbiddenException);
module.exports = AccountNotSpecifiedException;
