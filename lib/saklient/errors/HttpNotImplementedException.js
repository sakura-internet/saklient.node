var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* HTTPエラー。Not Implemented.
*/
var HttpNotImplementedException = (function (_super) {
    __extends(HttpNotImplementedException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function HttpNotImplementedException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    HttpNotImplementedException.defaultMessage = "HTTPエラー。Not Implemented.";
    return HttpNotImplementedException;
})(HttpException);
module.exports = HttpNotImplementedException;