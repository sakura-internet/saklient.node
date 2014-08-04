var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。ライセンスの問題により、組み合わせて使用できないディスクが接続されています。
*
* @class DiskLicenseMismatchException
* @constructor
* @extends HttpConflictException
*/
var DiskLicenseMismatchException = (function (_super) {
    __extends(DiskLicenseMismatchException, _super);
    function DiskLicenseMismatchException() {
        _super.apply(this, arguments);
    }
    DiskLicenseMismatchException.defaultMessage = "要求された操作を行えません。ライセンスの問題により、組み合わせて使用できないディスクが接続されています。";
    return DiskLicenseMismatchException;
})(HttpConflictException);
module.exports = DiskLicenseMismatchException;
