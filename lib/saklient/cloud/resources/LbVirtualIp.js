
var Util = require('../../Util');
var LbServer = require('./LbServer');

'use strict';

/**
* ロードバランサの仮想IPアドレス設定。
*
* @module saklient.cloud.resources.LbVirtualIp
* @class LbVirtualIp
* @constructor
*/
var LbVirtualIp = (function () {
    /**
    * @private
    * @constructor
    * @param {any} obj=null
    */
    function LbVirtualIp(obj) {
        if (typeof obj === "undefined") { obj = null; }
        if (obj == null) {
            obj = {};
        }
        ;
        var vip = Util.getByPathAny([obj], ["VirtualIPAddress", "virtualIpAddress", "virtual_ip_address", "vip"]);
        this._virtualIpAddress = (vip);
        var port = Util.getByPathAny([obj], ["Port", "port"]);
        this._port = null;
        if (port != null) {
            this._port = parseInt(port, 10);
        }
        ;
        if (this._port == 0) {
            this._port = null;
        }
        ;
        var delayLoop = Util.getByPathAny([obj], ["DelayLoop", "delayLoop", "delay_loop", "delay"]);
        this._delayLoop = null;
        if (delayLoop != null) {
            this._delayLoop = parseInt(delayLoop, 10);
        }
        ;
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

    /**
    * @method set_virtualIpAddress
    * @private
    * @param {string} v
    * @return {string}
    */
    LbVirtualIp.prototype.set_virtualIpAddress = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this._virtualIpAddress = v;
        return this._virtualIpAddress;
    };

    Object.defineProperty(LbVirtualIp.prototype, "virtualIpAddress", {
        /**
        * VIPアドレス
        *
        * @property virtualIpAddress
        * @type string
        * @public
        */
        get: function () {
            return this.get_virtualIpAddress();
        },
        set: function (v) {
            this.set_virtualIpAddress(v);
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

    /**
    * @method set_port
    * @private
    * @param {number} v
    * @return {number}
    */
    LbVirtualIp.prototype.set_port = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "number");
        this._port = v;
        return this._port;
    };

    Object.defineProperty(LbVirtualIp.prototype, "port", {
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
    * @method get_delayLoop
    * @private
    * @return {number}
    */
    LbVirtualIp.prototype.get_delayLoop = function () {
        return this._delayLoop;
    };

    /**
    * @method set_delayLoop
    * @private
    * @param {number} v
    * @return {number}
    */
    LbVirtualIp.prototype.set_delayLoop = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "number");
        this._delayLoop = v;
        return this._delayLoop;
    };

    Object.defineProperty(LbVirtualIp.prototype, "delayLoop", {
        /**
        * チェック間隔 [秒]
        *
        * @property delayLoop
        * @type number
        * @public
        */
        get: function () {
            return this.get_delayLoop();
        },
        set: function (v) {
            this.set_delayLoop(v);
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
        * 実サーバ {{#crossLink "LbServer"}}{{/crossLink}} の配列
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
    * 監視対象サーバ設定を追加します。
    *
    * @method addServer
    * @public
    * @param {any} settings=null 設定オブジェクト
    * @return {LbServer}
    */
    LbVirtualIp.prototype.addServer = function (settings) {
        if (typeof settings === "undefined") { settings = null; }
        var ret = new LbServer(settings);
        this._servers.push(ret);
        return ret;
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

    /**
    * 指定したIPアドレスにマッチする監視対象サーバ設定のうち、最初にマッチしたものを取得します。
    *
    * @method getServerByAddress
    * @public
    * @param {string} address 検索するIPアドレス
    * @return {LbServer} 監視対象サーバ設定（見つからなかった場合はnull）
    */
    LbVirtualIp.prototype.getServerByAddress = function (address) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(address, "string");
        for (var __it1 = 0; __it1 < this._servers.length; __it1++) {
            var srv = this._servers[__it1];
            if (srv["ipAddress"] == address) {
                return srv;
            }
            ;
        }
        ;
        return null;
    };

    /**
    * 指定したIPアドレスにマッチする監視対象サーバ設定をすべて削除します。
    *
    * @method removeServerByAddress
    * @chainable
    * @public
    * @param {string} address
    * @return {LbVirtualIp}
    */
    LbVirtualIp.prototype.removeServerByAddress = function (address) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(address, "string");
        var servers = [];
        for (var __it1 = 0; __it1 < this._servers.length; __it1++) {
            var srv = this._servers[__it1];
            if (srv["ipAddress"] != address) {
                servers.push(srv);
            }
            ;
        }
        ;
        this._servers = servers;
        return this;
    };

    /**
    * @private
    * @method updateStatus
    * @chainable
    * @param {Array} srvs
    * @return {LbVirtualIp}
    */
    LbVirtualIp.prototype.updateStatus = function (srvs) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(srvs, "Array");
        for (var __it1 = 0; __it1 < srvs.length; __it1++) {
            var srvDyn = srvs[__it1];
            var ip = (srvDyn["IPAddress"]);
            var srv = this.getServerByAddress(ip);
            if (srv == null) {
                continue;
            }
            ;
            srv.updateStatus(srvDyn);
        }
        ;
        return this;
    };
    return LbVirtualIp;
})();
module.exports = LbVirtualIp;
