var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* HTTPエラー。Insufficient Storage.
*/
var HttpInsufficientStorageException = (function (_super) {
    __extends(HttpInsufficientStorageException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function HttpInsufficientStorageException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    HttpInsufficientStorageException.defaultMessage = "HTTPエラー。Insufficient Storage.";
    return HttpInsufficientStorageException;
})(HttpException);
module.exports = HttpInsufficientStorageException;
