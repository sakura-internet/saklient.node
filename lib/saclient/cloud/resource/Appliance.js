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

/**
* アプライアンスのリソース情報へのアクセス機能や操作機能を備えたクラス。
*
* @class Appliance
* @constructor
* @extends Resource
*/
var Appliance = (function (_super) {
    __extends(Appliance, _super);
    /**
    * @private
    * @constructor
    * @public
    * @param {Client} client
    * @param {any} r
    */
    function Appliance(client, r) {
        _super.call(this, client);
        /**
        * @member saclient.cloud.resource.Appliance#n_id
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saclient.cloud.resource.Appliance#n_clazz
        * @type boolean
        * @private
        */
        this.n_clazz = false;
        /**
        * @member saclient.cloud.resource.Appliance#n_name
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saclient.cloud.resource.Appliance#n_description
        * @type boolean
        * @private
        */
        this.n_description = false;
        /**
        * @member saclient.cloud.resource.Appliance#n_tags
        * @type boolean
        * @private
        */
        this.n_tags = false;
        /**
        * @member saclient.cloud.resource.Appliance#n_icon
        * @type boolean
        * @private
        */
        this.n_icon = false;
        /**
        * @member saclient.cloud.resource.Appliance#n_ifaces
        * @type boolean
        * @private
        */
        this.n_ifaces = false;
        /**
        * @member saclient.cloud.resource.Appliance#n_serviceClass
        * @type boolean
        * @private
        */
        this.n_serviceClass = false;
        this.apiDeserialize(r);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Appliance.prototype._apiPath = function () {
        return "/appliance";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Appliance.prototype._rootKey = function () {
        return "Appliance";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Appliance.prototype._rootKeyM = function () {
        return "Appliances";
    };

    /**
    * @private
    * @method _id
    * @public
    * @return {string}
    */
    Appliance.prototype._id = function () {
        return this.get_id();
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新しいインスタンスを作成します。
    *
    * @method create
    * @chainable
    * @public
    * @return {Appliance} this
    */
    Appliance.prototype.create = function () {
        return (this._create());
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
    *
    * @method save
    * @chainable
    * @public
    * @return {Appliance} this
    */
    Appliance.prototype.save = function () {
        return (this._save());
    };

    /**
    * 最新のリソース情報を再取得します。
    *
    * @method reload
    * @chainable
    * @public
    * @return {Appliance} this
    */
    Appliance.prototype.reload = function () {
        return (this._reload());
    };

    /**
    * アプライアンスを起動します。
    *
    * @method boot
    * @chainable
    * @public
    * @return {Appliance}
    */
    Appliance.prototype.boot = function () {
        this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/power");
        return this;
    };

    /**
    * アプライアンスをシャットダウンします。
    *
    * @method shutdown
    * @chainable
    * @public
    * @return {Appliance}
    */
    Appliance.prototype.shutdown = function () {
        this._client.request("DELETE", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/power");
        return this;
    };

    /**
    * アプライアンスを強制停止します。
    *
    * @method stop
    * @chainable
    * @public
    * @return {Appliance}
    */
    Appliance.prototype.stop = function () {
        this._client.request("DELETE", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/power", { Force: true });
        return this;
    };

    /**
    * アプライアンスを強制再起動します。
    *
    * @method reboot
    * @chainable
    * @public
    * @return {Appliance}
    */
    Appliance.prototype.reboot = function () {
        this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/reset");
        return this;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    Appliance.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(Appliance.prototype, "id", {
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
    * @method get_clazz
    * @private
    * @return {string}
    */
    Appliance.prototype.get_clazz = function () {
        return this.m_clazz;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_clazz
    * @private
    * @param {string} v
    * @return {string}
    */
    Appliance.prototype.set_clazz = function (v) {
        this.m_clazz = v;
        this.n_clazz = true;
        return this.m_clazz;
    };

    Object.defineProperty(Appliance.prototype, "clazz", {
        /**
        * クラス
        *
        * @property clazz
        * @type string
        * @public
        */
        get: function () {
            return this.get_clazz();
        },
        set: function (v) {
            this.set_clazz(v);
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
    Appliance.prototype.get_name = function () {
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
    Appliance.prototype.set_name = function (v) {
        this.m_name = v;
        this.n_name = true;
        return this.m_name;
    };

    Object.defineProperty(Appliance.prototype, "name", {
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
    Appliance.prototype.get_description = function () {
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
    Appliance.prototype.set_description = function (v) {
        this.m_description = v;
        this.n_description = true;
        return this.m_description;
    };

    Object.defineProperty(Appliance.prototype, "description", {
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
    Appliance.prototype.get_tags = function () {
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
    Appliance.prototype.set_tags = function (v) {
        this.m_tags = v;
        this.n_tags = true;
        return this.m_tags;
    };

    Object.defineProperty(Appliance.prototype, "tags", {
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
    Appliance.prototype.get_icon = function () {
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
    Appliance.prototype.set_icon = function (v) {
        this.m_icon = v;
        this.n_icon = true;
        return this.m_icon;
    };

    Object.defineProperty(Appliance.prototype, "icon", {
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
    * @method get_ifaces
    * @private
    * @return {Iface[]}
    */
    Appliance.prototype.get_ifaces = function () {
        return this.m_ifaces;
    };

    Object.defineProperty(Appliance.prototype, "ifaces", {
        /**
        * プラン
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
    * @method get_serviceClass
    * @private
    * @return {string}
    */
    Appliance.prototype.get_serviceClass = function () {
        return this.m_serviceClass;
    };

    Object.defineProperty(Appliance.prototype, "serviceClass", {
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
    * @method apiDeserialize
    * @public
    * @param {any} r
    */
    Appliance.prototype.apiDeserialize = function (r) {
        var _this = this;
        this.isIncomplete = true;
        if (("ID" in r)) {
            this.m_id = r["ID"] == null ? null : "" + r["ID"];
            this.n_id = false;
        } else {
            this.isIncomplete = false;
        }
        ;
        if (("Class" in r)) {
            this.m_clazz = r["Class"] == null ? null : "" + r["Class"];
            this.n_clazz = false;
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
        if (("ServiceClass" in r)) {
            this.m_serviceClass = r["ServiceClass"] == null ? null : "" + r["ServiceClass"];
            this.n_serviceClass = false;
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
    Appliance.prototype.apiSerialize = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        var ret = {};
        if (withClean || this.n_id) {
            ret["ID"] = this.m_id;
        }
        ;
        if (withClean || this.n_clazz) {
            ret["Class"] = this.m_clazz;
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
        if (withClean || this.n_serviceClass) {
            ret["ServiceClass"] = this.m_serviceClass;
        }
        ;
        return ret;
    };
    return Appliance;
})(Resource);
module.exports = Appliance;
