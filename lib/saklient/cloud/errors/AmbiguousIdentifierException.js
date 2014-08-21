var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpNotFoundException = require('../../errors/HttpNotFoundException');

'use strict';

/**
* 対象が見つかりません。識別名から一意にリソースを特定できません。
*/
var AmbiguousIdentifierException = (function (_super) {
    __extends(AmbiguousIdentifierException, _super);
    function AmbiguousIdentifierException() {
        _super.apply(this, arguments);
    }
    AmbiguousIdentifierException.defaultMessage = "対象が見つかりません。識別名から一意にリソースを特定できません。";
    return AmbiguousIdentifierException;
})(HttpNotFoundException);
module.exports = AmbiguousIdentifierException;
