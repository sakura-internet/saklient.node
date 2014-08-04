var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。このディスク または このディスクのスナップショットから他のリソースへのコピー処理が進行中です。完了後に再度お試しください。
*
* @class DiskOrSsInMigrationException
* @constructor
* @extends HttpConflictException
*/
var DiskOrSsInMigrationException = (function (_super) {
    __extends(DiskOrSsInMigrationException, _super);
    function DiskOrSsInMigrationException() {
        _super.apply(this, arguments);
    }
    DiskOrSsInMigrationException.defaultMessage = "要求された操作を行えません。このディスク または このディスクのスナップショットから他のリソースへのコピー処理が進行中です。完了後に再度お試しください。";
    return DiskOrSsInMigrationException;
})(HttpConflictException);
module.exports = DiskOrSsInMigrationException;
