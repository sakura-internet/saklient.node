var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('./HttpConflictException');

/**
* 要求された操作を行えません。この接続インタフェースにこれ以上のディスクを接続することができません。
*
* @class DiskConnectionLimitException
* @constructor
* @extends HttpConflictException
*/
var DiskConnectionLimitException = (function (_super) {
    __extends(DiskConnectionLimitException, _super);
    function DiskConnectionLimitException() {
        _super.apply(this, arguments);
    }
    DiskConnectionLimitException.defaultMessage = "要求された操作を行えません。この接続インタフェースにこれ以上のディスクを接続することができません。";
    return DiskConnectionLimitException;
})(HttpConflictException);
module.exports = DiskConnectionLimitException;