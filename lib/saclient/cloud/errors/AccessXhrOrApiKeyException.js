var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpForbiddenException = require('../../errors/HttpForbiddenException');

'use strict';

/**
* 要求された操作は許可されていません。XHRまたはAPIキーによるアクセスのみ許可されています。
*
* @class AccessXhrOrApiKeyException
* @constructor
* @extends HttpForbiddenException
*/
var AccessXhrOrApiKeyException = (function (_super) {
    __extends(AccessXhrOrApiKeyException, _super);
    function AccessXhrOrApiKeyException() {
        _super.apply(this, arguments);
    }
    AccessXhrOrApiKeyException.defaultMessage = "要求された操作は許可されていません。XHRまたはAPIキーによるアクセスのみ許可されています。";
    return AccessXhrOrApiKeyException;
})(HttpForbiddenException);
module.exports = AccessXhrOrApiKeyException;
