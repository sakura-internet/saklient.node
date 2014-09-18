var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* HTTPエラー。Http Version Not Supported.
*/
var HttpHttpVersionNotSupportedException = (function (_super) {
    __extends(HttpHttpVersionNotSupportedException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function HttpHttpVersionNotSupportedException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    HttpHttpVersionNotSupportedException.defaultMessage = "HTTPエラー。Http Version Not Supported.";
    return HttpHttpVersionNotSupportedException;
})(HttpException);
module.exports = HttpHttpVersionNotSupportedException;
