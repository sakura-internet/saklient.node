var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。リソースの作成処理が進行中です。完了後に再度お試しください。
*/
var StillCreatingException = (function (_super) {
    __extends(StillCreatingException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function StillCreatingException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    StillCreatingException.defaultMessage = "要求された操作を行えません。リソースの作成処理が進行中です。完了後に再度お試しください。";
    return StillCreatingException;
})(HttpConflictException);
module.exports = StillCreatingException;
