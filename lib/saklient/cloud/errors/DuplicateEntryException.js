var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。リソースが既に存在するか、リソース同士が既に関連付けられています。
*
* @class DuplicateEntryException
* @constructor
* @extends HttpConflictException
*/
var DuplicateEntryException = (function (_super) {
    __extends(DuplicateEntryException, _super);
    function DuplicateEntryException() {
        _super.apply(this, arguments);
    }
    DuplicateEntryException.defaultMessage = "要求された操作を行えません。リソースが既に存在するか、リソース同士が既に関連付けられています。";
    return DuplicateEntryException;
})(HttpConflictException);
module.exports = DuplicateEntryException;
