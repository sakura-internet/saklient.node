var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求を受け付けできません。ゾーン内リソース数上限により、リソースの割り当てに失敗しました。
*/
var LimitCountInZoneException = (function (_super) {
    __extends(LimitCountInZoneException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function LimitCountInZoneException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    LimitCountInZoneException.defaultMessage = "要求を受け付けできません。ゾーン内リソース数上限により、リソースの割り当てに失敗しました。";
    return LimitCountInZoneException;
})(HttpConflictException);
module.exports = LimitCountInZoneException;
