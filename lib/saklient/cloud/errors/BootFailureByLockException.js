var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
* サービスが利用できません。サーバが予期せず終了したため、ロックされています。しばらく時間をおいてから再度お試しください。
*/
var BootFailureByLockException = (function (_super) {
    __extends(BootFailureByLockException, _super);
    function BootFailureByLockException() {
        _super.apply(this, arguments);
    }
    BootFailureByLockException.defaultMessage = "サービスが利用できません。サーバが予期せず終了したため、ロックされています。しばらく時間をおいてから再度お試しください。";
    return BootFailureByLockException;
})(HttpServiceUnavailableException);
module.exports = BootFailureByLockException;
