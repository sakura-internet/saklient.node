'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。ルータを削除する前に、IPv6ネットワークの割当を解除してください。
*
* @class DeleteIpV6NetsFirstException
* @constructor
* @extends HttpConflictException
*/
var DeleteIpV6NetsFirstException = (function (_super) {
    __extends(DeleteIpV6NetsFirstException, _super);
    function DeleteIpV6NetsFirstException() {
        _super.apply(this, arguments);
    }
    DeleteIpV6NetsFirstException.defaultMessage = "要求された操作を行えません。ルータを削除する前に、IPv6ネットワークの割当を解除してください。";
    return DeleteIpV6NetsFirstException;
})(HttpConflictException);
module.exports = DeleteIpV6NetsFirstException;
