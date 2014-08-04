var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

/**
* お客様のご都合により操作を受け付けることができません。
*
* @class PaymentUnpayableException
* @constructor
* @extends HttpPaymentRequiredException
*/
var PaymentUnpayableException = (function (_super) {
    __extends(PaymentUnpayableException, _super);
    function PaymentUnpayableException() {
        _super.apply(this, arguments);
    }
    PaymentUnpayableException.defaultMessage = "お客様のご都合により操作を受け付けることができません。";
    return PaymentUnpayableException;
})(HttpPaymentRequiredException);
module.exports = PaymentUnpayableException;
