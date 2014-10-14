var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');
var SaklientException = require('../../errors/SaklientException');

var Resource = require('./Resource');
var Icon = require('./Icon');
var Iface = require('./Iface');

var EAvailability = require('../enums/EAvailability');
var EServerInstanceStatus = require('../enums/EServerInstanceStatus');

'use strict';

/**
* アプライアンスの実体1つに対応し、属性の取得や操作を行うためのクラス。
*
* @module saklient.cloud.resources.Appliance
* @class Appliance
* @constructor
* @extends Resource
*/
var Appliance = (function (_super) {
    __extends(Appliance, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    * @param {any} obj
    * @param {boolean} wrapped=false
    */
    function Appliance(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client);
        /**
        * @member saklient.cloud.resources.Appliance#n_id
        * @default false
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saklient.cloud.resources.Appliance#n_clazz
        * @default false
        * @type boolean
        * @private
        */
        this.n_clazz = false;
        /**
        * @member saklient.cloud.resources.Appliance#n_name
        * @default false
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saklient.cloud.resources.Appliance#n_description
        * @default false
        * @type boolean
        * @private
        */
        this.n_description = false;
        /**
        * @member saklient.cloud.resources.Appliance#n_tags
        * @default false
        * @type boolean
        * @private
        */
        this.n_tags = false;
        /**
        * @member saklient.cloud.resources.Appliance#n_icon
        * @default false
        * @type boolean
        * @private
        */
        this.n_icon = false;
        /**
        * @member saklient.cloud.resources.Appliance#n_planId
        * @default false
        * @type boolean
        * @private
        */
        this.n_planId = false;
        /**
        * @member saklient.cloud.resources.Appliance#n_ifaces
        * @default false
        * @type boolean
        * @private
        */
        this.n_ifaces = false;
        /**
        * @member saklient.cloud.resources.Appliance#n_rawAnnotation
        * @default false
        * @type boolean
        * @private
        */
        this.n_rawAnnotation = false;
        /**
        * @member saklient.cloud.resources.Appliance#n_rawSettings
        * @default false
        * @type boolean
        * @private
        */
        this.n_rawSettings = false;
        /**
        * @member saklient.cloud.resources.Appliance#n_rawSettingsHash
        * @default false
        * @type boolean
        * @private
        */
        this.n_rawSettingsHash = false;
        /**
        * @member saklient.cloud.resources.Appliance#n_status
        * @default false
        * @type boolean
        * @private
        */
        this.n_status = false;
        /**
        * @member saklient.cloud.resources.Appliance#n_serviceClass
        * @default false
        * @type boolean
        * @private
        */
        this.n_serviceClass = false;
        /**
        * @member saklient.cloud.resources.Appliance#n_availability
        * @default false
        * @type boolean
        * @private
        */
        this.n_availability = false;
        /**
        * @member saklient.cloud.resources.Appliance#n_swytchId
        * @default false
        * @type boolean
        * @private
        */
        this.n_swytchId = false;
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(client, "saklient.cloud.Client");
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
    * @method _className
    * @return {string}
    */
    Appliance.prototype._className = function () {
        return "Appliance";
    };

    /**
    * @private
    * @method _id
    * @return {string}
    */
    Appliance.prototype._id = function () {
        return this.get_id();
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新規作成または上書き保存します。
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
    * @private
    * @method trueClassName
    * @return {string}
    */
    Appliance.prototype.trueClassName = function () {
        if (this.clazz == null) {
            return null;
        }
        ;
        switch (this.clazz) {
            case "loadbalancer": {
                return "LoadBalancer";
            }
            case "vpcrouter": {
                return "VpcRouter";
            }
        }
        ;
        return null;
    };

    /**
    * @private
    * @method _onBeforeSave
    * @protected
    * @param {any} query
    * @return {void}
    */
    Appliance.prototype._onBeforeSave = function (query) {
        Util.validateArgCount(arguments.length, 1);
        Util.setByPath(query, "OriginalSettingsHash", this.get_rawSettingsHash());
    };

    /**
    * このルータが接続されているスイッチを取得します。
    *
    * @method getSwytch
    * @public
    * @return {Swytch}
    */
    Appliance.prototype.getSwytch = function () {
        var model = Util.createClassInstance("saklient.cloud.models.Model_Swytch", [this._client]);
        var id = this.get_swytchId();
        return model.getById(id);
    };

    /**
    * アプライアンスの設定を反映します。
    *
    * @method apply
    * @chainable
    * @public
    * @return {Appliance} this
    */
    Appliance.prototype.apply = function () {
        this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/config");
        return this;
    };

    /**
    * アプライアンスを起動します。
    *
    * @method boot
    * @chainable
    * @public
    * @return {Appliance} this
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
    * @return {Appliance} this
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
    * @return {Appliance} this
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
    * @return {Appliance} this
    */
    Appliance.prototype.reboot = function () {
        this._client.request("PUT", this._apiPath() + "/" + Util.urlEncode(this._id()) + "/reset");
        return this;
    };

    /**
    * 作成中のアプライアンスが利用可能になるまで待機します。
    *
    * @method sleepWhileCreating
    * @public
    * @param {number} timeoutSec=600
    * @return {boolean} 成功時はtrue、タイムアウトやエラーによる失敗時はfalseを返します。
    */
    Appliance.prototype.sleepWhileCreating = function (timeoutSec) {
        if (typeof timeoutSec === "undefined") { timeoutSec = 600; }
        Util.validateType(timeoutSec, "number");
        var step = 10;
        while (0 < timeoutSec) {
            this.reload();
            var a = this.get_availability();
            if (a == EAvailability.available) {
                return true;
            }
            ;
            if (a != EAvailability.migrating) {
                timeoutSec = 0;
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
    * アプライアンスが起動するまで待機します。
    *
    * @method sleepUntilUp
    * @public
    * @param {number} timeoutSec=600
    * @return {boolean}
    */
    Appliance.prototype.sleepUntilUp = function (timeoutSec) {
        if (typeof timeoutSec === "undefined") { timeoutSec = 600; }
        Util.validateType(timeoutSec, "number");
        return this.sleepUntil(EServerInstanceStatus.up, timeoutSec);
    };

    /**
    * アプライアンスが停止するまで待機します。
    *
    * @method sleepUntilDown
    * @public
    * @param {number} timeoutSec=600
    * @return {boolean} 成功時はtrue、タイムアウトやエラーによる失敗時はfalseを返します。
    */
    Appliance.prototype.sleepUntilDown = function (timeoutSec) {
        if (typeof timeoutSec === "undefined") { timeoutSec = 600; }
        Util.validateType(timeoutSec, "number");
        return this.sleepUntil(EServerInstanceStatus.down, timeoutSec);
    };

    /**
    * アプライアンスが指定のステータスに遷移するまで待機します。
    *
    * @private
    * @method sleepUntil
    * @param {string} status
    * @param {number} timeoutSec=600
    * @return {boolean}
    */
    Appliance.prototype.sleepUntil = function (status, timeoutSec) {
        if (typeof timeoutSec === "undefined") { timeoutSec = 600; }
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(status, "string");
        Util.validateType(timeoutSec, "number");
        var step = 10;
        while (0 < timeoutSec) {
            this.reload();
            var s = this.get_status();
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
            throw new SaklientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saklient.cloud.resources.Appliance#clazz");
        }
        ;
        this.m_clazz = v;
        this.n_clazz = true;
        return this.m_clazz;
    };

    Object.defineProperty(Appliance.prototype, "clazz", {
        /**
        * クラス {{#crossLink "EApplianceClass"}}{{/crossLink}}
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
        this.n_tags = true;
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
        Util.validateType(v, "saklient.cloud.resources.Icon");
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
    * @method get_planId
    * @private
    * @return {number}
    */
    Appliance.prototype.get_planId = function () {
        return this.m_planId;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_planId
    * @private
    * @param {number} v
    * @return {number}
    */
    Appliance.prototype.set_planId = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "number");
        if (!this.isNew) {
            throw new SaklientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saklient.cloud.resources.Appliance#planId");
        }
        ;
        this.m_planId = v;
        this.n_planId = true;
        return this.m_planId;
    };

    Object.defineProperty(Appliance.prototype, "planId", {
        /**
        * プラン
        *
        * @property planId
        * @type number
        * @public
        */
        get: function () {
            return this.get_planId();
        },
        set: function (v) {
            this.set_planId(v);
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
    * @method get_rawAnnotation
    * @private
    * @return {any}
    */
    Appliance.prototype.get_rawAnnotation = function () {
        return this.m_rawAnnotation;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_rawAnnotation
    * @private
    * @param {any} v
    * @return {any}
    */
    Appliance.prototype.set_rawAnnotation = function (v) {
        Util.validateArgCount(arguments.length, 1);
        if (!this.isNew) {
            throw new SaklientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saklient.cloud.resources.Appliance#rawAnnotation");
        }
        ;
        this.m_rawAnnotation = v;
        this.n_rawAnnotation = true;
        return this.m_rawAnnotation;
    };

    Object.defineProperty(Appliance.prototype, "rawAnnotation", {
        /**
        * 注釈
        *
        * @property rawAnnotation
        * @type any
        * @public
        */
        get: function () {
            return this.get_rawAnnotation();
        },
        set: function (v) {
            this.set_rawAnnotation(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_rawSettings
    * @private
    * @return {any}
    */
    Appliance.prototype.get_rawSettings = function () {
        this.n_rawSettings = true;
        return this.m_rawSettings;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_rawSettings
    * @private
    * @param {any} v
    * @return {any}
    */
    Appliance.prototype.set_rawSettings = function (v) {
        Util.validateArgCount(arguments.length, 1);
        this.m_rawSettings = v;
        this.n_rawSettings = true;
        return this.m_rawSettings;
    };

    Object.defineProperty(Appliance.prototype, "rawSettings", {
        /**
        * 設定の生データ
        *
        * @property rawSettings
        * @type any
        * @public
        */
        get: function () {
            return this.get_rawSettings();
        },
        set: function (v) {
            this.set_rawSettings(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_rawSettingsHash
    * @private
    * @return {string}
    */
    Appliance.prototype.get_rawSettingsHash = function () {
        return this.m_rawSettingsHash;
    };

    Object.defineProperty(Appliance.prototype, "rawSettingsHash", {
        /**
        * @private
        * @property rawSettingsHash
        * @type string
        * @readOnly
        */
        get: function () {
            return this.get_rawSettingsHash();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_status
    * @private
    * @return {string}
    */
    Appliance.prototype.get_status = function () {
        return this.m_status;
    };

    Object.defineProperty(Appliance.prototype, "status", {
        /**
        * 起動状態 {{#crossLink "EServerInstanceStatus"}}{{/crossLink}}
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
    * @method get_availability
    * @private
    * @return {string}
    */
    Appliance.prototype.get_availability = function () {
        return this.m_availability;
    };

    Object.defineProperty(Appliance.prototype, "availability", {
        /**
        * 有効状態 {{#crossLink "EAvailability"}}{{/crossLink}}
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
    * @method get_swytchId
    * @private
    * @return {string}
    */
    Appliance.prototype.get_swytchId = function () {
        return this.m_swytchId;
    };

    Object.defineProperty(Appliance.prototype, "swytchId", {
        /**
        * 接続先スイッチID
        *
        * @property swytchId
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_swytchId();
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
        if (Util.existsPath(r, "Plan.ID")) {
            this.m_planId = Util.getByPath(r, "Plan.ID") == null ? null : parseInt("" + Util.getByPath(r, "Plan.ID"), 10);
        } else {
            this.m_planId = null;
            this.isIncomplete = true;
        }
        ;
        this.n_planId = false;
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
        if (Util.existsPath(r, "Remark")) {
            this.m_rawAnnotation = Util.getByPath(r, "Remark");
        } else {
            this.m_rawAnnotation = null;
            this.isIncomplete = true;
        }
        ;
        this.n_rawAnnotation = false;
        if (Util.existsPath(r, "Settings")) {
            this.m_rawSettings = Util.getByPath(r, "Settings");
        } else {
            this.m_rawSettings = null;
            this.isIncomplete = true;
        }
        ;
        this.n_rawSettings = false;
        if (Util.existsPath(r, "SettingsHash")) {
            this.m_rawSettingsHash = Util.getByPath(r, "SettingsHash") == null ? null : "" + Util.getByPath(r, "SettingsHash");
        } else {
            this.m_rawSettingsHash = null;
            this.isIncomplete = true;
        }
        ;
        this.n_rawSettingsHash = false;
        if (Util.existsPath(r, "Instance.Status")) {
            this.m_status = Util.getByPath(r, "Instance.Status") == null ? null : "" + Util.getByPath(r, "Instance.Status");
        } else {
            this.m_status = null;
            this.isIncomplete = true;
        }
        ;
        this.n_status = false;
        if (Util.existsPath(r, "ServiceClass")) {
            this.m_serviceClass = Util.getByPath(r, "ServiceClass") == null ? null : "" + Util.getByPath(r, "ServiceClass");
        } else {
            this.m_serviceClass = null;
            this.isIncomplete = true;
        }
        ;
        this.n_serviceClass = false;
        if (Util.existsPath(r, "Availability")) {
            this.m_availability = Util.getByPath(r, "Availability") == null ? null : "" + Util.getByPath(r, "Availability");
        } else {
            this.m_availability = null;
            this.isIncomplete = true;
        }
        ;
        this.n_availability = false;
        if (Util.existsPath(r, "Switch.ID")) {
            this.m_swytchId = Util.getByPath(r, "Switch.ID") == null ? null : "" + Util.getByPath(r, "Switch.ID");
        } else {
            this.m_swytchId = null;
            this.isIncomplete = true;
        }
        ;
        this.n_swytchId = false;
    };

    /**
    * @private
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Appliance.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        Util.validateType(withClean, "boolean");
        var missing = [];
        var ret = {};
        if (withClean || this.n_id) {
            Util.setByPath(ret, "ID", this.m_id);
        }
        ;
        if (withClean || this.n_clazz) {
            Util.setByPath(ret, "Class", this.m_clazz);
        } else {
            if (this.isNew) {
                missing.push("clazz");
            }
            ;
        }
        ;
        if (withClean || this.n_name) {
            Util.setByPath(ret, "Name", this.m_name);
        } else {
            if (this.isNew) {
                missing.push("name");
            }
            ;
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
        if (withClean || this.n_planId) {
            Util.setByPath(ret, "Plan.ID", this.m_planId);
        } else {
            if (this.isNew) {
                missing.push("planId");
            }
            ;
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
        if (withClean || this.n_rawAnnotation) {
            Util.setByPath(ret, "Remark", this.m_rawAnnotation);
        } else {
            if (this.isNew) {
                missing.push("rawAnnotation");
            }
            ;
        }
        ;
        if (withClean || this.n_rawSettings) {
            Util.setByPath(ret, "Settings", this.m_rawSettings);
        }
        ;
        if (withClean || this.n_rawSettingsHash) {
            Util.setByPath(ret, "SettingsHash", this.m_rawSettingsHash);
        }
        ;
        if (withClean || this.n_status) {
            Util.setByPath(ret, "Instance.Status", this.m_status);
        }
        ;
        if (withClean || this.n_serviceClass) {
            Util.setByPath(ret, "ServiceClass", this.m_serviceClass);
        }
        ;
        if (withClean || this.n_availability) {
            Util.setByPath(ret, "Availability", this.m_availability);
        }
        ;
        if (withClean || this.n_swytchId) {
            Util.setByPath(ret, "Switch.ID", this.m_swytchId);
        }
        ;
        if (missing.length > 0) {
            throw new SaklientException("required_field", "Required fields must be set before the Appliance creation: " + missing.join(", "));
        }
        ;
        return ret;
    };
    return Appliance;
})(Resource);
module.exports = Appliance;
