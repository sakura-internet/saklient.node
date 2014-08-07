var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。ISOイメージをサーバから排出後に実行してください。
*
* @class CdromInUseException
* @constructor
* @extends HttpConflictException
*/
var CdromInUseException = (function (_super) {
    __extends(CdromInUseException, _super);
    function CdromInUseException() {
        _super.apply(this, arguments);
    }
    CdromInUseException.defaultMessage = "要求された操作を行えません。ISOイメージをサーバから排出後に実行してください。";
    return CdromInUseException;
})(HttpConflictException);
module.exports = CdromInUseException;
