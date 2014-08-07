'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

/**
* 不適切な要求です。対応するAレコードが見つかりません。
*
* @class DnsARecordNotFoundException
* @constructor
* @extends HttpBadRequestException
*/
var DnsARecordNotFoundException = (function (_super) {
    __extends(DnsARecordNotFoundException, _super);
    function DnsARecordNotFoundException() {
        _super.apply(this, arguments);
    }
    DnsARecordNotFoundException.defaultMessage = "不適切な要求です。対応するAレコードが見つかりません。";
    return DnsARecordNotFoundException;
})(HttpBadRequestException);
module.exports = DnsARecordNotFoundException;
