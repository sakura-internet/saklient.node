var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。ルータを削除する前に、スタティックルートを削除してください。
*
* @class DeleteStaticRouteFirstException
* @constructor
* @extends HttpConflictException
*/
var DeleteStaticRouteFirstException = (function (_super) {
    __extends(DeleteStaticRouteFirstException, _super);
    function DeleteStaticRouteFirstException() {
        _super.apply(this, arguments);
    }
    DeleteStaticRouteFirstException.defaultMessage = "要求された操作を行えません。ルータを削除する前に、スタティックルートを削除してください。";
    return DeleteStaticRouteFirstException;
})(HttpConflictException);
module.exports = DeleteStaticRouteFirstException;
