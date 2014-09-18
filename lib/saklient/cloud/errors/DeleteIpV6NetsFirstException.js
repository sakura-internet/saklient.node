var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。ルータを削除する前に、IPv6ネットワークの割当を解除してください。
*/
var DeleteIpV6NetsFirstException = (function (_super) {
    __extends(DeleteIpV6NetsFirstException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function DeleteIpV6NetsFirstException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "要求された操作を行えません。ルータを削除する前に、IPv6ネットワークの割当を解除してください。" : message);
    }
    return DeleteIpV6NetsFirstException;
})(HttpConflictException);
module.exports = DeleteIpV6NetsFirstException;
