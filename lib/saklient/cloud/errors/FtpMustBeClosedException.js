var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。リソースのFTP共有を終了した後に実行してください。
*/
var FtpMustBeClosedException = (function (_super) {
    __extends(FtpMustBeClosedException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function FtpMustBeClosedException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    FtpMustBeClosedException.defaultMessage = "要求された操作を行えません。リソースのFTP共有を終了した後に実行してください。";
    return FtpMustBeClosedException;
})(HttpConflictException);
module.exports = FtpMustBeClosedException;
