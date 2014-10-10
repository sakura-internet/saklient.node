
var Util = require('../../Util');

'use strict';

/**
* ロードバランサの監視対象サーバ。
*
* @module saklient.cloud.resources.LbServer
* @class LbServer
* @constructor
*/
var LbServer = (function () {
    /**
    * @private
    * @constructor
    * @param {any} obj
    */
    function LbServer(obj) {
        Util.validateArgCount(arguments.length, 1);
        var health = Util.getByPathAny([obj], ["HealthCheck", "healthCheck", "health_check", "health"]);
        this._ipAddress = (Util.getByPathAny([obj], ["IPAddress", "ipAddress", "ip_address", "ip"]));
        this._protocol = (Util.getByPathAny([health, obj], ["Protocol", "protocol"]));
        this._pathToCheck = (Util.getByPathAny([health, obj], ["Path", "path"]));
        var port = Util.getByPathAny([obj], ["Port", "port"]);
        this._port = port == null ? null : parseInt((port), 10);
        if (this._port == 0) {
            this._port = null;
        }
        ;
        var status = Util.getByPathAny([health, obj], ["Status", "status"]);
        this._expectedStatus = status == null ? null : parseInt((status), 10);
        if (this._expectedStatus == 0) {
            this._expectedStatus = null;
        }
        ;
    }
    /**
    * @method get_ipAddress
    * @private
    * @return {string}
    */
    LbServer.prototype.get_ipAddress = function () {
        return this._ipAddress;
    };

    Object.defineProperty(LbServer.prototype, "ipAddress", {
        /**
        * IPアドレス
        *
        * @property ipAddress
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_ipAddress();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_port
    * @private
    * @return {number}
    */
    LbServer.prototype.get_port = function () {
        return this._port;
    };

    Object.defineProperty(LbServer.prototype, "port", {
        /**
        * ポート番号
        *
        * @property port
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_port();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_protocol
    * @private
    * @return {string}
    */
    LbServer.prototype.get_protocol = function () {
        return this._protocol;
    };

    Object.defineProperty(LbServer.prototype, "protocol", {
        /**
        * 監視方法
        *
        * @property protocol
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_protocol();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_pathToCheck
    * @private
    * @return {string}
    */
    LbServer.prototype.get_pathToCheck = function () {
        return this._pathToCheck;
    };

    Object.defineProperty(LbServer.prototype, "pathToCheck", {
        /**
        * パス
        *
        * @property pathToCheck
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_pathToCheck();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_expectedStatus
    * @private
    * @return {number}
    */
    LbServer.prototype.get_expectedStatus = function () {
        return this._expectedStatus;
    };

    Object.defineProperty(LbServer.prototype, "expectedStatus", {
        /**
        * レスポンスコード
        *
        * @property expectedStatus
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_expectedStatus();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method toRawSettings
    * @public
    * @return {any}
    */
    LbServer.prototype.toRawSettings = function () {
        return {
            IPAddress: this._ipAddress,
            Port: this._port,
            HealthCheck: {
                Protocol: this._protocol,
                Path: this._pathToCheck,
                Status: this._expectedStatus
            }
        };
    };
    return LbServer;
})();
module.exports = LbServer;
