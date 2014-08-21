var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* HTTPエラー。Length Required.
*/
var HttpLengthRequiredException = (function (_super) {
    __extends(HttpLengthRequiredException, _super);
    function HttpLengthRequiredException() {
        _super.apply(this, arguments);
    }
    HttpLengthRequiredException.defaultMessage = "HTTPエラー。Length Required.";
    return HttpLengthRequiredException;
})(HttpException);
module.exports = HttpLengthRequiredException;
