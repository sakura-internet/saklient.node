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
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新しいインスタンスを作成します。
    *
    * @method create
    * @chainable
    * @public
    * @return {Server} this
    */
    Server.prototype.create = function () {
        return (this._create());
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
    * サーバを起動します。
    *
    * @method boot
    * @chainable
    * @public
    * @return {Server}
    */
    Server.prototype.boot = function () {
        this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/power");
        return this;
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
        return this;
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
        return this;
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
        return this;
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

    Object.defineProperty(Server.prototype, "plan", {
        /**
        * プラン
        *
        * @property plan
        * @type ServerPlan
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
    * @method apiDeserialize
    * @public
    * @param {any} r
    */
    Server.prototype.apiDeserialize = function (r) {
        var _this = this;
        this.isIncomplete = true;
        if (("ID" in r)) {
            this.m_id = r["ID"] == null ? null : "" + r["ID"];
            this.n_id = false;
        } else {
            this.isIncomplete = false;
        }
        ;
        if (("Name" in r)) {
            this.m_name = r["Name"] == null ? null : "" + r["Name"];
            this.n_name = false;
        } else {
            this.isIncomplete = false;
        }
        ;
        if (("Description" in r)) {
            this.m_description = r["Description"] == null ? null : "" + r["Description"];
            this.n_description = false;
        } else {
            this.isIncomplete = false;
        }
        ;
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
            this.n_tags = false;
        } else {
            this.isIncomplete = false;
        }
        ;
        if (("Icon" in r)) {
            this.m_icon = r["Icon"] == null ? null : new Icon(this._client, r["Icon"]);
            this.n_icon = false;
        } else {
            this.isIncomplete = false;
        }
        ;
        if (("ServerPlan" in r)) {
            this.m_plan = r["ServerPlan"] == null ? null : new ServerPlan(this._client, r["ServerPlan"]);
            this.n_plan = false;
        } else {
            this.isIncomplete = false;
        }
        ;
        if (("Interfaces" in r)) {
            if (r["Interfaces"] == null) {
                this.m_ifaces = [];
            } else {
                this.m_ifaces = [];
                (r["Interfaces"]).forEach(function (t) {
                     {
                        var v = null;
                        v = t == null ? null : new Iface(_this._client, t);
                        _this.m_ifaces.push(v);
                    }
                });
            }
            ;
            this.n_ifaces = false;
        } else {
            this.isIncomplete = false;
        }
        ;
        if (("Instance" in r)) {
            this.m_instance = r["Instance"] == null ? null : new ServerInstance(this._client, r["Instance"]);
            this.n_instance = false;
        } else {
            this.isIncomplete = false;
        }
        ;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method apiSerialize
    * @public
    * @param {boolean} withClean=false
    * @return {any}
    */
    Server.prototype.apiSerialize = function (withClean) {
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
        if (withClean || this.n_plan) {
            ret["ServerPlan"] = withClean ? (this.m_plan == null ? null : this.m_plan.apiSerialize(withClean)) : (this.m_plan == null ? { ID: "0" } : this.m_plan.apiSerializeID());
        }
        ;
        if (withClean || this.n_ifaces) {
            ret["Interfaces"] = [];
            this.m_ifaces.forEach(function (r) {
                 {
                    var v = null;
                    v = withClean ? (r == null ? null : r.apiSerialize(withClean)) : (r == null ? { ID: "0" } : r.apiSerializeID());
                    ret["Interfaces"].push(v);
                }
            });
        }
        ;
        if (withClean || this.n_instance) {
            ret["Instance"] = withClean ? (this.m_instance == null ? null : this.m_instance.apiSerialize(withClean)) : (this.m_instance == null ? { ID: "0" } : this.m_instance.apiSerializeID());
        }
        ;
        return ret;
    };
    return Server;
})(Resource);
module.exports = Server;
