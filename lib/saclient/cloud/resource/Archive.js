var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Resource = require('./Resource');
var Icon = require('./Icon');
var DiskPlan = require('./DiskPlan');

/**
* アーカイブのリソース情報へのアクセス機能や操作機能を備えたクラス。
*
* @class Archive
* @constructor
* @extends Resource
*/
var Archive = (function (_super) {
    __extends(Archive, _super);
    /**
    * @private
    * @constructor
    * @public
    * @param {Client} client
    * @param {any} r
    */
    function Archive(client, r) {
        _super.call(this, client);
        /**
        * @member saclient.cloud.resource.Archive#n_id
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saclient.cloud.resource.Archive#n_scope
        * @type boolean
        * @private
        */
        this.n_scope = false;
        /**
        * @member saclient.cloud.resource.Archive#n_name
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saclient.cloud.resource.Archive#n_description
        * @type boolean
        * @private
        */
        this.n_description = false;
        /**
        * @member saclient.cloud.resource.Archive#n_tags
        * @type boolean
        * @private
        */
        this.n_tags = false;
        /**
        * @member saclient.cloud.resource.Archive#n_icon
        * @type boolean
        * @private
        */
        this.n_icon = false;
        /**
        * @member saclient.cloud.resource.Archive#n_sizeMib
        * @type boolean
        * @private
        */
        this.n_sizeMib = false;
        /**
        * @member saclient.cloud.resource.Archive#n_serviceClass
        * @type boolean
        * @private
        */
        this.n_serviceClass = false;
        /**
        * @member saclient.cloud.resource.Archive#n_plan
        * @type boolean
        * @private
        */
        this.n_plan = false;
        this.apiDeserialize(r);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Archive.prototype._apiPath = function () {
        return "/archive";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Archive.prototype._rootKey = function () {
        return "Archive";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Archive.prototype._rootKeyM = function () {
        return "Archives";
    };

    /**
    * @private
    * @method _id
    * @public
    * @return {string}
    */
    Archive.prototype._id = function () {
        return this.get_id();
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
    *
    * @method save
    * @chainable
    * @public
    * @return {Archive} this
    */
    Archive.prototype.save = function () {
        return (this._save());
    };

    /**
    * 最新のリソース情報を再取得します。
    *
    * @method reload
    * @chainable
    * @public
    * @return {Archive} this
    */
    Archive.prototype.reload = function () {
        return (this._reload());
    };

    /**
    * @method get_sizeGib
    * @protected
    * @return {number}
    */
    Archive.prototype.get_sizeGib = function () {
        return this.get_sizeMib() >> 10;
    };

    Object.defineProperty(Archive.prototype, "sizeGib", {
        /**
        * サイズ[GiB]
        *
        * @property sizeGib
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_sizeGib();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    Archive.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(Archive.prototype, "id", {
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
    * @method get_scope
    * @private
    * @return {string}
    */
    Archive.prototype.get_scope = function () {
        return this.m_scope;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_scope
    * @private
    * @param {string} v
    * @return {string}
    */
    Archive.prototype.set_scope = function (v) {
        this.m_scope = v;
        this.n_scope = true;
        return this.m_scope;
    };

    Object.defineProperty(Archive.prototype, "scope", {
        /**
        * スコープ
        *
        * @property scope
        * @type string
        * @public
        */
        get: function () {
            return this.get_scope();
        },
        set: function (v) {
            this.set_scope(v);
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
    Archive.prototype.get_name = function () {
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
    Archive.prototype.set_name = function (v) {
        this.m_name = v;
        this.n_name = true;
        return this.m_name;
    };

    Object.defineProperty(Archive.prototype, "name", {
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
    Archive.prototype.get_description = function () {
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
    Archive.prototype.set_description = function (v) {
        this.m_description = v;
        this.n_description = true;
        return this.m_description;
    };

    Object.defineProperty(Archive.prototype, "description", {
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
    Archive.prototype.get_tags = function () {
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
    Archive.prototype.set_tags = function (v) {
        this.m_tags = v;
        this.n_tags = true;
        return this.m_tags;
    };

    Object.defineProperty(Archive.prototype, "tags", {
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
    Archive.prototype.get_icon = function () {
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
    Archive.prototype.set_icon = function (v) {
        this.m_icon = v;
        this.n_icon = true;
        return this.m_icon;
    };

    Object.defineProperty(Archive.prototype, "icon", {
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
    Archive.prototype.get_sizeMib = function () {
        return this.m_sizeMib;
    };

    Object.defineProperty(Archive.prototype, "sizeMib", {
        /**
        * サイズ[MiB]
        *
        * @property sizeMib
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_sizeMib();
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
    Archive.prototype.get_serviceClass = function () {
        return this.m_serviceClass;
    };

    Object.defineProperty(Archive.prototype, "serviceClass", {
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
    Archive.prototype.get_plan = function () {
        return this.m_plan;
    };

    Object.defineProperty(Archive.prototype, "plan", {
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
    * @method apiDeserializeImpl
    * @protected
    * @param {any} r
    */
    Archive.prototype.apiDeserializeImpl = function (r) {
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
        if (("Scope" in r)) {
            this.m_scope = r["Scope"] == null ? null : "" + r["Scope"];
        } else {
            this.m_scope = null;
            this.isIncomplete = true;
        }
        ;
        this.n_scope = false;
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
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Archive.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        var ret = {};
        if (withClean || this.n_id) {
            ret["ID"] = this.m_id;
        }
        ;
        if (withClean || this.n_scope) {
            ret["Scope"] = this.m_scope;
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
        return ret;
    };
    return Archive;
})(Resource);
module.exports = Archive;
