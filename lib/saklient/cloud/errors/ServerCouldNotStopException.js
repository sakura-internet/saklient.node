var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
* サービスが利用できません。サーバを停止できません。再度お試しください。
*/
var ServerCouldNotStopException = (function (_super) {
    __extends(ServerCouldNotStopException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function ServerCouldNotStopException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    ServerCouldNotStopException.defaultMessage = "サービスが利用できません。サーバを停止できません。再度お試しください。";
    return ServerCouldNotStopException;
})(HttpServiceUnavailableException);
module.exports = ServerCouldNotStopException;
