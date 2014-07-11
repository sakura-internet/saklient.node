var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('./HttpServiceUnavailableException');

/**
* サービスが利用できません。ストレージが問題が発生している可能性があります。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。
*
* @class StorageAbnormalException
* @constructor
* @extends HttpServiceUnavailableException
*/
var StorageAbnormalException = (function (_super) {
    __extends(StorageAbnormalException, _super);
    function StorageAbnormalException() {
        _super.apply(this, arguments);
    }
    StorageAbnormalException.defaultMessage = "サービスが利用できません。ストレージが問題が発生している可能性があります。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。";
    return StorageAbnormalException;
})(HttpServiceUnavailableException);
module.exports = StorageAbnormalException;
