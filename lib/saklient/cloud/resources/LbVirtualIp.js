
var Util = require('../../Util');
var LbServer = require('./LbServer');

'use strict';

/**
* ロードバランサの仮想IPアドレス。
*
* @module saklient.cloud.resources.LbVirtualIp
* @class LbVirtualIp
* @constructor
*/
var LbVirtualIp = (function () {
    /**
    * @private
    * @constructor
    * @param {any} obj
    */
    function LbVirtualIp(obj) {
        Util.validateArgCount(arguments.length, 1);
        var vip = Util.getByPathAny([obj], ["VirtualIPAddress", "virtualIpAddress", "virtual_ip_address", "vip"]);
        this._virtualIpAddress = (vip);
        var port = Util.getByPathAny([obj], ["Port", "port"]);
        this._port = port == null ? null : parseInt((port), 10);
        if (this._port == 0) {
            this._port = null;
        }
        ;
        var delayLoop = Util.getByPathAny([obj], ["DelayLoop", "delayLoop", "delay_loop", "delay"]);
        this._delayLoop = delayLoop == null ? null : parseInt((delayLoop), 10);
        if (this._delayLoop == 0) {
            this._delayLoop = null;
        }
        ;
        this._servers = [];
        var serversDyn = Util.getByPathAny([obj], ["Servers", "servers"]);
        if (serversDyn != null) {
            var servers = (serversDyn);
            for (var __it1 = 0; __it1 < servers.length; __it1++) {
                var server = servers[__it1];
                this._servers.push(new LbServer(server));
            }
            ;
        }
        ;
    }
    /**
    * @method get_virtualIpAddress
    * @private
    * @return {string}
    */
    LbVirtualIp.prototype.get_virtualIpAddress = function () {
        return this._virtualIpAddress;
    };

    Object.defineProperty(LbVirtualIp.prototype, "virtualIpAddress", {
        /**
        * VIPアドレス
        *
        * @property virtualIpAddress
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_virtualIpAddress();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_port
    * @private
    * @return {number}
    */
    LbVirtualIp.prototype.get_port = function () {
        return this._port;
    };

    Object.defineProperty(LbVirtualIp.prototype, "port", {
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
    * @method get_delayLoop
    * @private
    * @return {number}
    */
    LbVirtualIp.prototype.get_delayLoop = function () {
        return this._delayLoop;
    };

    Object.defineProperty(LbVirtualIp.prototype, "delayLoop", {
        /**
        * チェック間隔 [秒]
        *
        * @property delayLoop
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_delayLoop();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_servers
    * @private
    * @return {LbServer[]}
    */
    LbVirtualIp.prototype.get_servers = function () {
        return this._servers;
    };

    Object.defineProperty(LbVirtualIp.prototype, "servers", {
        /**
        * 実サーバ
        *
        * @property servers
        * @type LbServer[]
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_servers();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method addServer
    * @chainable
    * @public
    * @param {any} settings
    * @return {LbVirtualIp}
    */
    LbVirtualIp.prototype.addServer = function (settings) {
        Util.validateArgCount(arguments.length, 1);
        this._servers.push(new LbServer(settings));
        return this;
    };

    /**
    * @method toRawSettings
    * @public
    * @return {any}
    */
    LbVirtualIp.prototype.toRawSettings = function () {
        var servers = [];
        for (var __it1 = 0; __it1 < this._servers.length; __it1++) {
            var server = this._servers[__it1];
            servers.push(server.toRawSettings());
        }
        ;
        return {
            VirtualIPAddress: this._virtualIpAddress,
            Port: this._port,
            DelayLoop: this._delayLoop,
            Servers: servers
        };
    };
    return LbVirtualIp;
})();
module.exports = LbVirtualIp;
