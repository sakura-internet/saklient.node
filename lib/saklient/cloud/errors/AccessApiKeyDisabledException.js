var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
* 要求された操作は許可されていません。APIキーによるアクセスはできません。
*
* @class AccessApiKeyDisabledException
* @constructor
* @extends HttpForbiddenException
*/
var AccessApiKeyDisabledException = (function (_super) {
    __extends(AccessApiKeyDisabledException, _super);
    function AccessApiKeyDisabledException() {
        _super.apply(this, arguments);
    }
    AccessApiKeyDisabledException.defaultMessage = "要求された操作は許可されていません。APIキーによるアクセスはできません。";
    return AccessApiKeyDisabledException;
})(HttpForbiddenException);
module.exports = AccessApiKeyDisabledException;
