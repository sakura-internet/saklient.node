var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var HttpConflictException = require('../../errors/HttpConflictException');

'use strict';

/**
* 要求された操作を行えません。DASの利用方法に問題があります。1台のサーバには同一のストレージ上にあるDASのみを接続できます。
*
* @class IllegalDasUsageException
* @constructor
* @extends HttpConflictException
*/
var IllegalDasUsageException = (function (_super) {
    __extends(IllegalDasUsageException, _super);
    function IllegalDasUsageException() {
        _super.apply(this, arguments);
    }
    IllegalDasUsageException.defaultMessage = "要求された操作を行えません。DASの利用方法に問題があります。1台のサーバには同一のストレージ上にあるDASのみを接続できます。";
    return IllegalDasUsageException;
})(HttpConflictException);
module.exports = IllegalDasUsageException;
