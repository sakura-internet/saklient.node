'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。テンプレートのFTP共有を終了後に実行してください。
*
* @class TemplateFtpIsOpenException
* @constructor
* @extends HttpConflictException
*/
var TemplateFtpIsOpenException = (function (_super) {
    __extends(TemplateFtpIsOpenException, _super);
    function TemplateFtpIsOpenException() {
        _super.apply(this, arguments);
    }
    TemplateFtpIsOpenException.defaultMessage = "要求された操作を行えません。テンプレートのFTP共有を終了後に実行してください。";
    return TemplateFtpIsOpenException;
})(HttpConflictException);
module.exports = TemplateFtpIsOpenException;
