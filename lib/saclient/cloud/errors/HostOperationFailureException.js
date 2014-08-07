'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

/**
* サービスが利用できません。サーバの操作に失敗しました。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。
*
* @class HostOperationFailureException
* @constructor
* @extends HttpServiceUnavailableException
*/
var HostOperationFailureException = (function (_super) {
    __extends(HostOperationFailureException, _super);
    function HostOperationFailureException() {
        _super.apply(this, arguments);
    }
    HostOperationFailureException.defaultMessage = "サービスが利用できません。サーバの操作に失敗しました。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。";
    return HostOperationFailureException;
})(HttpServiceUnavailableException);
module.exports = HostOperationFailureException;
