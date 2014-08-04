var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

/**
* サービスが利用できません。ディスクにインストールされたOSが特定できないため、正しく修正できません。
*
* @class UnknownOsTypeException
* @constructor
* @extends HttpServiceUnavailableException
*/
var UnknownOsTypeException = (function (_super) {
    __extends(UnknownOsTypeException, _super);
    function UnknownOsTypeException() {
        _super.apply(this, arguments);
    }
    UnknownOsTypeException.defaultMessage = "サービスが利用できません。ディスクにインストールされたOSが特定できないため、正しく修正できません。";
    return UnknownOsTypeException;
})(HttpServiceUnavailableException);
module.exports = UnknownOsTypeException;
