var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求を受け付けできません。ネットワーク内リソース数上限により、リソースの割り当てに失敗しました。
*/
var LimitCountInNetworkException = (function (_super) {
    __extends(LimitCountInNetworkException, _super);
    function LimitCountInNetworkException() {
        _super.apply(this, arguments);
    }
    LimitCountInNetworkException.defaultMessage = "要求を受け付けできません。ネットワーク内リソース数上限により、リソースの割り当てに失敗しました。";
    return LimitCountInNetworkException;
})(HttpConflictException);
module.exports = LimitCountInNetworkException;
