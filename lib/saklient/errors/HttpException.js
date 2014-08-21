var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Error = require('./Error');

/**
* @module saklient.errors.HttpException
* @class HttpException
* @constructor
* @extends Error
*/
var HttpException = (function (_super) {
    __extends(HttpException, _super);
    /**
    * @constructor
    * @public
    * @param {number} status
    * @param {string} message=""
    * @param {string} name=null
    */
    function HttpException(status, code, message) {
        if (typeof code === "undefined") { code = null; }
        if (typeof message === "undefined") { message = ""; }
        _super.call(this, message);
        this.name = code;
        this.message = (code ? '[' + code + '] ' : '') + message;
        this.status = status;
        this.stack = (new Error()).stack;
    }
    return HttpException;
})(Error);
module.exports = HttpException;
