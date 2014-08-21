var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。このリソースは既に切断されています。
*/
var ResAlreadyDisconnectedException = (function (_super) {
    __extends(ResAlreadyDisconnectedException, _super);
    function ResAlreadyDisconnectedException() {
        _super.apply(this, arguments);
    }
    ResAlreadyDisconnectedException.defaultMessage = "要求された操作を行えません。このリソースは既に切断されています。";
    return ResAlreadyDisconnectedException;
})(HttpConflictException);
module.exports = ResAlreadyDisconnectedException;
