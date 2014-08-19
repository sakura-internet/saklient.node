var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
* サービスが利用できません。VNCプロクシの要求に失敗しました。
*
* @class VncProxyRequestFailureException
* @constructor
* @extends HttpServiceUnavailableException
*/
var VncProxyRequestFailureException = (function (_super) {
    __extends(VncProxyRequestFailureException, _super);
    function VncProxyRequestFailureException() {
        _super.apply(this, arguments);
    }
    VncProxyRequestFailureException.defaultMessage = "サービスが利用できません。VNCプロクシの要求に失敗しました。";
    return VncProxyRequestFailureException;
})(HttpServiceUnavailableException);
module.exports = VncProxyRequestFailureException;
