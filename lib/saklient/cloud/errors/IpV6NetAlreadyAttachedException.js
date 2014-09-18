var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。ConnectedなIPv6ネットワークが既に割り当て済みです。
*/
var IpV6NetAlreadyAttachedException = (function (_super) {
    __extends(IpV6NetAlreadyAttachedException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function IpV6NetAlreadyAttachedException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    IpV6NetAlreadyAttachedException.defaultMessage = "要求された操作を行えません。ConnectedなIPv6ネットワークが既に割り当て済みです。";
    return IpV6NetAlreadyAttachedException;
})(HttpConflictException);
module.exports = IpV6NetAlreadyAttachedException;
