var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。同一ゾーン内の他のリソースが既にこのリソースを使用中です。
*/
var ResUsedInZoneException = (function (_super) {
    __extends(ResUsedInZoneException, _super);
    function ResUsedInZoneException() {
        _super.apply(this, arguments);
    }
    ResUsedInZoneException.defaultMessage = "要求された操作を行えません。同一ゾーン内の他のリソースが既にこのリソースを使用中です。";
    return ResUsedInZoneException;
})(HttpConflictException);
module.exports = ResUsedInZoneException;
