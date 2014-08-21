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

'use strict';

/**
* スクリプトの実体1つに対応し、属性の取得や操作を行うためのクラス。
*
* @module saklient.cloud.resource.Script
* @class Script
* @constructor
* @extends Resource
*/
var Script = (function (_super) {
    __extends(Script, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    * @param {any} obj
    * @param {boolean} wrapped=false
    */
    function Script(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client);
        /**
        * @member saklient.cloud.resource.Script#n_id
        * @default false
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saklient.cloud.resource.Script#n_scope
        * @default false
        * @type boolean
        * @private
        */
        this.n_scope = false;
        /**
        * @member saklient.cloud.resource.Script#n_clazz
        * @default false
        * @type boolean
        * @private
        */
        this.n_clazz = false;
        /**
        * @member saklient.cloud.resource.Script#n_name
        * @default false
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saklient.cloud.resource.Script#n_description
        * @default false
        * @type boolean
        * @private
        */
        this.n_description = false;
        /**
        * @member saklient.cloud.resource.Script#n_tags
        * @default false
        * @type boolean
        * @private
        */
        this.n_tags = false;
        /**
        * @member saklient.cloud.resource.Script#n_icon
        * @default false
        * @type boolean
        * @private
        */
        this.n_icon = false;
        /**
        * @member saklient.cloud.resource.Script#n_content
        * @default false
        * @type boolean
        * @private
        */
        this.n_content = false;
        /**
        * @member saklient.cloud.resource.Script#n_annotation
        * @default false
        * @type boolean
        * @private
        */
        this.n_annotation = false;
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
    Script.prototype._apiPath = function () {
        return "/note";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Script.prototype._rootKey = function () {
        return "Note";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Script.prototype._rootKeyM = function () {
        return "Notes";
    };

    /**
    * @private
    * @method _className
    * @return {string}
    */
    Script.prototype._className = function () {
        return "Script";
    };

    /**
    * @private
    * @method _id
    * @return {string}
    */
    Script.prototype._id = function () {
        return this.get_id();
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新規作成または上書き保存します。
    *
    * @method save
    * @chainable
    * @public
    * @return {Script} this
    */
    Script.prototype.save = function () {
        return (this._save());
    };

    /**
    * 最新のリソース情報を再取得します。
    *
    * @method reload
    * @chainable
    * @public
    * @return {Script} this
    */
    Script.prototype.reload = function () {
        return (this._reload());
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    Script.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(Script.prototype, "id", {
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
    Script.prototype.get_scope = function () {
        return this.m_scope;
    };

    Object.defineProperty(Script.prototype, "scope", {
        /**
        * スコープ {{#crossLink "EScope"}}{{/crossLink}}
        *
        * @property scope
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_scope();
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
    Script.prototype.get_clazz = function () {
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
    Script.prototype.set_clazz = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this.m_clazz = v;
        this.n_clazz = true;
        return this.m_clazz;
    };

    Object.defineProperty(Script.prototype, "clazz", {
        /**
        * クラス {{#crossLink "EScriptClass"}}{{/crossLink}}
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
    Script.prototype.get_name = function () {
        return this.m_name;
    };

    Object.defineProperty(Script.prototype, "name", {
        /**
        * 名前
        *
        * @property name
        * @type string
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_name();
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
    Script.prototype.get_description = function () {
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
    Script.prototype.set_description = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this.m_description = v;
        this.n_description = true;
        return this.m_description;
    };

    Object.defineProperty(Script.prototype, "description", {
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
    Script.prototype.get_tags = function () {
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
    Script.prototype.set_tags = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "Array");
        this.m_tags = v;
        this.n_tags = true;
        return this.m_tags;
    };

    Object.defineProperty(Script.prototype, "tags", {
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
    Script.prototype.get_icon = function () {
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
    Script.prototype.set_icon = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "saklient.cloud.resource.Icon");
        this.m_icon = v;
        this.n_icon = true;
        return this.m_icon;
    };

    Object.defineProperty(Script.prototype, "icon", {
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
    * @method get_content
    * @private
    * @return {string}
    */
    Script.prototype.get_content = function () {
        return this.m_content;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_content
    * @private
    * @param {string} v
    * @return {string}
    */
    Script.prototype.set_content = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this.m_content = v;
        this.n_content = true;
        return this.m_content;
    };

    Object.defineProperty(Script.prototype, "content", {
        /**
        * 内容
        *
        * @property content
        * @type string
        * @public
        */
        get: function () {
            return this.get_content();
        },
        set: function (v) {
            this.set_content(v);
        },
        enumerable: true,
        configurable: true
    });

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_annotation
    * @private
    * @return {any}
    */
    Script.prototype.get_annotation = function () {
        return this.m_annotation;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_annotation
    * @private
    * @param {any} v
    * @return {any}
    */
    Script.prototype.set_annotation = function (v) {
        Util.validateArgCount(arguments.length, 1);
        this.m_annotation = v;
        this.n_annotation = true;
        return this.m_annotation;
    };

    Object.defineProperty(Script.prototype, "annotation", {
        /**
        * 注釈
        *
        * @property annotation
        * @type any
        * @public
        */
        get: function () {
            return this.get_annotation();
        },
        set: function (v) {
            this.set_annotation(v);
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
    Script.prototype.apiDeserializeImpl = function (r) {
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
        if (Util.existsPath(r, "Scope")) {
            this.m_scope = Util.getByPath(r, "Scope") == null ? null : "" + Util.getByPath(r, "Scope");
        } else {
            this.m_scope = null;
            this.isIncomplete = true;
        }
        ;
        this.n_scope = false;
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
        if (Util.existsPath(r, "Content")) {
            this.m_content = Util.getByPath(r, "Content") == null ? null : "" + Util.getByPath(r, "Content");
        } else {
            this.m_content = null;
            this.isIncomplete = true;
        }
        ;
        this.n_content = false;
        if (Util.existsPath(r, "Remark")) {
            this.m_annotation = Util.getByPath(r, "Remark");
        } else {
            this.m_annotation = null;
            this.isIncomplete = true;
        }
        ;
        this.n_annotation = false;
    };

    /**
    * @private
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Script.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        Util.validateType(withClean, "boolean");
        var missing = [];
        var ret = {};
        if (withClean || this.n_id) {
            Util.setByPath(ret, "ID", this.m_id);
        }
        ;
        if (withClean || this.n_scope) {
            Util.setByPath(ret, "Scope", this.m_scope);
        }
        ;
        if (withClean || this.n_clazz) {
            Util.setByPath(ret, "Class", this.m_clazz);
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
        if (withClean || this.n_content) {
            Util.setByPath(ret, "Content", this.m_content);
        } else {
            if (this.isNew) {
                missing.push("content");
            }
            ;
        }
        ;
        if (withClean || this.n_annotation) {
            Util.setByPath(ret, "Remark", this.m_annotation);
        }
        ;
        if (missing.length > 0) {
            throw new SaklientException("required_field", "Required fields must be set before the Script creation: " + missing.join(", "));
        }
        ;
        return ret;
    };
    return Script;
})(Resource);
module.exports = Script;
