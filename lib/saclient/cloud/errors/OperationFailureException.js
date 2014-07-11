var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('./HttpServiceUnavailableException');

/**
* サービスが利用できません。操作に失敗しました。サーバが混雑している可能性があります。
*
* @class OperationFailureException
* @constructor
* @extends HttpServiceUnavailableException
*/
var OperationFailureException = (function (_super) {
    __extends(OperationFailureException, _super);
    function OperationFailureException() {
        _super.apply(this, arguments);
    }
    OperationFailureException.defaultMessage = "サービスが利用できません。操作に失敗しました。サーバが混雑している可能性があります。";
    return OperationFailureException;
})(HttpServiceUnavailableException);
module.exports = OperationFailureException;
