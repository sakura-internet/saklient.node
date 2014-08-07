var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpServiceUnavailableException = require('../../errors/HttpServiceUnavailableException');

'use strict';

/**
* 要求を受け付けできません。契約コードを発行することができません。メンテナンス情報、サポートサイトをご確認ください。
*
* @class ContractCreationException
* @constructor
* @extends HttpServiceUnavailableException
*/
var ContractCreationException = (function (_super) {
    __extends(ContractCreationException, _super);
    function ContractCreationException() {
        _super.apply(this, arguments);
    }
    ContractCreationException.defaultMessage = "要求を受け付けできません。契約コードを発行することができません。メンテナンス情報、サポートサイトをご確認ください。";
    return ContractCreationException;
})(HttpServiceUnavailableException);
module.exports = ContractCreationException;
