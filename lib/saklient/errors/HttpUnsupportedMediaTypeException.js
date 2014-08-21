var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* HTTPエラー。Unsupported Media Type.
*/
var HttpUnsupportedMediaTypeException = (function (_super) {
    __extends(HttpUnsupportedMediaTypeException, _super);
    function HttpUnsupportedMediaTypeException() {
        _super.apply(this, arguments);
    }
    HttpUnsupportedMediaTypeException.defaultMessage = "HTTPエラー。Unsupported Media Type.";
    return HttpUnsupportedMediaTypeException;
})(HttpException);
module.exports = HttpUnsupportedMediaTypeException;
