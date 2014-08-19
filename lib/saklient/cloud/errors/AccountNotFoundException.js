var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpBadRequestException = require('../../errors/HttpBadRequestException');

'use strict';

/**
* 不適切な要求です。アカウントが存在しません。IDをご確認ください。
*
* @class AccountNotFoundException
* @constructor
* @extends HttpBadRequestException
*/
var AccountNotFoundException = (function (_super) {
    __extends(AccountNotFoundException, _super);
    function AccountNotFoundException() {
        _super.apply(this, arguments);
    }
    AccountNotFoundException.defaultMessage = "不適切な要求です。アカウントが存在しません。IDをご確認ください。";
    return AccountNotFoundException;
})(HttpBadRequestException);
module.exports = AccountNotFoundException;
