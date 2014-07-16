var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../Util');

var Resource = require('./Resource');
var Icon = require('./Icon');
var DiskPlan = require('./DiskPlan');
var Server = require('./Server');
var Archive = require('./Archive');
var EAvailability = require('../enums/EAvailability');

/**
* ディスクのリソース情報へのアクセス機能や操作機能を備えたクラス。
*
* @class Disk
* @constructor
* @extends Resource
*/
var Disk = (function (_super) {
    __extends(Disk, _super);
    /**
    * @private
    * @constructor
    * @public
    * @param {Client} client
    * @param {any} r
    */
    function Disk(client, r) {
        _super.call(this, client);
        /**
        * @member saclient.cloud.resource.Disk#n_id
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saclient.cloud.resource.Disk#n_name
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saclient.cloud.resource.Disk#n_description
        * @type boolean
        * @private
        */
        this.n_description = false;
        /**
        * @member saclient.cloud.resource.Disk#n_tags
        * @type boolean
        * @private
        */
        this.n_tags = false;
        /**
        * @member saclient.cloud.resource.Disk#n_icon
        * @type boolean
        * @private
        */
        this.n_icon = false;
        /**
        * @member saclient.cloud.resource.Disk#n_sizeMib
        * @type boolean
        * @private
        */
        this.n_sizeMib = false;
        /**
        * @member saclient.cloud.resource.Disk#n_serviceClass
        * @type boolean
        * @private
        */
        this.n_serviceClass = false;
        /**
        * @member saclient.cloud.resource.Disk#n_plan
        * @type boolean
        * @private
        */
        this.n_plan = false;
        /**
        * @member saclient.cloud.resource.Disk#n_server
        * @type boolean
        * @private
        */
        this.n_server = false;
        /**
        * @member saclient.cloud.resource.Disk#n_availability
        * @type boolean
        * @private
        */
        this.n_availability = false;
        this.apiDeserialize(r);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Disk.prototype._apiPath = function () {
        return "/disk";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Disk.prototype._rootKey = function () {
        return "Disk";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Disk.prototype._rootKeyM = function () {
        return "Disks";
    };

    /**
    * @private
    * @method _id
    * @public
    * @return {string}
    */
    Disk.prototype._id = function () {
        return this.get_id();
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
    *
    * @method save
    * @chainable
    * @public
    * @return {Disk} this
    */
    Disk.prototype.save = function () {
        return (this._save());
    };

    /**
    * 最新のリソース情報を再取得します。
    *
    * @method reload
    * @chainable
    * @public
    * @return {Disk} this
    */
    Disk.prototype.reload = function () {
        return (this._reload());
    };

    /**
    * @method get_isAvailable
    * @protected
    * @return {boolean}
    */
    Disk.prototype.get_isAvailable = function () {
        return this.get_availability() == EAvailability.available;
    };

    Object.defineProperty(Disk.prototype, "isAvailable", {
        /**
        * ディスクが利用可能なときtrueを返します。
        *
        * @property isAvailable
        * @type boolean
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_isAvailable();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_sizeGib
    * @protected
    * @return {number}
    */
    Disk.prototype.get_sizeGib = function () {
        return this.get_sizeMib() >> 10;
    };

    /**
    * @method set_sizeGib
    * @protected
    * @param {number} sizeGib
    * @return {number}
    */
    Disk.prototype.set_sizeGib = function (sizeGib) {
        this.sizeMib = sizeGib * 1024;
        return sizeGib;
    };

    Object.defineProperty(Disk.prototype, "sizeGib", {
        /**
        * サイズ[GiB]
        *
        * @property sizeGib
        * @type number
        * @public
        */
        get: function () {
            return this.get_sizeGib();
        },
        set: function (v) {
            this.set_sizeGib(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_source
    * @public
    * @return {any}
    */
    Disk.prototype.get_source = function () {
        return this._source;
    };

    /**
    * @method set_source
    * @public
    * @param {any} source
    * @return {any}
    */
    Disk.prototype.set_source = function (source) {
        this._source = source;
        return source;
    };

    Object.defineProperty(Disk.prototype, "source", {
        /**
        * ディスクのコピー元
        *
        * @property source
        * @type any
        * @public
        */
        get: function () {
            return this.get_source();
        },
        set: function (v) {
            this.set_source(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @private
    * @method _onAfterApiDeserialize
    * @protected
    * @param {any} r
    * @return {void}
    */
    Disk.prototype._onAfterApiDeserialize = function (r) {
        if (r == null)
            return;
        ;
        if (("SourceArchive" in r)) {
            var s = r["SourceArchive"];
            if (s != null) {
                var id = s["ID"];
                if (id != null) {
                    this._source = new Archive(this._client, s);
                }
                ;
            }
            ;
        }
        ;
        if (("SourceDisk" in r)) {
            var s = r["SourceDisk"];
            if (s != null) {
                var id = s["ID"];
                if (id != null) {
                    this._source = new Disk(this._client, s);
                }
                ;
            }
            ;
        }
        ;
    };

    /**
    * @private
    * @method _onAfterApiSerialize
    * @protected
    * @param {boolean} withClean
    * @param {any} r
    * @return {void}
    */
    Disk.prototype._onAfterApiSerialize = function (r, withClean) {
        if (r == null)
            return;
        ;
        if (this._source != null) {
            if (this._source instanceof Archive) {
                var archive = (this._source);
                var s = withClean ? archive.apiSerialize(true) : { ID: archive._id() };
                r["SourceArchive"] = s;
            } else if (this._source instanceof Disk) {
                var disk = (this._source);
                var s = withClean ? disk.apiSerialize(true) : { ID: disk._id() };
                r["SourceDisk"] = s;
            } else {
                r["SourceArchive"] = { ID: 1 };
            }
            ;
        }
        ;
    };

    /**
    * ディスクをサーバに取り付けます。
    *
    * @method connectTo
    * @chainable
    * @public
    * @param {Server} server
    * @return {Disk}
    */
    Disk.prototype.connectTo = function (server) {
        this._client.request("PUT", "/disk/" + this._id() + "/to/server/" + server._id());
        return this;
    };

    /**
    * ディスクをサーバから取り外します。
    *
    * @method disconnect
    * @chainable
    * @public
    * @return {Disk}
    */
    Disk.prototype.disconnect = function () {
        this._client.request("DELETE", "/disk/" + this._id() + "/to/server");
        return this;
    };

    /**
    * コピー中のディスクが利用可能になるまで待機します。
    *
    * @method afterCopy
    * @public
    * @param {number} timeoutSec
    * @param {(Disk, boolean) => void} callback
    * @return {void}
    */
    Disk.prototype.afterCopy = function (timeoutSec, callback) {
        var ret = this.sleepWhileCopying(timeoutSec);
        callback(this, ret);
    };

    /**
    * コピー中のディスクが利用可能になるまで待機します。
    *
    * @method sleepWhileCopying
    * @public
    * @param {number} timeoutSec=3600
    * @return {boolean}
    */
    Disk.prototype.sleepWhileCopying = function (timeoutSec) {
        if (typeof timeoutSec === "undefined") { timeoutSec = 3600; }
        var step = 3;
        while (0 < timeoutSec) {
            this.reload();
            var a = this.get_availability();
            if (a == EAvailability.available)
                return true;
            ;
            if (a != EAvailability.migrating)
                timeoutSec = 0;
            timeoutSec -= step;
            if (0 < timeoutSec)
                Util.sleep(step);
        }
        ;
        return false;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    Disk.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(Disk.prototype, "id", {
        /**
        * ID
        *
        * @property id
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_id();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_name
    * @private
    * @return {string}
    */
    Disk.prototype.get_name = function () {
        return this.m_name;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_name
    * @private
    * @param {string} v
    * @return {string}
    */
    Disk.prototype.set_name = function (v) {
        this.m_name = v;
        this.n_name = true;
        return this.m_name;
    };

    Object.defineProperty(Disk.prototype, "name", {
        /**
        * 名前
        *
        * @property name
        * @type string
        * @public
        */
        get: function () {
            return this.get_name();
        },
        set: function (v) {
            this.set_name(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_description
    * @private
    * @return {string}
    */
    Disk.prototype.get_description = function () {
        return this.m_description;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_description
    * @private
    * @param {string} v
    * @return {string}
    */
    Disk.prototype.set_description = function (v) {
        this.m_description = v;
        this.n_description = true;
        return this.m_description;
    };

    Object.defineProperty(Disk.prototype, "description", {
        /**
        * 説明
        *
        * @property description
        * @type string
        * @public
        */
        get: function () {
            return this.get_description();
        },
        set: function (v) {
            this.set_description(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_tags
    * @private
    * @return {string[]}
    */
    Disk.prototype.get_tags = function () {
        return this.m_tags;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_tags
    * @private
    * @param {string[]} v
    * @return {string[]}
    */
    Disk.prototype.set_tags = function (v) {
        this.m_tags = v;
        this.n_tags = true;
        return this.m_tags;
    };

    Object.defineProperty(Disk.prototype, "tags", {
        /**
        * タグ
        *
        * @property tags
        * @type string[]
        * @public
        */
        get: function () {
            return this.get_tags();
        },
        set: function (v) {
            this.set_tags(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_icon
    * @private
    * @return {Icon}
    */
    Disk.prototype.get_icon = function () {
        return this.m_icon;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_icon
    * @private
    * @param {Icon} v
    * @return {Icon}
    */
    Disk.prototype.set_icon = function (v) {
        this.m_icon = v;
        this.n_icon = true;
        return this.m_icon;
    };

    Object.defineProperty(Disk.prototype, "icon", {
        /**
        * アイコン
        *
        * @property icon
        * @type Icon
        * @public
        */
        get: function () {
            return this.get_icon();
        },
        set: function (v) {
            this.set_icon(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_sizeMib
    * @private
    * @return {number}
    */
    Disk.prototype.get_sizeMib = function () {
        return this.m_sizeMib;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_sizeMib
    * @private
    * @param {number} v
    * @return {number}
    */
    Disk.prototype.set_sizeMib = function (v) {
        this.m_sizeMib = v;
        this.n_sizeMib = true;
        return this.m_sizeMib;
    };

    Object.defineProperty(Disk.prototype, "sizeMib", {
        /**
        * サイズ[MiB]
        *
        * @property sizeMib
        * @type number
        * @public
        */
        get: function () {
            return this.get_sizeMib();
        },
        set: function (v) {
            this.set_sizeMib(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_serviceClass
    * @private
    * @return {string}
    */
    Disk.prototype.get_serviceClass = function () {
        return this.m_serviceClass;
    };

    Object.defineProperty(Disk.prototype, "serviceClass", {
        /**
        * サービスクラス
        *
        * @property serviceClass
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_serviceClass();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_plan
    * @private
    * @return {DiskPlan}
    */
    Disk.prototype.get_plan = function () {
        return this.m_plan;
    };

    Object.defineProperty(Disk.prototype, "plan", {
        /**
        * プラン
        *
        * @property plan
        * @type DiskPlan
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_plan();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_server
    * @private
    * @return {Server}
    */
    Disk.prototype.get_server = function () {
        return this.m_server;
    };

    Object.defineProperty(Disk.prototype, "server", {
        /**
        * 接続先のサーバ
        *
        * @property server
        * @type Server
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_server();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_availability
    * @private
    * @return {string}
    */
    Disk.prototype.get_availability = function () {
        return this.m_availability;
    };

    Object.defineProperty(Disk.prototype, "availability", {
        /**
        * 有効状態
        *
        * @property availability
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_availability();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method apiDeserializeImpl
    * @protected
    * @param {any} r
    */
    Disk.prototype.apiDeserializeImpl = function (r) {
        var _this = this;
        this.isNew = r == null;
        if (this.isNew) {
            r = {};
        }
        ;
        this.isIncomplete = false;
        if (("ID" in r)) {
            this.m_id = r["ID"] == null ? null : "" + r["ID"];
        } else {
            this.m_id = null;
            this.isIncomplete = true;
        }
        ;
        this.n_id = false;
        if (("Name" in r)) {
            this.m_name = r["Name"] == null ? null : "" + r["Name"];
        } else {
            this.m_name = null;
            this.isIncomplete = true;
        }
        ;
        this.n_name = false;
        if (("Description" in r)) {
            this.m_description = r["Description"] == null ? null : "" + r["Description"];
        } else {
            this.m_description = null;
            this.isIncomplete = true;
        }
        ;
        this.n_description = false;
        if (("Tags" in r)) {
            if (r["Tags"] == null) {
                this.m_tags = [];
            } else {
                this.m_tags = [];
                (r["Tags"]).forEach(function (t) {
                     {
                        var v = null;
                        v = t == null ? null : "" + t;
                        _this.m_tags.push(v);
                    }
                });
            }
            ;
        } else {
            this.m_tags = null;
            this.isIncomplete = true;
        }
        ;
        this.n_tags = false;
        if (("Icon" in r)) {
            this.m_icon = r["Icon"] == null ? null : new Icon(this._client, r["Icon"]);
        } else {
            this.m_icon = null;
            this.isIncomplete = true;
        }
        ;
        this.n_icon = false;
        if (("SizeMB" in r)) {
            this.m_sizeMib = r["SizeMB"] == null ? null : parseInt("" + r["SizeMB"], 10);
        } else {
            this.m_sizeMib = null;
            this.isIncomplete = true;
        }
        ;
        this.n_sizeMib = false;
        if (("ServiceClass" in r)) {
            this.m_serviceClass = r["ServiceClass"] == null ? null : "" + r["ServiceClass"];
        } else {
            this.m_serviceClass = null;
            this.isIncomplete = true;
        }
        ;
        this.n_serviceClass = false;
        if (("Plan" in r)) {
            this.m_plan = r["Plan"] == null ? null : new DiskPlan(this._client, r["Plan"]);
        } else {
            this.m_plan = null;
            this.isIncomplete = true;
        }
        ;
        this.n_plan = false;
        if (("Server" in r)) {
            this.m_server = r["Server"] == null ? null : new Server(this._client, r["Server"]);
        } else {
            this.m_server = null;
            this.isIncomplete = true;
        }
        ;
        this.n_server = false;
        if (("Availability" in r)) {
            this.m_availability = r["Availability"] == null ? null : "" + r["Availability"];
        } else {
            this.m_availability = null;
            this.isIncomplete = true;
        }
        ;
        this.n_availability = false;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Disk.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        var ret = {};
        if (withClean || this.n_id) {
            ret["ID"] = this.m_id;
        }
        ;
        if (withClean || this.n_name) {
            ret["Name"] = this.m_name;
        }
        ;
        if (withClean || this.n_description) {
            ret["Description"] = this.m_description;
        }
        ;
        if (withClean || this.n_tags) {
            ret["Tags"] = [];
            this.m_tags.forEach(function (r) {
                 {
                    var v = null;
                    v = r;
                    ret["Tags"].push(v);
                }
            });
        }
        ;
        if (withClean || this.n_icon) {
            ret["Icon"] = withClean ? (this.m_icon == null ? null : this.m_icon.apiSerialize(withClean)) : (this.m_icon == null ? { ID: "0" } : this.m_icon.apiSerializeID());
        }
        ;
        if (withClean || this.n_sizeMib) {
            ret["SizeMB"] = this.m_sizeMib;
        }
        ;
        if (withClean || this.n_serviceClass) {
            ret["ServiceClass"] = this.m_serviceClass;
        }
        ;
        if (withClean || this.n_plan) {
            ret["Plan"] = withClean ? (this.m_plan == null ? null : this.m_plan.apiSerialize(withClean)) : (this.m_plan == null ? { ID: "0" } : this.m_plan.apiSerializeID());
        }
        ;
        if (withClean || this.n_server) {
            ret["Server"] = withClean ? (this.m_server == null ? null : this.m_server.apiSerialize(withClean)) : (this.m_server == null ? { ID: "0" } : this.m_server.apiSerializeID());
        }
        ;
        if (withClean || this.n_availability) {
            ret["Availability"] = this.m_availability;
        }
        ;
        return ret;
    };
    return Disk;
})(Resource);
module.exports = Disk;
