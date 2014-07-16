var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

/**
* 要求された操作を行えません。現在の対象の状態では、この操作を受け付けできません。
*
* @class HttpConflictException
* @constructor
* @extends HttpException
*/
var HttpConflictException = (function (_super) {
    __extends(HttpConflictException, _super);
    function HttpConflictException() {
        _super.apply(this, arguments);
    }
    HttpConflictException.defaultMessage = "要求された操作を行えません。現在の対象の状態では、この操作を受け付けできません。";
    return HttpConflictException;
})(HttpException);
module.exports = HttpConflictException;