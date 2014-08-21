var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* HTTPエラー。Failed Dependency.
*/
var HttpFailedDependencyException = (function (_super) {
    __extends(HttpFailedDependencyException, _super);
    function HttpFailedDependencyException() {
        _super.apply(this, arguments);
    }
    HttpFailedDependencyException.defaultMessage = "HTTPエラー。Failed Dependency.";
    return HttpFailedDependencyException;
})(HttpException);
module.exports = HttpFailedDependencyException;
