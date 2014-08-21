var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。このリソースから他のリソースへのコピー処理が進行中です。完了後に再度お試しください。
*/
var InMigrationException = (function (_super) {
    __extends(InMigrationException, _super);
    function InMigrationException() {
        _super.apply(this, arguments);
    }
    InMigrationException.defaultMessage = "要求された操作を行えません。このリソースから他のリソースへのコピー処理が進行中です。完了後に再度お試しください。";
    return InMigrationException;
})(HttpConflictException);
module.exports = InMigrationException;
