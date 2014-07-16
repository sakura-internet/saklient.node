var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('./HttpConflictException');

/**
* 要求を受け付けできません。ルータあたりのリソース数上限により、リソースの割り当てに失敗しました。
*
* @class LimitCountInRouterException
* @constructor
* @extends HttpConflictException
*/
var LimitCountInRouterException = (function (_super) {
    __extends(LimitCountInRouterException, _super);
    function LimitCountInRouterException() {
        _super.apply(this, arguments);
    }
    LimitCountInRouterException.defaultMessage = "要求を受け付けできません。ルータあたりのリソース数上限により、リソースの割り当てに失敗しました。";
    return LimitCountInRouterException;
})(HttpConflictException);
module.exports = LimitCountInRouterException;