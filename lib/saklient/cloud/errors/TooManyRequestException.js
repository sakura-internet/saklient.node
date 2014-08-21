var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
* 要求を受け付けできません。リクエストの密度が高すぎます。
*/
var TooManyRequestException = (function (_super) {
    __extends(TooManyRequestException, _super);
    function TooManyRequestException() {
        _super.apply(this, arguments);
    }
    TooManyRequestException.defaultMessage = "要求を受け付けできません。リクエストの密度が高すぎます。";
    return TooManyRequestException;
})(HttpServiceUnavailableException);
module.exports = TooManyRequestException;
