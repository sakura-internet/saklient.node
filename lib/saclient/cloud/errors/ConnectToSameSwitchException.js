var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('./HttpConflictException');

/**
* 要求された操作を行えません。複数のインタフェースから同一のスイッチに接続することはできません。
*
* @class ConnectToSameSwitchException
* @constructor
* @extends HttpConflictException
*/
var ConnectToSameSwitchException = (function (_super) {
    __extends(ConnectToSameSwitchException, _super);
    function ConnectToSameSwitchException() {
        _super.apply(this, arguments);
    }
    ConnectToSameSwitchException.defaultMessage = "要求された操作を行えません。複数のインタフェースから同一のスイッチに接続することはできません。";
    return ConnectToSameSwitchException;
})(HttpConflictException);
module.exports = ConnectToSameSwitchException;
