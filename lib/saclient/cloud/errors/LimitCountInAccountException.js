var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('./HttpConflictException');

/**
* 要求を受け付けできません。アカウントあたりのリソース数上限により、リソースの割り当てに失敗しました。
*
* @class LimitCountInAccountException
* @constructor
* @extends HttpConflictException
*/
var LimitCountInAccountException = (function (_super) {
    __extends(LimitCountInAccountException, _super);
    function LimitCountInAccountException() {
        _super.apply(this, arguments);
    }
    LimitCountInAccountException.defaultMessage = "要求を受け付けできません。アカウントあたりのリソース数上限により、リソースの割り当てに失敗しました。";
    return LimitCountInAccountException;
})(HttpConflictException);
module.exports = LimitCountInAccountException;
