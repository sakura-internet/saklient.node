var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
* サービスが利用できません。ストレージの操作に失敗しました。サーバが混雑している可能性があります。
*/
var StorageOperationFailureException = (function (_super) {
    __extends(StorageOperationFailureException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function StorageOperationFailureException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "サービスが利用できません。ストレージの操作に失敗しました。サーバが混雑している可能性があります。" : message);
    }
    return StorageOperationFailureException;
})(HttpServiceUnavailableException);
module.exports = StorageOperationFailureException;
