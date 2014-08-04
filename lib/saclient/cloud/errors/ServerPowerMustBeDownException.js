var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。サーバが起動中にはこの操作を行えません。
*
* @class ServerPowerMustBeDownException
* @constructor
* @extends HttpConflictException
*/
var ServerPowerMustBeDownException = (function (_super) {
    __extends(ServerPowerMustBeDownException, _super);
    function ServerPowerMustBeDownException() {
        _super.apply(this, arguments);
    }
    ServerPowerMustBeDownException.defaultMessage = "要求された操作を行えません。サーバが起動中にはこの操作を行えません。";
    return ServerPowerMustBeDownException;
})(HttpConflictException);
module.exports = ServerPowerMustBeDownException;
