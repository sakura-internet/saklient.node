var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。ルータには適用できません。
*
* @class NotForRouterException
* @constructor
* @extends HttpConflictException
*/
var NotForRouterException = (function (_super) {
    __extends(NotForRouterException, _super);
    function NotForRouterException() {
        _super.apply(this, arguments);
    }
    NotForRouterException.defaultMessage = "要求された操作を行えません。ルータには適用できません。";
    return NotForRouterException;
})(HttpConflictException);
module.exports = NotForRouterException;
