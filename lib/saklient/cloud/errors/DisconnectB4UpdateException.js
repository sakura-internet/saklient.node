var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。サーバと接続された状態では変更できない値が含まれています。
*/
var DisconnectB4UpdateException = (function (_super) {
    __extends(DisconnectB4UpdateException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function DisconnectB4UpdateException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    DisconnectB4UpdateException.defaultMessage = "要求された操作を行えません。サーバと接続された状態では変更できない値が含まれています。";
    return DisconnectB4UpdateException;
})(HttpConflictException);
module.exports = DisconnectB4UpdateException;
