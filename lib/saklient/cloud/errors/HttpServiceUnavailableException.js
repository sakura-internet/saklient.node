var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

/**
* サービスが利用できません。対象は利用できない、またはサーバが混雑しています。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。
*
* @class HttpServiceUnavailableException
* @constructor
* @extends HttpException
*/
var HttpServiceUnavailableException = (function (_super) {
    __extends(HttpServiceUnavailableException, _super);
    function HttpServiceUnavailableException() {
        _super.apply(this, arguments);
    }
    HttpServiceUnavailableException.defaultMessage = "サービスが利用できません。対象は利用できない、またはサーバが混雑しています。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。";
    return HttpServiceUnavailableException;
})(HttpException);
module.exports = HttpServiceUnavailableException;
