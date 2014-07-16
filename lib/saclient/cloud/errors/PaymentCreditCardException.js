var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpPaymentRequiredException = require('./HttpPaymentRequiredException');

/**
* 要求を受け付けできません。クレジットカードの使用期限、利用限度額をご確認ください。
*
* @class PaymentCreditCardException
* @constructor
* @extends HttpPaymentRequiredException
*/
var PaymentCreditCardException = (function (_super) {
    __extends(PaymentCreditCardException, _super);
    function PaymentCreditCardException() {
        _super.apply(this, arguments);
    }
    PaymentCreditCardException.defaultMessage = "要求を受け付けできません。クレジットカードの使用期限、利用限度額をご確認ください。";
    return PaymentCreditCardException;
})(HttpPaymentRequiredException);
module.exports = PaymentCreditCardException;