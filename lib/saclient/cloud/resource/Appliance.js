var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');
var SaclientException = require('../../errors/SaclientException');

var Resource = require('./Resource');
var Icon = require('./Icon');
var Iface = require('./Iface');

'use strict';

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
    * @param {any} obj
    * @param {Client} client
    * @param {boolean} wrapped=false
    */
    function Appliance(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
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
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(client, "saclient.cloud.Client");
        Util.validateType(wrapped, "boolean");
        this.apiDeserialize(obj, wrapped);
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
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        if (!this.isNew) {
            throw new SaclientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saclient.cloud.resource.Appliance#clazz");
        }
        ;
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
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
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
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
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
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "Array");
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
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "saclient.cloud.resource.Icon");
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
    * @method apiDeserializeImpl
    * @protected
    * @param {any} r
    */
    Appliance.prototype.apiDeserializeImpl = function (r) {
        Util.validateArgCount(arguments.length, 1);
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
        if (Util.existsPath(r, "Class")) {
            this.m_clazz = Util.getByPath(r, "Class") == null ? null : "" + Util.getByPath(r, "Class");
        } else {
            this.m_clazz = null;
            this.isIncomplete = true;
        }
        ;
        this.n_clazz = false;
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
        if (Util.existsPath(r, "ServiceClass")) {
            this.m_serviceClass = Util.getByPath(r, "ServiceClass") == null ? null : "" + Util.getByPath(r, "ServiceClass");
        } else {
            this.m_serviceClass = null;
            this.isIncomplete = true;
        }
        ;
        this.n_serviceClass = false;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Appliance.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        Util.validateType(withClean, "boolean");
        var ret = {};
        if (withClean || this.n_id) {
            Util.setByPath(ret, "ID", this.m_id);
        }
        ;
        if (withClean || this.n_clazz) {
            Util.setByPath(ret, "Class", this.m_clazz);
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
        if (withClean || this.n_serviceClass) {
            Util.setByPath(ret, "ServiceClass", this.m_serviceClass);
        }
        ;
        return ret;
    };
    return Appliance;
})(Resource);
module.exports = Appliance;
