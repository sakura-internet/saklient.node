var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。FTP共有は既に開始されています。
*
* @class FtpIsAlreadyOpenException
* @constructor
* @extends HttpConflictException
*/
var FtpIsAlreadyOpenException = (function (_super) {
    __extends(FtpIsAlreadyOpenException, _super);
    function FtpIsAlreadyOpenException() {
        _super.apply(this, arguments);
    }
    FtpIsAlreadyOpenException.defaultMessage = "要求された操作を行えません。FTP共有は既に開始されています。";
    return FtpIsAlreadyOpenException;
})(HttpConflictException);
module.exports = FtpIsAlreadyOpenException;
