var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。このストレージ上への指定リソースの複製は実行されていません。
*
* @class NotReplicatingException
* @constructor
* @extends HttpConflictException
*/
var NotReplicatingException = (function (_super) {
    __extends(NotReplicatingException, _super);
    function NotReplicatingException() {
        _super.apply(this, arguments);
    }
    NotReplicatingException.defaultMessage = "要求された操作を行えません。このストレージ上への指定リソースの複製は実行されていません。";
    return NotReplicatingException;
})(HttpConflictException);
module.exports = NotReplicatingException;
