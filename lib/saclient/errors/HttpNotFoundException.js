var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

/**
* 対象が見つかりません。対象は利用できない状態か、IDまたはパスに誤りがあります。
*
* @class HttpNotFoundException
* @constructor
* @extends HttpException
*/
var HttpNotFoundException = (function (_super) {
    __extends(HttpNotFoundException, _super);
    function HttpNotFoundException() {
        _super.apply(this, arguments);
    }
    HttpNotFoundException.defaultMessage = "対象が見つかりません。対象は利用できない状態か、IDまたはパスに誤りがあります。";
    return HttpNotFoundException;
})(HttpException);
module.exports = HttpNotFoundException;
