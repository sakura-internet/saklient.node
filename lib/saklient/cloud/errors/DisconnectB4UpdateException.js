var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。サーバと接続された状態では変更できない値が含まれています。
*/
var DisconnectB4UpdateException = (function (_super) {
    __extends(DisconnectB4UpdateException, _super);
    function DisconnectB4UpdateException() {
        _super.apply(this, arguments);
    }
    DisconnectB4UpdateException.defaultMessage = "要求された操作を行えません。サーバと接続された状態では変更できない値が含まれています。";
    return DisconnectB4UpdateException;
})(HttpConflictException);
module.exports = DisconnectB4UpdateException;
