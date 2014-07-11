var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('./HttpConflictException');

/**
* 要求された操作を行えません。このストレージには指定リソースの複製が既に存在します。
*
* @class ReplicaAlreadyExistsException
* @constructor
* @extends HttpConflictException
*/
var ReplicaAlreadyExistsException = (function (_super) {
    __extends(ReplicaAlreadyExistsException, _super);
    function ReplicaAlreadyExistsException() {
        _super.apply(this, arguments);
    }
    ReplicaAlreadyExistsException.defaultMessage = "要求された操作を行えません。このストレージには指定リソースの複製が既に存在します。";
    return ReplicaAlreadyExistsException;
})(HttpConflictException);
module.exports = ReplicaAlreadyExistsException;
