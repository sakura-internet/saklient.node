'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。起動中のサーバに対して変更されたパケットフィルタを反映するタスクが既に実行中です。
*
* @class PacketFilterApplyingException
* @constructor
* @extends HttpConflictException
*/
var PacketFilterApplyingException = (function (_super) {
    __extends(PacketFilterApplyingException, _super);
    function PacketFilterApplyingException() {
        _super.apply(this, arguments);
    }
    PacketFilterApplyingException.defaultMessage = "要求された操作を行えません。起動中のサーバに対して変更されたパケットフィルタを反映するタスクが既に実行中です。";
    return PacketFilterApplyingException;
})(HttpConflictException);
module.exports = PacketFilterApplyingException;
