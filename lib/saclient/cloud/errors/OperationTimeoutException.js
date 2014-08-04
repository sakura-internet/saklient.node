var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

/**
* サービスが利用できません。操作がタイムアウトしました。サーバが混雑している可能性があります。
*
* @class OperationTimeoutException
* @constructor
* @extends HttpServiceUnavailableException
*/
var OperationTimeoutException = (function (_super) {
    __extends(OperationTimeoutException, _super);
    function OperationTimeoutException() {
        _super.apply(this, arguments);
    }
    OperationTimeoutException.defaultMessage = "サービスが利用できません。操作がタイムアウトしました。サーバが混雑している可能性があります。";
    return OperationTimeoutException;
})(HttpServiceUnavailableException);
module.exports = OperationTimeoutException;
