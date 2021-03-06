var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* 対象が見つかりません。対象は利用できない状態か、IDまたはパスに誤りがあります。
*/
var HttpNotFoundException = (function (_super) {
    __extends(HttpNotFoundException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} code=null
    * @param {string} message=""
    */
    function HttpNotFoundException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, status, code, message == null || message == "" ? "対象が見つかりません。対象は利用できない状態か、IDまたはパスに誤りがあります。" : message);
    }
    return HttpNotFoundException;
})(HttpException);
module.exports = HttpNotFoundException;
