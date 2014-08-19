var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* 要求されたHTTPメソッドは対応していません。
*
* @class HttpMethodNotAllowedException
* @constructor
* @extends HttpException
*/
var HttpMethodNotAllowedException = (function (_super) {
    __extends(HttpMethodNotAllowedException, _super);
    function HttpMethodNotAllowedException() {
        _super.apply(this, arguments);
    }
    HttpMethodNotAllowedException.defaultMessage = "要求されたHTTPメソッドは対応していません。";
    return HttpMethodNotAllowedException;
})(HttpException);
module.exports = HttpMethodNotAllowedException;
