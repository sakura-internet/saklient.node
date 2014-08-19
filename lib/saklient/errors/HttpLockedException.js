var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* HTTPエラー。Locked.
*
* @class HttpLockedException
* @constructor
* @extends HttpException
*/
var HttpLockedException = (function (_super) {
    __extends(HttpLockedException, _super);
    function HttpLockedException() {
        _super.apply(this, arguments);
    }
    HttpLockedException.defaultMessage = "HTTPエラー。Locked.";
    return HttpLockedException;
})(HttpException);
module.exports = HttpLockedException;
