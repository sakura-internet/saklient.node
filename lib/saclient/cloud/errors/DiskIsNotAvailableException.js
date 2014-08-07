var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。ディスクが利用可能な状態ではありません。コピー処理等の完了後に再度お試しください。
*
* @class DiskIsNotAvailableException
* @constructor
* @extends HttpConflictException
*/
var DiskIsNotAvailableException = (function (_super) {
    __extends(DiskIsNotAvailableException, _super);
    function DiskIsNotAvailableException() {
        _super.apply(this, arguments);
    }
    DiskIsNotAvailableException.defaultMessage = "要求された操作を行えません。ディスクが利用可能な状態ではありません。コピー処理等の完了後に再度お試しください。";
    return DiskIsNotAvailableException;
})(HttpConflictException);
module.exports = DiskIsNotAvailableException;
