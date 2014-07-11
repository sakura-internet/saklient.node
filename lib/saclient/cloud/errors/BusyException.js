var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('./HttpServiceUnavailableException');

/**
* サービスが利用できません。サーバが混雑しています。しばらく時間をおいてから再度お試しください。
*
* @class BusyException
* @constructor
* @extends HttpServiceUnavailableException
*/
var BusyException = (function (_super) {
    __extends(BusyException, _super);
    function BusyException() {
        _super.apply(this, arguments);
    }
    BusyException.defaultMessage = "サービスが利用できません。サーバが混雑しています。しばらく時間をおいてから再度お試しください。";
    return BusyException;
})(HttpServiceUnavailableException);
module.exports = BusyException;
