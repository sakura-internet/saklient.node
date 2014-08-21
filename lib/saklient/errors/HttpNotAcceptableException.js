var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* 要求を受け付けできません。サポートサイトやメンテナンス情報をご確認ください。
*/
var HttpNotAcceptableException = (function (_super) {
    __extends(HttpNotAcceptableException, _super);
    function HttpNotAcceptableException() {
        _super.apply(this, arguments);
    }
    HttpNotAcceptableException.defaultMessage = "要求を受け付けできません。サポートサイトやメンテナンス情報をご確認ください。";
    return HttpNotAcceptableException;
})(HttpException);
module.exports = HttpNotAcceptableException;
