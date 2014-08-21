var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。サーバが停止中にはこの操作を行えません。
*/
var ServerPowerMustBeUpException = (function (_super) {
    __extends(ServerPowerMustBeUpException, _super);
    function ServerPowerMustBeUpException() {
        _super.apply(this, arguments);
    }
    ServerPowerMustBeUpException.defaultMessage = "要求された操作を行えません。サーバが停止中にはこの操作を行えません。";
    return ServerPowerMustBeUpException;
})(HttpConflictException);
module.exports = ServerPowerMustBeUpException;
