var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。このストレージ上への指定リソースの複製は実行されていません。
*/
var NotReplicatingException = (function (_super) {
    __extends(NotReplicatingException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function NotReplicatingException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    NotReplicatingException.defaultMessage = "要求された操作を行えません。このストレージ上への指定リソースの複製は実行されていません。";
    return NotReplicatingException;
})(HttpConflictException);
module.exports = NotReplicatingException;
