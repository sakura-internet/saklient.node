var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。ハイブリッド接続されているスイッチに対して、この操作はできません。
*/
var SwitchHybridConnectedException = (function (_super) {
    __extends(SwitchHybridConnectedException, _super);
    function SwitchHybridConnectedException() {
        _super.apply(this, arguments);
    }
    SwitchHybridConnectedException.defaultMessage = "要求された操作を行えません。ハイブリッド接続されているスイッチに対して、この操作はできません。";
    return SwitchHybridConnectedException;
})(HttpConflictException);
module.exports = SwitchHybridConnectedException;
