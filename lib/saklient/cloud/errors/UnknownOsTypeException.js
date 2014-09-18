var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
* サービスが利用できません。ディスクにインストールされたOSが特定できないため、正しく修正できません。
*/
var UnknownOsTypeException = (function (_super) {
    __extends(UnknownOsTypeException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function UnknownOsTypeException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    UnknownOsTypeException.defaultMessage = "サービスが利用できません。ディスクにインストールされたOSが特定できないため、正しく修正できません。";
    return UnknownOsTypeException;
})(HttpServiceUnavailableException);
module.exports = UnknownOsTypeException;
