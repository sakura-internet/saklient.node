var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。オリジナルのデータを取得してからこのリクエストを行うまでの間に、他の変更が加わった可能性があります。
*
* @class OriginalHashMismatchException
* @constructor
* @extends HttpConflictException
*/
var OriginalHashMismatchException = (function (_super) {
    __extends(OriginalHashMismatchException, _super);
    function OriginalHashMismatchException() {
        _super.apply(this, arguments);
    }
    OriginalHashMismatchException.defaultMessage = "要求された操作を行えません。オリジナルのデータを取得してからこのリクエストを行うまでの間に、他の変更が加わった可能性があります。";
    return OriginalHashMismatchException;
})(HttpConflictException);
module.exports = OriginalHashMismatchException;
