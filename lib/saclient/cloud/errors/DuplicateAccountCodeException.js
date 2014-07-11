var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('./HttpConflictException');

/**
* 要求された操作を行えません。同一アカウント名で複数のアカウントを作成することはできません。
*
* @class DuplicateAccountCodeException
* @constructor
* @extends HttpConflictException
*/
var DuplicateAccountCodeException = (function (_super) {
    __extends(DuplicateAccountCodeException, _super);
    function DuplicateAccountCodeException() {
        _super.apply(this, arguments);
    }
    DuplicateAccountCodeException.defaultMessage = "要求された操作を行えません。同一アカウント名で複数のアカウントを作成することはできません。";
    return DuplicateAccountCodeException;
})(HttpConflictException);
module.exports = DuplicateAccountCodeException;
