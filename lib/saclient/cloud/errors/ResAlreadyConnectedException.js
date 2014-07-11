var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('./HttpConflictException');

/**
* 要求された操作を行えません。このリソースは他のリソースと既に接続されています。
*
* @class ResAlreadyConnectedException
* @constructor
* @extends HttpConflictException
*/
var ResAlreadyConnectedException = (function (_super) {
    __extends(ResAlreadyConnectedException, _super);
    function ResAlreadyConnectedException() {
        _super.apply(this, arguments);
    }
    ResAlreadyConnectedException.defaultMessage = "要求された操作を行えません。このリソースは他のリソースと既に接続されています。";
    return ResAlreadyConnectedException;
})(HttpConflictException);
module.exports = ResAlreadyConnectedException;
