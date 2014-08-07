var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
* サービスが利用できません。この機能は一時的に利用できない状態にあります。メンテナンス情報、サポートサイトをご確認ください。
*
* @class ServiceTemporarilyUnavailableException
* @constructor
* @extends HttpServiceUnavailableException
*/
var ServiceTemporarilyUnavailableException = (function (_super) {
    __extends(ServiceTemporarilyUnavailableException, _super);
    function ServiceTemporarilyUnavailableException() {
        _super.apply(this, arguments);
    }
    ServiceTemporarilyUnavailableException.defaultMessage = "サービスが利用できません。この機能は一時的に利用できない状態にあります。メンテナンス情報、サポートサイトをご確認ください。";
    return ServiceTemporarilyUnavailableException;
})(HttpServiceUnavailableException);
module.exports = ServiceTemporarilyUnavailableException;
