var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。ファイルをアップロード後に実行してください。
*
* @class FileNotUploadedException
* @constructor
* @extends HttpConflictException
*/
var FileNotUploadedException = (function (_super) {
    __extends(FileNotUploadedException, _super);
    function FileNotUploadedException() {
        _super.apply(this, arguments);
    }
    FileNotUploadedException.defaultMessage = "要求された操作を行えません。ファイルをアップロード後に実行してください。";
    return FileNotUploadedException;
})(HttpConflictException);
module.exports = FileNotUploadedException;
