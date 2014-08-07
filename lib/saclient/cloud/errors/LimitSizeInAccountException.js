'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求を受け付けできません。アカウントあたりのリソースサイズ上限により、リソースの割り当てに失敗しました。
*
* @class LimitSizeInAccountException
* @constructor
* @extends HttpConflictException
*/
var LimitSizeInAccountException = (function (_super) {
    __extends(LimitSizeInAccountException, _super);
    function LimitSizeInAccountException() {
        _super.apply(this, arguments);
    }
    LimitSizeInAccountException.defaultMessage = "要求を受け付けできません。アカウントあたりのリソースサイズ上限により、リソースの割り当てに失敗しました。";
    return LimitSizeInAccountException;
})(HttpConflictException);
module.exports = LimitSizeInAccountException;
