
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
    * @param {any} obj=null
    */
    function LbServer(obj) {
        if (typeof obj === "undefined") { obj = null; }
        if (obj == null) {
            obj = {};
        }
        ;
        var health = Util.getByPathAny([obj], ["HealthCheck", "healthCheck", "health_check", "health"]);
        this._ipAddress = (Util.getByPathAny([obj], ["IPAddress", "ipAddress", "ip_address", "ip"]));
        this._protocol = (Util.getByPathAny([health, obj], ["Protocol", "protocol"]));
        this._pathToCheck = (Util.getByPathAny([health, obj], ["Path", "path", "pathToCheck", "path_to_check"]));
        var port = Util.getByPathAny([obj], ["Port", "port"]);
        this._port = null;
        if (port != null) {
            this._port = parseInt((port), 10);
        }
        ;
        if (this._port == 0) {
            this._port = null;
        }
        ;
        var responseExpected = Util.getByPathAny([health, obj], ["Status", "status", "responseExpected", "response_expected"]);
        this._responseExpected = null;
        if (responseExpected != null) {
            this._responseExpected = parseInt((responseExpected), 10);
        }
        ;
        if (this._responseExpected == 0) {
            this._responseExpected = null;
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

    /**
    * @method set_ipAddress
    * @private
    * @param {string} v
    * @return {string}
    */
    LbServer.prototype.set_ipAddress = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this._ipAddress = v;
        return this._ipAddress;
    };

    Object.defineProperty(LbServer.prototype, "ipAddress", {
        /**
        * IPアドレス
        *
        * @property ipAddress
        * @type string
        * @public
        */
        get: function () {
            return this.get_ipAddress();
        },
        set: function (v) {
            this.set_ipAddress(v);
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

    /**
    * @method set_port
    * @private
    * @param {number} v
    * @return {number}
    */
    LbServer.prototype.set_port = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "number");
        this._port = v;
        return this._port;
    };

    Object.defineProperty(LbServer.prototype, "port", {
        /**
        * ポート番号
        *
        * @property port
        * @type number
        * @public
        */
        get: function () {
            return this.get_port();
        },
        set: function (v) {
            this.set_port(v);
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

    /**
    * @method set_protocol
    * @private
    * @param {string} v
    * @return {string}
    */
    LbServer.prototype.set_protocol = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this._protocol = v;
        return this._protocol;
    };

    Object.defineProperty(LbServer.prototype, "protocol", {
        /**
        * 監視方法
        *
        * @property protocol
        * @type string
        * @public
        */
        get: function () {
            return this.get_protocol();
        },
        set: function (v) {
            this.set_protocol(v);
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

    /**
    * @method set_pathToCheck
    * @private
    * @param {string} v
    * @return {string}
    */
    LbServer.prototype.set_pathToCheck = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this._pathToCheck = v;
        return this._pathToCheck;
    };

    Object.defineProperty(LbServer.prototype, "pathToCheck", {
        /**
        * 監視対象パス
        *
        * @property pathToCheck
        * @type string
        * @public
        */
        get: function () {
            return this.get_pathToCheck();
        },
        set: function (v) {
            this.set_pathToCheck(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_responseExpected
    * @private
    * @return {number}
    */
    LbServer.prototype.get_responseExpected = function () {
        return this._responseExpected;
    };

    /**
    * @method set_responseExpected
    * @private
    * @param {number} v
    * @return {number}
    */
    LbServer.prototype.set_responseExpected = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "number");
        this._responseExpected = v;
        return this._responseExpected;
    };

    Object.defineProperty(LbServer.prototype, "responseExpected", {
        /**
        * 監視時に期待されるレスポンスコード
        *
        * @property responseExpected
        * @type number
        * @public
        */
        get: function () {
            return this.get_responseExpected();
        },
        set: function (v) {
            this.set_responseExpected(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_activeConnections
    * @private
    * @return {number}
    */
    LbServer.prototype.get_activeConnections = function () {
        return this._activeConnections;
    };

    Object.defineProperty(LbServer.prototype, "activeConnections", {
        /**
        * レスポンスコード
        *
        * @property activeConnections
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_activeConnections();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_status
    * @private
    * @return {string}
    */
    LbServer.prototype.get_status = function () {
        return this._status;
    };

    Object.defineProperty(LbServer.prototype, "status", {
        /**
        * レスポンスコード
        *
        * @property status
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_status();
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
                Status: this._responseExpected
            }
        };
    };

    /**
    * @method updateStatus
    * @chainable
    * @public
    * @param {any} obj
    * @return {LbServer}
    */
    LbServer.prototype.updateStatus = function (obj) {
        Util.validateArgCount(arguments.length, 1);
        var connStr = (obj["ActiveConn"]);
        this._activeConnections = 0;
        if (connStr != null) {
            this._activeConnections = parseInt(connStr, 10);
        }
        ;
        var status = (obj["Status"]);
        this._status = status == null ? null : status.toLowerCase();
        return this;
    };
    return LbServer;
})();
module.exports = LbServer;
