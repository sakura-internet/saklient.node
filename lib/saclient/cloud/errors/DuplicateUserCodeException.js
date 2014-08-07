'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。同一ユーザ名で複数のユーザを作成することはできません。
*
* @class DuplicateUserCodeException
* @constructor
* @extends HttpConflictException
*/
var DuplicateUserCodeException = (function (_super) {
    __extends(DuplicateUserCodeException, _super);
    function DuplicateUserCodeException() {
        _super.apply(this, arguments);
    }
    DuplicateUserCodeException.defaultMessage = "要求された操作を行えません。同一ユーザ名で複数のユーザを作成することはできません。";
    return DuplicateUserCodeException;
})(HttpConflictException);
module.exports = DuplicateUserCodeException;
