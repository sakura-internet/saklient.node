var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

'use strict';

/**
* 要求を受け付けできません。クレジットカードの使用期限、利用限度額をご確認ください。
*/
var PaymentCreditCardException = (function (_super) {
    __extends(PaymentCreditCardException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function PaymentCreditCardException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    PaymentCreditCardException.defaultMessage = "要求を受け付けできません。クレジットカードの使用期限、利用限度額をご確認ください。";
    return PaymentCreditCardException;
})(HttpPaymentRequiredException);
module.exports = PaymentCreditCardException;
