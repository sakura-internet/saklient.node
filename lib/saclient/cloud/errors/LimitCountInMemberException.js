var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求を受け付けできません。アカウント数上限により作成失敗しました。
*
* @class LimitCountInMemberException
* @constructor
* @extends HttpConflictException
*/
var LimitCountInMemberException = (function (_super) {
    __extends(LimitCountInMemberException, _super);
    function LimitCountInMemberException() {
        _super.apply(this, arguments);
    }
    LimitCountInMemberException.defaultMessage = "要求を受け付けできません。アカウント数上限により作成失敗しました。";
    return LimitCountInMemberException;
})(HttpConflictException);
module.exports = LimitCountInMemberException;
