
var Util = require('../../Util');

'use strict';

/**
* ディスク修正のパラメータ。
*
* @module saklient.cloud.resource.DiskConfig
* @class DiskConfig
* @constructor
*/
var DiskConfig = (function () {
    /**
    * @private
    * @constructor
    * @param {Client} client
    * @param {string} diskId
    */
    function DiskConfig(client, diskId) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(client, "saklient.cloud.Client");
        Util.validateType(diskId, "string");
        this._client = client;
        this._diskId = diskId;
        this._hostName = null;
        this._password = null;
        this._sshKey = null;
        this._ipAddress = null;
        this._defaultRoute = null;
        this._networkMaskLen = null;
        this._scripts = [];
    }
    /**
    * @method get_client
    * @protected
    * @private
    * @return {Client}
    */
    DiskConfig.prototype.get_client = function () {
        return this._client;
    };

    Object.defineProperty(DiskConfig.prototype, "client", {
        /**
        * @private
        * @property client
        * @type Client
        * @readOnly
        */
        get: function () {
            return this.get_client();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_diskId
    * @protected
    * @private
    * @return {string}
    */
    DiskConfig.prototype.get_diskId = function () {
        return this._diskId;
    };

    Object.defineProperty(DiskConfig.prototype, "diskId", {
        /**
        * @private
        * @property diskId
        * @type string
        * @readOnly
        */
        get: function () {
            return this.get_diskId();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_hostName
    * @protected
    * @private
    * @return {string}
    */
    DiskConfig.prototype.get_hostName = function () {
        return this._hostName;
    };

    /**
    * @method set_hostName
    * @protected
    * @private
    * @param {string} v
    * @return {string}
    */
    DiskConfig.prototype.set_hostName = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this._hostName = v;
        return v;
    };

    Object.defineProperty(DiskConfig.prototype, "hostName", {
        /**
        * ホスト名
        *
        * @property hostName
        * @type string
        * @public
        */
        get: function () {
            return this.get_hostName();
        },
        set: function (v) {
            this.set_hostName(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_password
    * @protected
    * @private
    * @return {string}
    */
    DiskConfig.prototype.get_password = function () {
        return this._password;
    };

    /**
    * @method set_password
    * @protected
    * @private
    * @param {string} v
    * @return {string}
    */
    DiskConfig.prototype.set_password = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this._password = v;
        return v;
    };

    Object.defineProperty(DiskConfig.prototype, "password", {
        /**
        * ログインパスワード
        *
        * @property password
        * @type string
        * @public
        */
        get: function () {
            return this.get_password();
        },
        set: function (v) {
            this.set_password(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_sshKey
    * @protected
    * @private
    * @return {string}
    */
    DiskConfig.prototype.get_sshKey = function () {
        return this._sshKey;
    };

    /**
    * @method set_sshKey
    * @protected
    * @private
    * @param {string} v
    * @return {string}
    */
    DiskConfig.prototype.set_sshKey = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this._sshKey = v;
        return v;
    };

    Object.defineProperty(DiskConfig.prototype, "sshKey", {
        /**
        * SSHキー
        *
        * @property sshKey
        * @type string
        * @public
        */
        get: function () {
            return this.get_sshKey();
        },
        set: function (v) {
            this.set_sshKey(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_ipAddress
    * @protected
    * @private
    * @return {string}
    */
    DiskConfig.prototype.get_ipAddress = function () {
        return this._ipAddress;
    };

    /**
    * @method set_ipAddress
    * @protected
    * @private
    * @param {string} v
    * @return {string}
    */
    DiskConfig.prototype.set_ipAddress = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this._ipAddress = v;
        return v;
    };

    Object.defineProperty(DiskConfig.prototype, "ipAddress", {
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
    * @method get_defaultRoute
    * @protected
    * @private
    * @return {string}
    */
    DiskConfig.prototype.get_defaultRoute = function () {
        return this._defaultRoute;
    };

    /**
    * @method set_defaultRoute
    * @protected
    * @private
    * @param {string} v
    * @return {string}
    */
    DiskConfig.prototype.set_defaultRoute = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this._defaultRoute = v;
        return v;
    };

    Object.defineProperty(DiskConfig.prototype, "defaultRoute", {
        /**
        * デフォルトルート
        *
        * @property defaultRoute
        * @type string
        * @public
        */
        get: function () {
            return this.get_defaultRoute();
        },
        set: function (v) {
            this.set_defaultRoute(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_networkMaskLen
    * @protected
    * @private
    * @return {number}
    */
    DiskConfig.prototype.get_networkMaskLen = function () {
        return this._networkMaskLen;
    };

    /**
    * @method set_networkMaskLen
    * @protected
    * @private
    * @param {number} v
    * @return {number}
    */
    DiskConfig.prototype.set_networkMaskLen = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "number");
        this._networkMaskLen = v;
        return v;
    };

    Object.defineProperty(DiskConfig.prototype, "networkMaskLen", {
        /**
        * ネットワークマスク長
        *
        * @property networkMaskLen
        * @type number
        * @public
        */
        get: function () {
            return this.get_networkMaskLen();
        },
        set: function (v) {
            this.set_networkMaskLen(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_scripts
    * @protected
    * @private
    * @return {Script[]}
    */
    DiskConfig.prototype.get_scripts = function () {
        return this._scripts;
    };

    Object.defineProperty(DiskConfig.prototype, "scripts", {
        /**
        * スタートアップスクリプト（pushによりスクリプトを追加できます）
        *
        * @property scripts
        * @type Script[]
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_scripts();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * スタートアップスクリプトを追加します。
    *
    * diskConfig.addScript(script) と diskConfig.scripts.push(script) の効果は同等です。
    *
    * @method addScript
    * @chainable
    * @public
    * @param {Script} script
    * @return {DiskConfig} this
    */
    DiskConfig.prototype.addScript = function (script) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(script, "saklient.cloud.resource.Script");
        this._scripts.push(script);
        return this;
    };

    /**
    * 修正内容を実際のディスクに書き込みます。
    *
    * @method write
    * @chainable
    * @public
    * @return {DiskConfig} this
    */
    DiskConfig.prototype.write = function () {
        var q = {};
        if (this._hostName != null) {
            Util.setByPath(q, "HostName", this._hostName);
        }
        ;
        if (this._password != null) {
            Util.setByPath(q, "Password", this._password);
        }
        ;
        if (this._sshKey != null) {
            Util.setByPath(q, "SSHKey.PublicKey", this._sshKey);
        }
        ;
        if (this._ipAddress != null) {
            Util.setByPath(q, "UserIPAddress", this._ipAddress);
        }
        ;
        if (this._defaultRoute != null) {
            Util.setByPath(q, "UserSubnet.DefaultRoute", this._defaultRoute);
        }
        ;
        if (this._networkMaskLen != null) {
            Util.setByPath(q, "UserSubnet.NetworkMaskLen", this._networkMaskLen);
        }
        ;
        if (0 < this._scripts.length) {
            var notes = [];
            for (var __it1 = 0; __it1 < this._scripts.length; __it1++) {
                var script = this._scripts[__it1];
                notes.push({ ID: script._id() });
            }
            ;
            Util.setByPath(q, "Notes", notes);
        }
        ;
        var path = "/disk/" + this._diskId + "/config";
        var result = this._client.request("PUT", path, q);
        return this;
    };
    return DiskConfig;
})();
module.exports = DiskConfig;
