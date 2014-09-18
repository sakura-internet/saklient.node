var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

'use strict';

/**
* 要求を受け付けできません。支払情報が未登録です。会員メニューから支払、クレジットカードの情報を登録してください
*/
var PaymentRegistrationException = (function (_super) {
    __extends(PaymentRegistrationException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function PaymentRegistrationException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "要求を受け付けできません。支払情報が未登録です。会員メニューから支払、クレジットカードの情報を登録してください" : message);
    }
    return PaymentRegistrationException;
})(HttpPaymentRequiredException);
module.exports = PaymentRegistrationException;
