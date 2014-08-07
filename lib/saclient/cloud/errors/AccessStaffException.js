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
*
* @class AccessStaffException
* @constructor
* @extends HttpForbiddenException
*/
var AccessStaffException = (function (_super) {
    __extends(AccessStaffException, _super);
    function AccessStaffException() {
        _super.apply(this, arguments);
    }
    AccessStaffException.defaultMessage = "要求された操作は許可されていません。権限エラー。";
    return AccessStaffException;
})(HttpForbiddenException);
module.exports = AccessStaffException;
