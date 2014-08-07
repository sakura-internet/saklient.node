var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* HTTPエラー。Unprocessable Entity.
*
* @class HttpUnprocessableEntityException
* @constructor
* @extends HttpException
*/
var HttpUnprocessableEntityException = (function (_super) {
    __extends(HttpUnprocessableEntityException, _super);
    function HttpUnprocessableEntityException() {
        _super.apply(this, arguments);
    }
    HttpUnprocessableEntityException.defaultMessage = "HTTPエラー。Unprocessable Entity.";
    return HttpUnprocessableEntityException;
})(HttpException);
module.exports = HttpUnprocessableEntityException;
