var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpNotFoundException = require('../../errors/HttpNotFoundException');

'use strict';

/**
* 対象が見つかりません。パスに使用できない文字が含まれています。
*/
var InvalidUriArgumentException = (function (_super) {
    __extends(InvalidUriArgumentException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function InvalidUriArgumentException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "対象が見つかりません。パスに使用できない文字が含まれています。" : message);
    }
    return InvalidUriArgumentException;
})(HttpNotFoundException);
module.exports = InvalidUriArgumentException;
