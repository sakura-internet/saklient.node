var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('./HttpConflictException');

/**
* 要求された操作を行えません。ISOイメージが無効化されています。排出後に再度お試しください。
*
* @class CdromDisabledException
* @constructor
* @extends HttpConflictException
*/
var CdromDisabledException = (function (_super) {
    __extends(CdromDisabledException, _super);
    function CdromDisabledException() {
        _super.apply(this, arguments);
    }
    CdromDisabledException.defaultMessage = "要求された操作を行えません。ISOイメージが無効化されています。排出後に再度お試しください。";
    return CdromDisabledException;
})(HttpConflictException);
module.exports = CdromDisabledException;