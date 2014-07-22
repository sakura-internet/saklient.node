
var Util = require('../Util');

/**
* ディスク修正のパラメータ
*
* @class DiskConfig
* @constructor
*/
var DiskConfig = (function () {
    /**
    * @private
    * @constructor
    * @public
    * @param {string} diskId
    * @param {Client} client
    */
    function DiskConfig(client, diskId) {
        this._client = client;
        this._diskId = diskId;
        this._hostName = null;
        this._password = null;
        this._sshKey = null;
        this._ipAddress = null;
        this._gateway = null;
        this._networkMaskLen = null;
    }
    /**
    * @method get_client
    * @protected
    * @return {Client}
    */
    DiskConfig.prototype.get_client = function () {
        return this._client;
    };

    Object.defineProperty(DiskConfig.prototype, "client", {
        /**
        * @property client
        * @type Client
        * @readOnly
        * @public
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
    * @return {string}
    */
    DiskConfig.prototype.get_diskId = function () {
        return this._diskId;
    };

    Object.defineProperty(DiskConfig.prototype, "diskId", {
        /**
        * @property diskId
        * @type string
        * @readOnly
        * @public
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
    * @return {string}
    */
    DiskConfig.prototype.get_hostName = function () {
        return this._hostName;
    };

    /**
    * @method set_hostName
    * @protected
    * @param {string} v
    * @return {string}
    */
    DiskConfig.prototype.set_hostName = function (v) {
        this._hostName = v;
        return v;
    };

    Object.defineProperty(DiskConfig.prototype, "hostName", {
        /**
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
    * @return {string}
    */
    DiskConfig.prototype.get_password = function () {
        return this._password;
    };

    /**
    * @method set_password
    * @protected
    * @param {string} v
    * @return {string}
    */
    DiskConfig.prototype.set_password = function (v) {
        this._password = v;
        return v;
    };

    Object.defineProperty(DiskConfig.prototype, "password", {
        /**
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
    * @return {string}
    */
    DiskConfig.prototype.get_sshKey = function () {
        return this._sshKey;
    };

    /**
    * @method set_sshKey
    * @protected
    * @param {string} v
    * @return {string}
    */
    DiskConfig.prototype.set_sshKey = function (v) {
        this._sshKey = v;
        return v;
    };

    Object.defineProperty(DiskConfig.prototype, "sshKey", {
        /**
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
    * @return {string}
    */
    DiskConfig.prototype.get_ipAddress = function () {
        return this._ipAddress;
    };

    /**
    * @method set_ipAddress
    * @protected
    * @param {string} v
    * @return {string}
    */
    DiskConfig.prototype.set_ipAddress = function (v) {
        this._ipAddress = v;
        return v;
    };

    Object.defineProperty(DiskConfig.prototype, "ipAddress", {
        /**
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
    * @method get_gateway
    * @protected
    * @return {string}
    */
    DiskConfig.prototype.get_gateway = function () {
        return this._gateway;
    };

    /**
    * @method set_gateway
    * @protected
    * @param {string} v
    * @return {string}
    */
    DiskConfig.prototype.set_gateway = function (v) {
        this._gateway = v;
        return v;
    };

    Object.defineProperty(DiskConfig.prototype, "gateway", {
        /**
        * @property gateway
        * @type string
        * @public
        */
        get: function () {
            return this.get_gateway();
        },
        set: function (v) {
            this.set_gateway(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_networkMaskLen
    * @protected
    * @return {number}
    */
    DiskConfig.prototype.get_networkMaskLen = function () {
        return this._networkMaskLen;
    };

    /**
    * @method set_networkMaskLen
    * @protected
    * @param {number} v
    * @return {number}
    */
    DiskConfig.prototype.set_networkMaskLen = function (v) {
        this._networkMaskLen = v;
        return v;
    };

    Object.defineProperty(DiskConfig.prototype, "networkMaskLen", {
        /**
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
    * *
    *
    * @method write
    * @chainable
    * @public
    * @return {DiskConfig}
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
        if (this._gateway != null) {
            Util.setByPath(q, "UserSubnet.DefaultRoute", this._gateway);
        }
        ;
        if (this._networkMaskLen != null) {
            Util.setByPath(q, "UserSubnet.NetworkMaskLen", this._networkMaskLen);
        }
        ;
        var path = "/disk/" + this._diskId + "/config";
        var result = this._client.request("PUT", path, q);
        return this;
    };
    return DiskConfig;
})();
module.exports = DiskConfig;
