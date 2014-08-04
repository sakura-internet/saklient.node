var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

/**
* サービスが利用できません。サーバの画面が応答していません。
*
* @class NoDisplayResponseException
* @constructor
* @extends HttpServiceUnavailableException
*/
var NoDisplayResponseException = (function (_super) {
    __extends(NoDisplayResponseException, _super);
    function NoDisplayResponseException() {
        _super.apply(this, arguments);
    }
    NoDisplayResponseException.defaultMessage = "サービスが利用できません。サーバの画面が応答していません。";
    return NoDisplayResponseException;
})(HttpServiceUnavailableException);
module.exports = NoDisplayResponseException;
