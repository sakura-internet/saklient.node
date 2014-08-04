var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。旧ストレージディスクの提供は終了しました。サーバから該当するディスクを取り外した後、再度お試しください。
*
* @class OldStoragePlanException
* @constructor
* @extends HttpConflictException
*/
var OldStoragePlanException = (function (_super) {
    __extends(OldStoragePlanException, _super);
    function OldStoragePlanException() {
        _super.apply(this, arguments);
    }
    OldStoragePlanException.defaultMessage = "要求された操作を行えません。旧ストレージディスクの提供は終了しました。サーバから該当するディスクを取り外した後、再度お試しください。";
    return OldStoragePlanException;
})(HttpConflictException);
module.exports = OldStoragePlanException;
