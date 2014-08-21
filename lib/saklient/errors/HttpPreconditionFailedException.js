var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* HTTPエラー。Precondition Failed.
*/
var HttpPreconditionFailedException = (function (_super) {
    __extends(HttpPreconditionFailedException, _super);
    function HttpPreconditionFailedException() {
        _super.apply(this, arguments);
    }
    HttpPreconditionFailedException.defaultMessage = "HTTPエラー。Precondition Failed.";
    return HttpPreconditionFailedException;
})(HttpException);
module.exports = HttpPreconditionFailedException;
