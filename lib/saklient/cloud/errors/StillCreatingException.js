var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。リソースの作成処理が進行中です。完了後に再度お試しください。
*
* @class StillCreatingException
* @constructor
* @extends HttpConflictException
*/
var StillCreatingException = (function (_super) {
    __extends(StillCreatingException, _super);
    function StillCreatingException() {
        _super.apply(this, arguments);
    }
    StillCreatingException.defaultMessage = "要求された操作を行えません。リソースの作成処理が進行中です。完了後に再度お試しください。";
    return StillCreatingException;
})(HttpConflictException);
module.exports = StillCreatingException;
