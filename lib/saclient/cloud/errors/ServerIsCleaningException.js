var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('./HttpConflictException');

/**
* 要求された操作を行えません。サーバが終了処理中です。しばらく時間をおいてから再度お試しください。
*
* @class ServerIsCleaningException
* @constructor
* @extends HttpConflictException
*/
var ServerIsCleaningException = (function (_super) {
    __extends(ServerIsCleaningException, _super);
    function ServerIsCleaningException() {
        _super.apply(this, arguments);
    }
    ServerIsCleaningException.defaultMessage = "要求された操作を行えません。サーバが終了処理中です。しばらく時間をおいてから再度お試しください。";
    return ServerIsCleaningException;
})(HttpConflictException);
module.exports = ServerIsCleaningException;