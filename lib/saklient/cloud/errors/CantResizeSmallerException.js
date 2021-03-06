var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
* 不適切な要求です。現在の容量よりも小さくリサイズすることはできません。
*/
var CantResizeSmallerException = (function (_super) {
    __extends(CantResizeSmallerException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function CantResizeSmallerException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "不適切な要求です。現在の容量よりも小さくリサイズすることはできません。" : message);
    }
    return CantResizeSmallerException;
})(HttpBadRequestException);
module.exports = CantResizeSmallerException;
