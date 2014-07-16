var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('./HttpConflictException');

/**
* 要求された操作を行えません。このISOイメージは不完全です。複製処理等の完了後に再度お試しください。
*
* @class CdromIsIncompleteException
* @constructor
* @extends HttpConflictException
*/
var CdromIsIncompleteException = (function (_super) {
    __extends(CdromIsIncompleteException, _super);
    function CdromIsIncompleteException() {
        _super.apply(this, arguments);
    }
    CdromIsIncompleteException.defaultMessage = "要求された操作を行えません。このISOイメージは不完全です。複製処理等の完了後に再度お試しください。";
    return CdromIsIncompleteException;
})(HttpConflictException);
module.exports = CdromIsIncompleteException;