var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('./HttpServiceUnavailableException');

/**
* サービスが利用できません。ストレージの操作に失敗しました。サーバが混雑している可能性があります。
*
* @class StorageOperationFailureException
* @constructor
* @extends HttpServiceUnavailableException
*/
var StorageOperationFailureException = (function (_super) {
    __extends(StorageOperationFailureException, _super);
    function StorageOperationFailureException() {
        _super.apply(this, arguments);
    }
    StorageOperationFailureException.defaultMessage = "サービスが利用できません。ストレージの操作に失敗しました。サーバが混雑している可能性があります。";
    return StorageOperationFailureException;
})(HttpServiceUnavailableException);
module.exports = StorageOperationFailureException;
