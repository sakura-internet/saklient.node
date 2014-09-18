var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。このテンプレートから作成したすべてのディスクを削除した後に実行してください。
*/
var DeleteDiskB4TemplateException = (function (_super) {
    __extends(DeleteDiskB4TemplateException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function DeleteDiskB4TemplateException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    DeleteDiskB4TemplateException.defaultMessage = "要求された操作を行えません。このテンプレートから作成したすべてのディスクを削除した後に実行してください。";
    return DeleteDiskB4TemplateException;
})(HttpConflictException);
module.exports = DeleteDiskB4TemplateException;
