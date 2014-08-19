var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

/**
* HTTPエラー。Insufficient Storage.
*
* @class HttpInsufficientStorageException
* @constructor
* @extends HttpException
*/
var HttpInsufficientStorageException = (function (_super) {
    __extends(HttpInsufficientStorageException, _super);
    function HttpInsufficientStorageException() {
        _super.apply(this, arguments);
    }
    HttpInsufficientStorageException.defaultMessage = "HTTPエラー。Insufficient Storage.";
    return HttpInsufficientStorageException;
})(HttpException);
module.exports = HttpInsufficientStorageException;
