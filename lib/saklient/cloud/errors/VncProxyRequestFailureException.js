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
*/
var VncProxyRequestFailureException = (function (_super) {
    __extends(VncProxyRequestFailureException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function VncProxyRequestFailureException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    VncProxyRequestFailureException.defaultMessage = "サービスが利用できません。VNCプロクシの要求に失敗しました。";
    return VncProxyRequestFailureException;
})(HttpServiceUnavailableException);
module.exports = VncProxyRequestFailureException;
