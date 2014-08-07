'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。このテンプレートは不完全です。複製処理等の完了後に再度お試しください。
*
* @class TemplateIsIncompleteException
* @constructor
* @extends HttpConflictException
*/
var TemplateIsIncompleteException = (function (_super) {
    __extends(TemplateIsIncompleteException, _super);
    function TemplateIsIncompleteException() {
        _super.apply(this, arguments);
    }
    TemplateIsIncompleteException.defaultMessage = "要求された操作を行えません。このテンプレートは不完全です。複製処理等の完了後に再度お試しください。";
    return TemplateIsIncompleteException;
})(HttpConflictException);
module.exports = TemplateIsIncompleteException;
