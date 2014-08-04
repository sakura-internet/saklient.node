var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

/**
* 要求を受け付けできません。支払情報が未登録です。会員メニューから支払、クレジットカードの情報を登録してください
*
* @class PaymentRegistrationException
* @constructor
* @extends HttpPaymentRequiredException
*/
var PaymentRegistrationException = (function (_super) {
    __extends(PaymentRegistrationException, _super);
    function PaymentRegistrationException() {
        _super.apply(this, arguments);
    }
    PaymentRegistrationException.defaultMessage = "要求を受け付けできません。支払情報が未登録です。会員メニューから支払、クレジットカードの情報を登録してください";
    return PaymentRegistrationException;
})(HttpPaymentRequiredException);
module.exports = PaymentRegistrationException;
