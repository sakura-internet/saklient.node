var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

/**
* 要求された操作を行えません。ルータを削除することでスイッチは同時に削除されます。
*
* @class DeleteRouterB4SwitchException
* @constructor
* @extends HttpConflictException
*/
var DeleteRouterB4SwitchException = (function (_super) {
    __extends(DeleteRouterB4SwitchException, _super);
    function DeleteRouterB4SwitchException() {
        _super.apply(this, arguments);
    }
    DeleteRouterB4SwitchException.defaultMessage = "要求された操作を行えません。ルータを削除することでスイッチは同時に削除されます。";
    return DeleteRouterB4SwitchException;
})(HttpConflictException);
module.exports = DeleteRouterB4SwitchException;
