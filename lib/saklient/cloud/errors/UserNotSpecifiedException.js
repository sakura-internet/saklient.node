var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
* 要求された操作は許可されていません。このAPIはユーザを特定できる認証方法でアクセスする必要があります。
*/
var UserNotSpecifiedException = (function (_super) {
    __extends(UserNotSpecifiedException, _super);
    function UserNotSpecifiedException() {
        _super.apply(this, arguments);
    }
    UserNotSpecifiedException.defaultMessage = "要求された操作は許可されていません。このAPIはユーザを特定できる認証方法でアクセスする必要があります。";
    return UserNotSpecifiedException;
})(HttpForbiddenException);
module.exports = UserNotSpecifiedException;
