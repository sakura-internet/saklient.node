var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('./HttpConflictException');

/**
* 要求された操作を行えません。リソースのFTP共有を終了した後に実行してください。
*
* @class FtpMustBeClosedException
* @constructor
* @extends HttpConflictException
*/
var FtpMustBeClosedException = (function (_super) {
    __extends(FtpMustBeClosedException, _super);
    function FtpMustBeClosedException() {
        _super.apply(this, arguments);
    }
    FtpMustBeClosedException.defaultMessage = "要求された操作を行えません。リソースのFTP共有を終了した後に実行してください。";
    return FtpMustBeClosedException;
})(HttpConflictException);
module.exports = FtpMustBeClosedException;
