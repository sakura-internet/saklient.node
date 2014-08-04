var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求を受け付けできません。アカウントあたりの全サーバメモリサイズ上限により、リソースの割り当てに失敗しました。
*
* @class LimitMemoryInAccountException
* @constructor
* @extends HttpConflictException
*/
var LimitMemoryInAccountException = (function (_super) {
    __extends(LimitMemoryInAccountException, _super);
    function LimitMemoryInAccountException() {
        _super.apply(this, arguments);
    }
    LimitMemoryInAccountException.defaultMessage = "要求を受け付けできません。アカウントあたりの全サーバメモリサイズ上限により、リソースの割り当てに失敗しました。";
    return LimitMemoryInAccountException;
})(HttpConflictException);
module.exports = LimitMemoryInAccountException;
