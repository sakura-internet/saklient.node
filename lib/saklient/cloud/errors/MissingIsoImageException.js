var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。ISOイメージが見つかりません。イメージを正しくアップロードし、FTP共有を終了した後に再度お試しください。
*/
var MissingIsoImageException = (function (_super) {
    __extends(MissingIsoImageException, _super);
    function MissingIsoImageException() {
        _super.apply(this, arguments);
    }
    MissingIsoImageException.defaultMessage = "要求された操作を行えません。ISOイメージが見つかりません。イメージを正しくアップロードし、FTP共有を終了した後に再度お試しください。";
    return MissingIsoImageException;
})(HttpConflictException);
module.exports = MissingIsoImageException;
