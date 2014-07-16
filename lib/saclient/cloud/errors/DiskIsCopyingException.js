var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('./HttpConflictException');

/**
* 要求された操作を行えません。このディスクへのコピー処理が進行中です。完了後に再度お試しください。
*
* @class DiskIsCopyingException
* @constructor
* @extends HttpConflictException
*/
var DiskIsCopyingException = (function (_super) {
    __extends(DiskIsCopyingException, _super);
    function DiskIsCopyingException() {
        _super.apply(this, arguments);
    }
    DiskIsCopyingException.defaultMessage = "要求された操作を行えません。このディスクへのコピー処理が進行中です。完了後に再度お試しください。";
    return DiskIsCopyingException;
})(HttpConflictException);
module.exports = DiskIsCopyingException;