'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。FTP共有は既に終了されています。
*
* @class FtpIsAlreadyCloseException
* @constructor
* @extends HttpConflictException
*/
var FtpIsAlreadyCloseException = (function (_super) {
    __extends(FtpIsAlreadyCloseException, _super);
    function FtpIsAlreadyCloseException() {
        _super.apply(this, arguments);
    }
    FtpIsAlreadyCloseException.defaultMessage = "要求された操作を行えません。FTP共有は既に終了されています。";
    return FtpIsAlreadyCloseException;
})(HttpConflictException);
module.exports = FtpIsAlreadyCloseException;
