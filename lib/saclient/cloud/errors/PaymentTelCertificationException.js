'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

/**
* 要求を受け付けできません。電話認証を先に実行してください。
*
* @class PaymentTelCertificationException
* @constructor
* @extends HttpPaymentRequiredException
*/
var PaymentTelCertificationException = (function (_super) {
    __extends(PaymentTelCertificationException, _super);
    function PaymentTelCertificationException() {
        _super.apply(this, arguments);
    }
    PaymentTelCertificationException.defaultMessage = "要求を受け付けできません。電話認証を先に実行してください。";
    return PaymentTelCertificationException;
})(HttpPaymentRequiredException);
module.exports = PaymentTelCertificationException;
