var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Error = require('./Error');

/**
* @class SaklientException
* @constructor
* @extends NativeException
*/
var SaklientException = (function (_super) {
    __extends(SaklientException, _super);
    /**
    * @constructor
    * @public
    * @param {string} message=""
    * @param {string} name=null
    */
    function SaklientException(code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, message);
        this.name = code;
        this.message = (code ? '[' + code + '] ' : '') + message;
        this.stack = (new Error()).stack;
    }
    return SaklientException;
})(Error);
module.exports = SaklientException;
