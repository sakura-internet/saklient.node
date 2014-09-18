var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
* サービスが利用できません。PTRレコードを設定できません。
*/
var DnsPtrUpdateFailureException = (function (_super) {
    __extends(DnsPtrUpdateFailureException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function DnsPtrUpdateFailureException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "サービスが利用できません。PTRレコードを設定できません。" : message);
    }
    return DnsPtrUpdateFailureException;
})(HttpServiceUnavailableException);
module.exports = DnsPtrUpdateFailureException;
