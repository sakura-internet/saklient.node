var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

'use strict';

/**
* 要求を受け付けできません。電話認証を先に実行してください。
*/
var PaymentTelCertificationException = (function (_super) {
    __extends(PaymentTelCertificationException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function PaymentTelCertificationException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    PaymentTelCertificationException.defaultMessage = "要求を受け付けできません。電話認証を先に実行してください。";
    return PaymentTelCertificationException;
})(HttpPaymentRequiredException);
module.exports = PaymentTelCertificationException;
