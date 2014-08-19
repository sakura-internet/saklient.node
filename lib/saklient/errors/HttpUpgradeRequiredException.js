var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpException = require('./HttpException');

'use strict';

/**
* HTTPエラー。Upgrade Required.
*
* @class HttpUpgradeRequiredException
* @constructor
* @extends HttpException
*/
var HttpUpgradeRequiredException = (function (_super) {
    __extends(HttpUpgradeRequiredException, _super);
    function HttpUpgradeRequiredException() {
        _super.apply(this, arguments);
    }
    HttpUpgradeRequiredException.defaultMessage = "HTTPエラー。Upgrade Required.";
    return HttpUpgradeRequiredException;
})(HttpException);
module.exports = HttpUpgradeRequiredException;
