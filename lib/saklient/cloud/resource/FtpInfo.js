
var Util = require('../../Util');

'use strict';

/**
* FTPサーバのアカウント情報。
*
* @module saklient.cloud.resource.FtpInfo
* @class FtpInfo
* @constructor
*/
var FtpInfo = (function () {
    /**
    * @private
    * @constructor
    * @param {any} obj
    */
    function FtpInfo(obj) {
        Util.validateArgCount(arguments.length, 1);
        this._hostName = obj["HostName"];
        this._user = obj["User"];
        this._password = obj["Password"];
    }
    /**
    * @method get_hostName
    * @private
    * @return {string}
    */
    FtpInfo.prototype.get_hostName = function () {
        return this._hostName;
    };

    Object.defineProperty(FtpInfo.prototype, "hostName", {
        /**
        * ホスト名
        *
        * @property hostName
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_hostName();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_user
    * @private
    * @return {string}
    */
    FtpInfo.prototype.get_user = function () {
        return this._user;
    };

    Object.defineProperty(FtpInfo.prototype, "user", {
        /**
        * ユーザ名
        *
        * @property user
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_user();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_password
    * @private
    * @return {string}
    */
    FtpInfo.prototype.get_password = function () {
        return this._password;
    };

    Object.defineProperty(FtpInfo.prototype, "password", {
        /**
        * パスワード
        *
        * @property password
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_password();
        },
        enumerable: true,
        configurable: true
    });
    return FtpInfo;
})();
module.exports = FtpInfo;
