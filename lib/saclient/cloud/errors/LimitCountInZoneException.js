var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('./HttpConflictException');

/**
* 要求を受け付けできません。ゾーン内リソース数上限により、リソースの割り当てに失敗しました。
*
* @class LimitCountInZoneException
* @constructor
* @extends HttpConflictException
*/
var LimitCountInZoneException = (function (_super) {
    __extends(LimitCountInZoneException, _super);
    function LimitCountInZoneException() {
        _super.apply(this, arguments);
    }
    LimitCountInZoneException.defaultMessage = "要求を受け付けできません。ゾーン内リソース数上限により、リソースの割り当てに失敗しました。";
    return LimitCountInZoneException;
})(HttpConflictException);
module.exports = LimitCountInZoneException;
