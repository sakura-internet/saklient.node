var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('./HttpConflictException');

/**
* 要求された操作を行えません。このアーカイブは不完全です。複製処理等の完了後に再度お試しください。
*
* @class ArchiveIsIncompleteException
* @constructor
* @extends HttpConflictException
*/
var ArchiveIsIncompleteException = (function (_super) {
    __extends(ArchiveIsIncompleteException, _super);
    function ArchiveIsIncompleteException() {
        _super.apply(this, arguments);
    }
    ArchiveIsIncompleteException.defaultMessage = "要求された操作を行えません。このアーカイブは不完全です。複製処理等の完了後に再度お試しください。";
    return ArchiveIsIncompleteException;
})(HttpConflictException);
module.exports = ArchiveIsIncompleteException;
