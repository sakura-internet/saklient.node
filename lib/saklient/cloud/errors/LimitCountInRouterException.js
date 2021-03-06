var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求を受け付けできません。ルータあたりのリソース数上限により、リソースの割り当てに失敗しました。
*/
var LimitCountInRouterException = (function (_super) {
    __extends(LimitCountInRouterException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function LimitCountInRouterException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "要求を受け付けできません。ルータあたりのリソース数上限により、リソースの割り当てに失敗しました。" : message);
    }
    return LimitCountInRouterException;
})(HttpConflictException);
module.exports = LimitCountInRouterException;
