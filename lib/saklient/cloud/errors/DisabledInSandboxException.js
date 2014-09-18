var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
* 要求された操作は許可されていません。このゾーンではこの操作は禁止されています。他のゾーンでお試しください。
*/
var DisabledInSandboxException = (function (_super) {
    __extends(DisabledInSandboxException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function DisabledInSandboxException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    DisabledInSandboxException.defaultMessage = "要求された操作は許可されていません。このゾーンではこの操作は禁止されています。他のゾーンでお試しください。";
    return DisabledInSandboxException;
})(HttpForbiddenException);
module.exports = DisabledInSandboxException;
