var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpNotFoundException = require('../../errors/HttpNotFoundException');

'use strict';

/**
* 対象が見つかりません。識別名から一意にリソースを特定できません。
*/
var AmbiguousIdentifierException = (function (_super) {
    __extends(AmbiguousIdentifierException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function AmbiguousIdentifierException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "対象が見つかりません。識別名から一意にリソースを特定できません。" : message);
    }
    return AmbiguousIdentifierException;
})(HttpNotFoundException);
module.exports = AmbiguousIdentifierException;
