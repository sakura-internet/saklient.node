var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。ハイブリッド接続と併用する場合はお問い合わせください。
*/
var NotWithHybridconnException = (function (_super) {
    __extends(NotWithHybridconnException, _super);
    function NotWithHybridconnException() {
        _super.apply(this, arguments);
    }
    NotWithHybridconnException.defaultMessage = "要求された操作を行えません。ハイブリッド接続と併用する場合はお問い合わせください。";
    return NotWithHybridconnException;
})(HttpConflictException);
module.exports = NotWithHybridconnException;
