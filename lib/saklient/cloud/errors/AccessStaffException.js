var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
* 要求された操作は許可されていません。権限エラー。
*/
var AccessStaffException = (function (_super) {
    __extends(AccessStaffException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function AccessStaffException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "要求された操作は許可されていません。権限エラー。" : message);
    }
    return AccessStaffException;
})(HttpForbiddenException);
module.exports = AccessStaffException;
