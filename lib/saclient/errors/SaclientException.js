var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Error = require('./Error');

/**
* @class SaclientException
* @constructor
* @extends NativeException
*/
var SaclientException = (function (_super) {
    __extends(SaclientException, _super);
    /**
    * @constructor
    * @public
    * @param {string} message=""
    * @param {string} name=null
    */
    function SaclientException(code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, message);
        this.name = code;
        this.message = (code ? '[' + code + '] ' : '') + message;
        this.stack = (new Error()).stack;
    }
    return SaclientException;
})(Error);
module.exports = SaclientException;
