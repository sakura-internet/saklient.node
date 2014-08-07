'use strict';
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
* @class PenaltyOperationException
* @constructor
* @extends HttpPaymentRequiredException
*/
var PenaltyOperationException = (function (_super) {
    __extends(PenaltyOperationException, _super);
    function PenaltyOperationException() {
        _super.apply(this, arguments);
    }
    PenaltyOperationException.defaultMessage = "お客様のご都合により操作を受け付けることができません。";
    return PenaltyOperationException;
})(HttpPaymentRequiredException);
module.exports = PenaltyOperationException;
