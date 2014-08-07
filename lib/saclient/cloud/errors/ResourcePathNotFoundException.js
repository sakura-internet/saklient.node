'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpNotFoundException = require('../../errors/HttpNotFoundException');

/**
* 対象が見つかりません。パスに誤りがあります。
*
* @class ResourcePathNotFoundException
* @constructor
* @extends HttpNotFoundException
*/
var ResourcePathNotFoundException = (function (_super) {
    __extends(ResourcePathNotFoundException, _super);
    function ResourcePathNotFoundException() {
        _super.apply(this, arguments);
    }
    ResourcePathNotFoundException.defaultMessage = "対象が見つかりません。パスに誤りがあります。";
    return ResourcePathNotFoundException;
})(HttpNotFoundException);
module.exports = ResourcePathNotFoundException;
