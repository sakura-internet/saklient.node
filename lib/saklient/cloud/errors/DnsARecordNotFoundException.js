var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
* 不適切な要求です。対応するAレコードが見つかりません。
*/
var DnsARecordNotFoundException = (function (_super) {
    __extends(DnsARecordNotFoundException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function DnsARecordNotFoundException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "不適切な要求です。対応するAレコードが見つかりません。" : message);
    }
    return DnsARecordNotFoundException;
})(HttpBadRequestException);
module.exports = DnsARecordNotFoundException;
