var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* 要求された操作は許可されていません。権限エラー。
*
* @class HttpForbiddenException
* @constructor
* @extends HttpException
*/
var HttpForbiddenException = (function (_super) {
    __extends(HttpForbiddenException, _super);
    function HttpForbiddenException() {
        _super.apply(this, arguments);
    }
    HttpForbiddenException.defaultMessage = "要求された操作は許可されていません。権限エラー。";
    return HttpForbiddenException;
})(HttpException);
module.exports = HttpForbiddenException;
