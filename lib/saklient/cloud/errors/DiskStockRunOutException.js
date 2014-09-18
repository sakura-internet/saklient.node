var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
* サービスが利用できません。作成済みディスクを確保できませんでした。サーバが混雑している可能性があります。
*/
var DiskStockRunOutException = (function (_super) {
    __extends(DiskStockRunOutException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function DiskStockRunOutException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    DiskStockRunOutException.defaultMessage = "サービスが利用できません。作成済みディスクを確保できませんでした。サーバが混雑している可能性があります。";
    return DiskStockRunOutException;
})(HttpServiceUnavailableException);
module.exports = DiskStockRunOutException;
