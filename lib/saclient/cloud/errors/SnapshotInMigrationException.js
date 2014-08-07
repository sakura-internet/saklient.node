'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。このスナップショット または これより新しいスナップショットから他のリソースへのコピー処理が進行中です。完了後に再度お試しください。
*
* @class SnapshotInMigrationException
* @constructor
* @extends HttpConflictException
*/
var SnapshotInMigrationException = (function (_super) {
    __extends(SnapshotInMigrationException, _super);
    function SnapshotInMigrationException() {
        _super.apply(this, arguments);
    }
    SnapshotInMigrationException.defaultMessage = "要求された操作を行えません。このスナップショット または これより新しいスナップショットから他のリソースへのコピー処理が進行中です。完了後に再度お試しください。";
    return SnapshotInMigrationException;
})(HttpConflictException);
module.exports = SnapshotInMigrationException;
