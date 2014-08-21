var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* HTTPエラー。Gone.
*/
var HttpGoneException = (function (_super) {
    __extends(HttpGoneException, _super);
    function HttpGoneException() {
        _super.apply(this, arguments);
    }
    HttpGoneException.defaultMessage = "HTTPエラー。Gone.";
    return HttpGoneException;
})(HttpException);
module.exports = HttpGoneException;
