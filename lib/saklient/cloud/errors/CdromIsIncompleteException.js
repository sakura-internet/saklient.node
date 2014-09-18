var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。このISOイメージは不完全です。複製処理等の完了後に再度お試しください。
*/
var CdromIsIncompleteException = (function (_super) {
    __extends(CdromIsIncompleteException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function CdromIsIncompleteException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    CdromIsIncompleteException.defaultMessage = "要求された操作を行えません。このISOイメージは不完全です。複製処理等の完了後に再度お試しください。";
    return CdromIsIncompleteException;
})(HttpConflictException);
module.exports = CdromIsIncompleteException;
