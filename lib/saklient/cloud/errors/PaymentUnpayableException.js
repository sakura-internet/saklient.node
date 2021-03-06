var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpPaymentRequiredException = require('../../errors/HttpPaymentRequiredException');

'use strict';

/**
* お客様のご都合により操作を受け付けることができません。
*/
var PaymentUnpayableException = (function (_super) {
    __extends(PaymentUnpayableException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function PaymentUnpayableException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "お客様のご都合により操作を受け付けることができません。" : message);
    }
    return PaymentUnpayableException;
})(HttpPaymentRequiredException);
module.exports = PaymentUnpayableException;
