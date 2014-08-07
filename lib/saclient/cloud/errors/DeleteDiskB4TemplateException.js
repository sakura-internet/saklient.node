'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。このテンプレートから作成したすべてのディスクを削除した後に実行してください。
*
* @class DeleteDiskB4TemplateException
* @constructor
* @extends HttpConflictException
*/
var DeleteDiskB4TemplateException = (function (_super) {
    __extends(DeleteDiskB4TemplateException, _super);
    function DeleteDiskB4TemplateException() {
        _super.apply(this, arguments);
    }
    DeleteDiskB4TemplateException.defaultMessage = "要求された操作を行えません。このテンプレートから作成したすべてのディスクを削除した後に実行してください。";
    return DeleteDiskB4TemplateException;
})(HttpConflictException);
module.exports = DeleteDiskB4TemplateException;
