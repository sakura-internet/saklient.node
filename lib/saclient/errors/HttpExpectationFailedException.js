'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

/**
* HTTPエラー。Expectation Failed.
*
* @class HttpExpectationFailedException
* @constructor
* @extends HttpException
*/
var HttpExpectationFailedException = (function (_super) {
    __extends(HttpExpectationFailedException, _super);
    function HttpExpectationFailedException() {
        _super.apply(this, arguments);
    }
    HttpExpectationFailedException.defaultMessage = "HTTPエラー。Expectation Failed.";
    return HttpExpectationFailedException;
})(HttpException);
module.exports = HttpExpectationFailedException;
