var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

/**
* 不適切な要求です。対応するAAAAレコードが見つかりません。
*
* @class DnsAaaaRecordNotFoundException
* @constructor
* @extends HttpBadRequestException
*/
var DnsAaaaRecordNotFoundException = (function (_super) {
    __extends(DnsAaaaRecordNotFoundException, _super);
    function DnsAaaaRecordNotFoundException() {
        _super.apply(this, arguments);
    }
    DnsAaaaRecordNotFoundException.defaultMessage = "不適切な要求です。対応するAAAAレコードが見つかりません。";
    return DnsAaaaRecordNotFoundException;
})(HttpBadRequestException);
module.exports = DnsAaaaRecordNotFoundException;
