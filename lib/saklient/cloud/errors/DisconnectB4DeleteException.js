var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。サーバとの接続を切り離した後に実行してください。
*/
var DisconnectB4DeleteException = (function (_super) {
    __extends(DisconnectB4DeleteException, _super);
    function DisconnectB4DeleteException() {
        _super.apply(this, arguments);
    }
    DisconnectB4DeleteException.defaultMessage = "要求された操作を行えません。サーバとの接続を切り離した後に実行してください。";
    return DisconnectB4DeleteException;
})(HttpConflictException);
module.exports = DisconnectB4DeleteException;
