'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

/**
* サービスが利用できません。PTRレコードを設定できません。
*
* @class DnsPtrUpdateFailureException
* @constructor
* @extends HttpServiceUnavailableException
*/
var DnsPtrUpdateFailureException = (function (_super) {
    __extends(DnsPtrUpdateFailureException, _super);
    function DnsPtrUpdateFailureException() {
        _super.apply(this, arguments);
    }
    DnsPtrUpdateFailureException.defaultMessage = "サービスが利用できません。PTRレコードを設定できません。";
    return DnsPtrUpdateFailureException;
})(HttpServiceUnavailableException);
module.exports = DnsPtrUpdateFailureException;
