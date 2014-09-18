var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpNotFoundException = require('../../errors/HttpNotFoundException');

'use strict';

/**
* 対象が見つかりません。パスに誤りがあります。
*/
var ResourcePathNotFoundException = (function (_super) {
    __extends(ResourcePathNotFoundException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function ResourcePathNotFoundException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message);
    }
    ResourcePathNotFoundException.defaultMessage = "対象が見つかりません。パスに誤りがあります。";
    return ResourcePathNotFoundException;
})(HttpNotFoundException);
module.exports = ResourcePathNotFoundException;
