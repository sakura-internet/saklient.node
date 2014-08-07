'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。ConnectedなIPv6ネットワークが既に割り当て済みです。
*
* @class IpV6NetAlreadyAttachedException
* @constructor
* @extends HttpConflictException
*/
var IpV6NetAlreadyAttachedException = (function (_super) {
    __extends(IpV6NetAlreadyAttachedException, _super);
    function IpV6NetAlreadyAttachedException() {
        _super.apply(this, arguments);
    }
    IpV6NetAlreadyAttachedException.defaultMessage = "要求された操作を行えません。ConnectedなIPv6ネットワークが既に割り当て済みです。";
    return IpV6NetAlreadyAttachedException;
})(HttpConflictException);
module.exports = IpV6NetAlreadyAttachedException;
