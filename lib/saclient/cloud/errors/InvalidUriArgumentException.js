var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpNotFoundException = require('./HttpNotFoundException');

/**
* 対象が見つかりません。パスに使用できない文字が含まれています。
*
* @class InvalidUriArgumentException
* @constructor
* @extends HttpNotFoundException
*/
var InvalidUriArgumentException = (function (_super) {
    __extends(InvalidUriArgumentException, _super);
    function InvalidUriArgumentException() {
        _super.apply(this, arguments);
    }
    InvalidUriArgumentException.defaultMessage = "対象が見つかりません。パスに使用できない文字が含まれています。";
    return InvalidUriArgumentException;
})(HttpNotFoundException);
module.exports = InvalidUriArgumentException;
