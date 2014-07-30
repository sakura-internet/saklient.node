var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../Util');

var Resource = require('./Resource');
var Icon = require('./Icon');

var Iface = require('./Iface');
var ServerPlan = require('./ServerPlan');
var ServerInstance = require('./ServerInstance');

var EServerInstanceStatus = require('../enums/EServerInstanceStatus');

/**
* サーバのリソース情報へのアクセス機能や操作機能を備えたクラス。
*
* @class Server
* @constructor
* @extends Resource
*/
var Server = (function (_super) {
    __extends(Server, _super);
    /**
    * @private
    * @constructor
    * @public
    * @param {Client} client
    * @param {any} r
    */
    function Server(client, r) {
        _super.call(this, client);
        /**
        * @member saclient.cloud.resource.Server#n_id
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saclient.cloud.resource.Server#n_name
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saclient.cloud.resource.Server#n_description
        * @type boolean
        * @private
        */
        this.n_description = false;
        /**
        * @member saclient.cloud.resource.Server#n_tags
        * @type boolean
        * @private
        */
        this.n_tags = false;
        /**
        * @member saclient.cloud.resource.Server#n_icon
        * @type boolean
        * @private
        */
        this.n_icon = false;
        /**
        * @member saclient.cloud.resource.Server#n_plan
        * @type boolean
        * @private
        */
        this.n_plan = false;
        /**
        * @member saclient.cloud.resource.Server#n_ifaces
        * @type boolean
        * @private
        */
        this.n_ifaces = false;
        /**
        * @member saclient.cloud.resource.Server#n_instance
        * @type boolean
        * @private
        */
        this.n_instance = false;
        /**
        * @member saclient.cloud.resource.Server#n_availability
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
    Server.prototype._apiPath = function () {
        return "/server";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Server.prototype._rootKey = function () {
        return "Server";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Server.prototype._rootKeyM = function () {
        return "Servers";
    };

    /**
    * @private
    * @method _id
    * @public
    * @return {string}
    */
    Server.prototype._id = function () {
        return this.get_id();
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
    *
    * @method save
    * @chainable
    * @public
    * @return {Server} this
    */
    Server.prototype.save = function () {
        return (this._save());
    };

    /**
    * 最新のリソース情報を再取得します。
    *
    * @method reload
    * @chainable
    * @public
    * @return {Server} this
    */
    Server.prototype.reload = function () {
        return (this._reload());
    };

    /**
    * サーバが起動しているときtrueを返します。
    *
    * @method isUp
    * @public
    * @return {boolean}
    */
    Server.prototype.isUp = function () {
        return this.get_instance().isUp();
    };

    /**
    * サーバが停止しているときtrueを返します。
    *
    * @method isDown
    * @public
    * @return {boolean}
    */
    Server.prototype.isDown = function () {
        return this.get_instance().isDown();
    };

    /**
    * サーバを起動します。
    *
    * @method boot
    * @chainable
    * @public
    * @return {Server}
    */
    Server.prototype.boot = function () {
        this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/power");
        return this.reload();
    };

    /**
    * サーバをシャットダウンします。
    *
    * @method shutdown
    * @chainable
    * @public
    * @return {Server}
    */
    Server.prototype.shutdown = function () {
        this._client.request("DELETE", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/power");
        return this.reload();
    };

    /**
    * サーバを強制停止します。
    *
    * @method stop
    * @chainable
    * @public
    * @return {Server}
    */
    Server.prototype.stop = function () {
        this._client.request("DELETE", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/power", { Force: true });
        return this.reload();
    };

    /**
    * サーバを強制再起動します。
    *
    * @method reboot
    * @chainable
    * @public
    * @return {Server}
    */
    Server.prototype.reboot = function () {
        this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/reset");
        return this.reload();
    };

    /**
    * サーバが停止するまで待機します。
    *
    * @method afterDown
    * @public
    * @param {number} timeoutSec
    * @param {(Server, boolean) => void} callback
    * @return {void}
    */
    Server.prototype.afterDown = function (timeoutSec, callback) {
        this.afterStatus(EServerInstanceStatus.down, timeoutSec, callback);
    };

    /**
    * サーバが指定のステータスに遷移するまで待機します。
    *
    * @ignore
    * @method afterStatus
    * @private
    * @param {number} timeoutSec
    * @param {string} status
    * @param {(Server, boolean) => void} callback
    * @return {void}
    */
    Server.prototype.afterStatus = function (status, timeoutSec, callback) {
        var ret = this.sleepUntil(status, timeoutSec);
        callback(this, ret);
    };

    /**
    * サーバが停止するまで待機します。
    *
    * @method sleepUntilDown
    * @public
    * @param {number} timeoutSec=180
    * @return {boolean}
    */
    Server.prototype.sleepUntilDown = function (timeoutSec) {
        if (typeof timeoutSec === "undefined") { timeoutSec = 180; }
        return this.sleepUntil(EServerInstanceStatus.down, timeoutSec);
    };

    /**
    * サーバが指定のステータスに遷移するまで待機します。
    *
    * @ignore
    * @method sleepUntil
    * @private
    * @param {string} status
    * @param {number} timeoutSec=180
    * @return {boolean}
    */
    Server.prototype.sleepUntil = function (status, timeoutSec) {
        if (typeof timeoutSec === "undefined") { timeoutSec = 180; }
        var step = 3;
        while (0 < timeoutSec) {
            this.reload();
            var s = this.get_instance()["status"];
            if (s == null) {
                s = EServerInstanceStatus.down;
            }
            ;
            if (s == status) {
                return true;
            }
            ;
            timeoutSec -= step;
            if (0 < timeoutSec) {
                Util.sleep(step);
            }
            ;
        }
        ;
        return false;
    };

    /**
    * サーバのプランを変更します。
    *
    * @method changePlan
    * @chainable
    * @public
    * @param {ServerPlan} planTo
    * @return {Server}
    */
    Server.prototype.changePlan = function (planTo) {
        var path = this._apiPath() + "/" + Util.urlEncode(this._id()) + "/to/plan/" + Util.urlEncode(planTo._id());
        var result = this._client.request("PUT", path);
        this.apiDeserialize(result[this._rootKey()]);
        return this;
    };

    /**
    * サーバに接続されているディスクのリストを取得します。
    *
    * @method findDisks
    * @public
    * @return {Disk[]}
    */
    Server.prototype.findDisks = function () {
        var model = Util.createClassInstance("saclient.cloud.model.Model_Disk", [this._client]);
        return model.withServerId(this._id()).find();
    };

    /**
    * サーバにインタフェースを1つ増設し、それを取得します。
    *
    * @method addIface
    * @public
    * @return {Iface}
    */
    Server.prototype.addIface = function () {
        var model = Util.createClassInstance("saclient.cloud.model.Model_Iface", [this._client]);
        var res = model.create();
        res.setProperty("serverId", this._id());
        return res.save();
    };

    /**
    * サーバにISOイメージを挿入します。
    *
    * @method insertIsoImage
    * @chainable
    * @public
    * @param {IsoImage} iso
    * @return {Server}
    */
    Server.prototype.insertIsoImage = function (iso) {
        var path = this._apiPath() + "/" + Util.urlEncode(this._id()) + "/cdrom";
        var q = { CDROM: { ID: iso._id() } };
        var result = this._client.request("PUT", path, q);
        this.reload();
        return this;
    };

    /**
    * サーバに挿入されているISOイメージを排出します。
    *
    * @method ejectIsoImage
    * @chainable
    * @public
    * @return {Server}
    */
    Server.prototype.ejectIsoImage = function () {
        var path = this._apiPath() + "/" + Util.urlEncode(this._id()) + "/cdrom";
        var result = this._client.request("DELETE", path);
        this.reload();
        return this;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    Server.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(Server.prototype, "id", {
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
    Server.prototype.get_name = function () {
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
    Server.prototype.set_name = function (v) {
        this.m_name = v;
        this.n_name = true;
        return this.m_name;
    };

    Object.defineProperty(Server.prototype, "name", {
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
    Server.prototype.get_description = function () {
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
    Server.prototype.set_description = function (v) {
        this.m_description = v;
        this.n_description = true;
        return this.m_description;
    };

    Object.defineProperty(Server.prototype, "description", {
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
    Server.prototype.get_tags = function () {
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
    Server.prototype.set_tags = function (v) {
        this.m_tags = v;
        this.n_tags = true;
        return this.m_tags;
    };

    Object.defineProperty(Server.prototype, "tags", {
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
    Server.prototype.get_icon = function () {
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
    Server.prototype.set_icon = function (v) {
        this.m_icon = v;
        this.n_icon = true;
        return this.m_icon;
    };

    Object.defineProperty(Server.prototype, "icon", {
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
    * @method get_plan
    * @private
    * @return {ServerPlan}
    */
    Server.prototype.get_plan = function () {
        return this.m_plan;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_plan
    * @private
    * @param {ServerPlan} v
    * @return {ServerPlan}
    */
    Server.prototype.set_plan = function (v) {
        this.m_plan = v;
        this.n_plan = true;
        return this.m_plan;
    };

    Object.defineProperty(Server.prototype, "plan", {
        /**
        * プラン
        *
        * @property plan
        * @type ServerPlan
        * @public
        */
        get: function () {
            return this.get_plan();
        },
        set: function (v) {
            this.set_plan(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_ifaces
    * @private
    * @return {Iface[]}
    */
    Server.prototype.get_ifaces = function () {
        return this.m_ifaces;
    };

    Object.defineProperty(Server.prototype, "ifaces", {
        /**
        * インタフェース
        *
        * @property ifaces
        * @type Iface[]
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_ifaces();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_instance
    * @private
    * @return {ServerInstance}
    */
    Server.prototype.get_instance = function () {
        return this.m_instance;
    };

    Object.defineProperty(Server.prototype, "instance", {
        /**
        * インスタンス情報
        *
        * @property instance
        * @type ServerInstance
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_instance();
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
    Server.prototype.get_availability = function () {
        return this.m_availability;
    };

    Object.defineProperty(Server.prototype, "availability", {
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
    Server.prototype.apiDeserializeImpl = function (r) {
        this.isNew = r == null;
        if (this.isNew) {
            r = {};
        }
        ;
        this.isIncomplete = false;
        if (Util.existsPath(r, "ID")) {
            this.m_id = Util.getByPath(r, "ID") == null ? null : "" + Util.getByPath(r, "ID");
        } else {
            this.m_id = null;
            this.isIncomplete = true;
        }
        ;
        this.n_id = false;
        if (Util.existsPath(r, "Name")) {
            this.m_name = Util.getByPath(r, "Name") == null ? null : "" + Util.getByPath(r, "Name");
        } else {
            this.m_name = null;
            this.isIncomplete = true;
        }
        ;
        this.n_name = false;
        if (Util.existsPath(r, "Description")) {
            this.m_description = Util.getByPath(r, "Description") == null ? null : "" + Util.getByPath(r, "Description");
        } else {
            this.m_description = null;
            this.isIncomplete = true;
        }
        ;
        this.n_description = false;
        if (Util.existsPath(r, "Tags")) {
            if (Util.getByPath(r, "Tags") == null) {
                this.m_tags = [];
            } else {
                this.m_tags = [];
                for (var __it1 = 0; __it1 < (Util.getByPath(r, "Tags")).length; __it1++) {
                    var t = (Util.getByPath(r, "Tags"))[__it1];
                    var v1 = null;
                    v1 = t == null ? null : "" + t;
                    this.m_tags.push(v1);
                }
                ;
            }
            ;
        } else {
            this.m_tags = null;
            this.isIncomplete = true;
        }
        ;
        this.n_tags = false;
        if (Util.existsPath(r, "Icon")) {
            this.m_icon = Util.getByPath(r, "Icon") == null ? null : new Icon(this._client, Util.getByPath(r, "Icon"));
        } else {
            this.m_icon = null;
            this.isIncomplete = true;
        }
        ;
        this.n_icon = false;
        if (Util.existsPath(r, "ServerPlan")) {
            this.m_plan = Util.getByPath(r, "ServerPlan") == null ? null : new ServerPlan(this._client, Util.getByPath(r, "ServerPlan"));
        } else {
            this.m_plan = null;
            this.isIncomplete = true;
        }
        ;
        this.n_plan = false;
        if (Util.existsPath(r, "Interfaces")) {
            if (Util.getByPath(r, "Interfaces") == null) {
                this.m_ifaces = [];
            } else {
                this.m_ifaces = [];
                for (var __it2 = 0; __it2 < (Util.getByPath(r, "Interfaces")).length; __it2++) {
                    var t = (Util.getByPath(r, "Interfaces"))[__it2];
                    var v2 = null;
                    v2 = t == null ? null : new Iface(this._client, t);
                    this.m_ifaces.push(v2);
                }
                ;
            }
            ;
        } else {
            this.m_ifaces = null;
            this.isIncomplete = true;
        }
        ;
        this.n_ifaces = false;
        if (Util.existsPath(r, "Instance")) {
            this.m_instance = Util.getByPath(r, "Instance") == null ? null : new ServerInstance(this._client, Util.getByPath(r, "Instance"));
        } else {
            this.m_instance = null;
            this.isIncomplete = true;
        }
        ;
        this.n_instance = false;
        if (Util.existsPath(r, "Availability")) {
            this.m_availability = Util.getByPath(r, "Availability") == null ? null : "" + Util.getByPath(r, "Availability");
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
    Server.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        var ret = {};
        if (withClean || this.n_id) {
            Util.setByPath(ret, "ID", this.m_id);
        }
        ;
        if (withClean || this.n_name) {
            Util.setByPath(ret, "Name", this.m_name);
        }
        ;
        if (withClean || this.n_description) {
            Util.setByPath(ret, "Description", this.m_description);
        }
        ;
        if (withClean || this.n_tags) {
            Util.setByPath(ret, "Tags", []);
            for (var __it1 = 0; __it1 < this.m_tags.length; __it1++) {
                var r1 = this.m_tags[__it1];
                var v = null;
                v = r1;
                ret["Tags"].push(v);
            }
            ;
        }
        ;
        if (withClean || this.n_icon) {
            Util.setByPath(ret, "Icon", withClean ? (this.m_icon == null ? null : this.m_icon.apiSerialize(withClean)) : (this.m_icon == null ? { ID: "0" } : this.m_icon.apiSerializeID()));
        }
        ;
        if (withClean || this.n_plan) {
            Util.setByPath(ret, "ServerPlan", withClean ? (this.m_plan == null ? null : this.m_plan.apiSerialize(withClean)) : (this.m_plan == null ? { ID: "0" } : this.m_plan.apiSerializeID()));
        }
        ;
        if (withClean || this.n_ifaces) {
            Util.setByPath(ret, "Interfaces", []);
            for (var __it2 = 0; __it2 < this.m_ifaces.length; __it2++) {
                var r2 = this.m_ifaces[__it2];
                var v = null;
                v = withClean ? (r2 == null ? null : r2.apiSerialize(withClean)) : (r2 == null ? { ID: "0" } : r2.apiSerializeID());
                ret["Interfaces"].push(v);
            }
            ;
        }
        ;
        if (withClean || this.n_instance) {
            Util.setByPath(ret, "Instance", withClean ? (this.m_instance == null ? null : this.m_instance.apiSerialize(withClean)) : (this.m_instance == null ? { ID: "0" } : this.m_instance.apiSerializeID()));
        }
        ;
        if (withClean || this.n_availability) {
            Util.setByPath(ret, "Availability", this.m_availability);
        }
        ;
        return ret;
    };
    return Server;
})(Resource);
module.exports = Server;
