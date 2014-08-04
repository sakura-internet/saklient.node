var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。FTP共有によりアップロードされたファイルを操作できません。ファイル名等をご確認ください。
*
* @class FtpCannotCloseException
* @constructor
* @extends HttpConflictException
*/
var FtpCannotCloseException = (function (_super) {
    __extends(FtpCannotCloseException, _super);
    function FtpCannotCloseException() {
        _super.apply(this, arguments);
    }
    FtpCannotCloseException.defaultMessage = "要求された操作を行えません。FTP共有によりアップロードされたファイルを操作できません。ファイル名等をご確認ください。";
    return FtpCannotCloseException;
})(HttpConflictException);
module.exports = FtpCannotCloseException;
