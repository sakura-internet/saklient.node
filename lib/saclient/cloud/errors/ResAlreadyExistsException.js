var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('./HttpConflictException');

/**
* 要求された操作を行えません。このIDのリソースは既に存在します。
*
* @class ResAlreadyExistsException
* @constructor
* @extends HttpConflictException
*/
var ResAlreadyExistsException = (function (_super) {
    __extends(ResAlreadyExistsException, _super);
    function ResAlreadyExistsException() {
        _super.apply(this, arguments);
    }
    ResAlreadyExistsException.defaultMessage = "要求された操作を行えません。このIDのリソースは既に存在します。";
    return ResAlreadyExistsException;
})(HttpConflictException);
module.exports = ResAlreadyExistsException;
