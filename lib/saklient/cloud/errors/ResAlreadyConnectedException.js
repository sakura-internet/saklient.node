var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。このリソースは他のリソースと既に接続されています。
*/
var ResAlreadyConnectedException = (function (_super) {
    __extends(ResAlreadyConnectedException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function ResAlreadyConnectedException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "要求された操作を行えません。このリソースは他のリソースと既に接続されています。" : message);
    }
    return ResAlreadyConnectedException;
})(HttpConflictException);
module.exports = ResAlreadyConnectedException;
