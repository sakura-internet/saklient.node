'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

/**
* サービスが利用できません。サーバを停止できません。再度お試しください。
*
* @class ServerCouldNotStopException
* @constructor
* @extends HttpServiceUnavailableException
*/
var ServerCouldNotStopException = (function (_super) {
    __extends(ServerCouldNotStopException, _super);
    function ServerCouldNotStopException() {
        _super.apply(this, arguments);
    }
    ServerCouldNotStopException.defaultMessage = "サービスが利用できません。サーバを停止できません。再度お試しください。";
    return ServerCouldNotStopException;
})(HttpServiceUnavailableException);
module.exports = ServerCouldNotStopException;
