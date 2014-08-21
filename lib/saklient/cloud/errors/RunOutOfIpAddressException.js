var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。指定されたネットワークに属するIPアドレスはすべて使用中です。
*/
var RunOutOfIpAddressException = (function (_super) {
    __extends(RunOutOfIpAddressException, _super);
    function RunOutOfIpAddressException() {
        _super.apply(this, arguments);
    }
    RunOutOfIpAddressException.defaultMessage = "要求された操作を行えません。指定されたネットワークに属するIPアドレスはすべて使用中です。";
    return RunOutOfIpAddressException;
})(HttpConflictException);
module.exports = RunOutOfIpAddressException;
