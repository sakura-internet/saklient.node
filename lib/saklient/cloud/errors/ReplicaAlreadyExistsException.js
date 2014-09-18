var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。このストレージには指定リソースの複製が既に存在します。
*/
var ReplicaAlreadyExistsException = (function (_super) {
    __extends(ReplicaAlreadyExistsException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function ReplicaAlreadyExistsException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "要求された操作を行えません。このストレージには指定リソースの複製が既に存在します。" : message);
    }
    return ReplicaAlreadyExistsException;
})(HttpConflictException);
module.exports = ReplicaAlreadyExistsException;
