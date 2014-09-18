var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
* サービスが利用できません。操作に失敗しました。サーバが混雑している可能性があります。
*/
var OperationFailureException = (function (_super) {
    __extends(OperationFailureException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function OperationFailureException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "サービスが利用できません。操作に失敗しました。サーバが混雑している可能性があります。" : message);
    }
    return OperationFailureException;
})(HttpServiceUnavailableException);
module.exports = OperationFailureException;
