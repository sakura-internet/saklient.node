
/**
* @class HttpException
* @constructor
* @extends NativeException
*/
var HttpException = (function () {
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
        this.status = status;
        this.name = code;
        this.message = message;
        this.stack = (new Error()).stack;
    }
    return HttpException;
})();
module.exports = HttpException;
