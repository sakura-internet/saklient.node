var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。再インストール時に指定できるソースは、同一のライセンスを必要とするアーカイブに限られます。
*
* @class SameLicenseRequiredException
* @constructor
* @extends HttpConflictException
*/
var SameLicenseRequiredException = (function (_super) {
    __extends(SameLicenseRequiredException, _super);
    function SameLicenseRequiredException() {
        _super.apply(this, arguments);
    }
    SameLicenseRequiredException.defaultMessage = "要求された操作を行えません。再インストール時に指定できるソースは、同一のライセンスを必要とするアーカイブに限られます。";
    return SameLicenseRequiredException;
})(HttpConflictException);
module.exports = SameLicenseRequiredException;
