var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('./HttpConflictException');

/**
* 要求された操作を行えません。起動中のサーバが収容されているハイパーバイザとパケットフィルタのバージョンが合致しません。コントロールパネルまたはAPIからの操作によりサーバを一旦停止し、再度起動後にお試しください。
*
* @class PacketFilterVersionMismatchException
* @constructor
* @extends HttpConflictException
*/
var PacketFilterVersionMismatchException = (function (_super) {
    __extends(PacketFilterVersionMismatchException, _super);
    function PacketFilterVersionMismatchException() {
        _super.apply(this, arguments);
    }
    PacketFilterVersionMismatchException.defaultMessage = "要求された操作を行えません。起動中のサーバが収容されているハイパーバイザとパケットフィルタのバージョンが合致しません。コントロールパネルまたはAPIからの操作によりサーバを一旦停止し、再度起動後にお試しください。";
    return PacketFilterVersionMismatchException;
})(HttpConflictException);
module.exports = PacketFilterVersionMismatchException;
