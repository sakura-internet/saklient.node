var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpNotFoundException = require('../../errors/HttpNotFoundException');

'use strict';

/**
* 対象が見つかりません。このストレージには指定リソースの複製が存在しません。
*/
var ReplicaNotFoundException = (function (_super) {
    __extends(ReplicaNotFoundException, _super);
    function ReplicaNotFoundException() {
        _super.apply(this, arguments);
    }
    ReplicaNotFoundException.defaultMessage = "対象が見つかりません。このストレージには指定リソースの複製が存在しません。";
    return ReplicaNotFoundException;
})(HttpNotFoundException);
module.exports = ReplicaNotFoundException;
