'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。CD-ROMドライブがロックされています。
*
* @class CdromDeviceLockedException
* @constructor
* @extends HttpConflictException
*/
var CdromDeviceLockedException = (function (_super) {
    __extends(CdromDeviceLockedException, _super);
    function CdromDeviceLockedException() {
        _super.apply(this, arguments);
    }
    CdromDeviceLockedException.defaultMessage = "要求された操作を行えません。CD-ROMドライブがロックされています。";
    return CdromDeviceLockedException;
})(HttpConflictException);
module.exports = CdromDeviceLockedException;
