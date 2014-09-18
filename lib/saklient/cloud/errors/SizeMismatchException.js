var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
* 不適切な要求です。参照するリソースのサイズが合致しません。
*/
var SizeMismatchException = (function (_super) {
    __extends(SizeMismatchException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function SizeMismatchException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    SizeMismatchException.defaultMessage = "不適切な要求です。参照するリソースのサイズが合致しません。";
    return SizeMismatchException;
})(HttpBadRequestException);
module.exports = SizeMismatchException;
