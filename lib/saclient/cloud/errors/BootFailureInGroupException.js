var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('./HttpServiceUnavailableException');

/**
* サービスが利用できません。サーバ起動グループ指定に問題がある可能性があります。
*
* @class BootFailureInGroupException
* @constructor
* @extends HttpServiceUnavailableException
*/
var BootFailureInGroupException = (function (_super) {
    __extends(BootFailureInGroupException, _super);
    function BootFailureInGroupException() {
        _super.apply(this, arguments);
    }
    BootFailureInGroupException.defaultMessage = "サービスが利用できません。サーバ起動グループ指定に問題がある可能性があります。";
    return BootFailureInGroupException;
})(HttpServiceUnavailableException);
module.exports = BootFailureInGroupException;
