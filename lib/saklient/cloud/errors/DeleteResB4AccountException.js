var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。現在のアカウントで使用している全てのリソースを削除した後に実行してください。
*/
var DeleteResB4AccountException = (function (_super) {
    __extends(DeleteResB4AccountException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function DeleteResB4AccountException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "要求された操作を行えません。現在のアカウントで使用している全てのリソースを削除した後に実行してください。" : message);
    }
    return DeleteResB4AccountException;
})(HttpConflictException);
module.exports = DeleteResB4AccountException;
