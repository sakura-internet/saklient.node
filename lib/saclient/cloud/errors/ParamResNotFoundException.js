var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('./HttpBadRequestException');

/**
* 不適切な要求です。パラメータで指定されたリソースが存在しません。IDをご確認ください。
*
* @class ParamResNotFoundException
* @constructor
* @extends HttpBadRequestException
*/
var ParamResNotFoundException = (function (_super) {
    __extends(ParamResNotFoundException, _super);
    function ParamResNotFoundException() {
        _super.apply(this, arguments);
    }
    ParamResNotFoundException.defaultMessage = "不適切な要求です。パラメータで指定されたリソースが存在しません。IDをご確認ください。";
    return ParamResNotFoundException;
})(HttpBadRequestException);
module.exports = ParamResNotFoundException;
