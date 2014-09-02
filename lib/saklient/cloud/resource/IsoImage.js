var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');

var Resource = require('./Resource');
var Icon = require('./Icon');
var FtpInfo = require('./FtpInfo');

var SaklientException = require('../../errors/SaklientException');

'use strict';

/**
* ISOイメージの実体1つに対応し、属性の取得や操作を行うためのクラス。
*
* @module saklient.cloud.resource.IsoImage
* @class IsoImage
* @constructor
* @extends Resource
*/
var IsoImage = (function (_super) {
    __extends(IsoImage, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    * @param {any} obj
    * @param {boolean} wrapped=false
    */
    function IsoImage(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client);
        /**
        * @member saklient.cloud.resource.IsoImage#n_id
        * @default false
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saklient.cloud.resource.IsoImage#n_scope
        * @default false
        * @type boolean
        * @private
        */
        this.n_scope = false;
        /**
        * @member saklient.cloud.resource.IsoImage#n_name
        * @default false
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saklient.cloud.resource.IsoImage#n_description
        * @default false
        * @type boolean
        * @private
        */
        this.n_description = false;
        /**
        * @member saklient.cloud.resource.IsoImage#n_tags
        * @default false
        * @type boolean
        * @private
        */
        this.n_tags = false;
        /**
        * @member saklient.cloud.resource.IsoImage#n_icon
        * @default false
        * @type boolean
        * @private
        */
        this.n_icon = false;
        /**
        * @member saklient.cloud.resource.IsoImage#n_displayOrder
        * @default false
        * @type boolean
        * @private
        */
        this.n_displayOrder = false;
        /**
        * @member saklient.cloud.resource.IsoImage#n_sizeMib
        * @default false
        * @type boolean
        * @private
        */
        this.n_sizeMib = false;
        /**
        * @member saklient.cloud.resource.IsoImage#n_serviceClass
        * @default false
        * @type boolean
        * @private
        */
        this.n_serviceClass = false;
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
    IsoImage.prototype._apiPath = function () {
        return "/cdrom";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    IsoImage.prototype._rootKey = function () {
        return "CDROM";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    IsoImage.prototype._rootKeyM = function () {
        return "CDROMs";
    };

    /**
    * @private
    * @method _className
    * @return {string}
    */
    IsoImage.prototype._className = function () {
        return "IsoImage";
    };

    /**
    * @private
    * @method _id
    * @return {string}
    */
    IsoImage.prototype._id = function () {
        return this.get_id();
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新規作成または上書き保存します。
    *
    * @method save
    * @chainable
    * @public
    * @return {IsoImage} this
    */
    IsoImage.prototype.save = function () {
        return (this._save());
    };

    /**
    * 最新のリソース情報を再取得します。
    *
    * @method reload
    * @chainable
    * @public
    * @return {IsoImage} this
    */
    IsoImage.prototype.reload = function () {
        return (this._reload());
    };

    /**
    * @private
    * @method _onAfterApiDeserialize
    * @protected
    * @param {any} r
    * @param {any} root
    * @return {void}
    */
    IsoImage.prototype._onAfterApiDeserialize = function (r, root) {
        Util.validateArgCount(arguments.length, 2);
        if (root == null) {
            return;
        }
        ;
        if (("FTPServer" in root)) {
            var ftp = root["FTPServer"];
            if (ftp != null) {
                this._ftpInfo = new FtpInfo(ftp);
            }
            ;
        }
        ;
    };

    /**
    * @method get_sizeGib
    * @protected
    * @private
    * @return {number}
    */
    IsoImage.prototype.get_sizeGib = function () {
        return this.get_sizeMib() >> 10;
    };

    Object.defineProperty(IsoImage.prototype, "sizeGib", {
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
    * @method get_ftpInfo
    * @private
    * @return {FtpInfo}
    */
    IsoImage.prototype.get_ftpInfo = function () {
        return this._ftpInfo;
    };

    Object.defineProperty(IsoImage.prototype, "ftpInfo", {
        /**
        * FTP情報
        *
        * @property ftpInfo
        * @type FtpInfo
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_ftpInfo();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * FTPSを開始し、イメージファイルをアップロード・ダウンロードできる状態にします。
    *
    * アカウント情報は、ftpInfo プロパティから取得することができます。
    *
    * @method openFtp
    * @chainable
    * @public
    * @param {boolean} reset=false 既にFTPSが開始されているとき、trueを指定してこのメソッドを呼ぶことでパスワードを再設定します。
    * @return {IsoImage} this
    */
    IsoImage.prototype.openFtp = function (reset) {
        if (typeof reset === "undefined") { reset = false; }
        Util.validateType(reset, "boolean");
        var path = this._apiPath() + "/" + Util.urlEncode(this._id()) + "/ftp";
        var q = {};
        Util.setByPath(q, "ChangePassword", reset);
        var result = this._client.request("PUT", path, q);
        this._onAfterApiDeserialize(null, result);
        return this;
    };

    /**
    * FTPSを終了し、ISOイメージを利用可能な状態にします。
    *
    * @method closeFtp
    * @chainable
    * @public
    * @return {IsoImage} this
    */
    IsoImage.prototype.closeFtp = function () {
        var path = this._apiPath() + "/" + Util.urlEncode(this._id()) + "/ftp";
        var result = this._client.request("DELETE", path);
        this._ftpInfo = null;
        return this;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method get_id
    * @private
    * @return {string}
    */
    IsoImage.prototype.get_id = function () {
        return this.m_id;
    };

    Object.defineProperty(IsoImage.prototype, "id", {
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
    IsoImage.prototype.get_scope = function () {
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
    IsoImage.prototype.set_scope = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this.m_scope = v;
        this.n_scope = true;
        return this.m_scope;
    };

    Object.defineProperty(IsoImage.prototype, "scope", {
        /**
        * スコープ {{#crossLink "EScope"}}{{/crossLink}}
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
    IsoImage.prototype.get_name = function () {
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
    IsoImage.prototype.set_name = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this.m_name = v;
        this.n_name = true;
        return this.m_name;
    };

    Object.defineProperty(IsoImage.prototype, "name", {
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
    IsoImage.prototype.get_description = function () {
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
    IsoImage.prototype.set_description = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
        this.m_description = v;
        this.n_description = true;
        return this.m_description;
    };

    Object.defineProperty(IsoImage.prototype, "description", {
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
    IsoImage.prototype.get_tags = function () {
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
    IsoImage.prototype.set_tags = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "Array");
        this.m_tags = v;
        this.n_tags = true;
        return this.m_tags;
    };

    Object.defineProperty(IsoImage.prototype, "tags", {
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
    IsoImage.prototype.get_icon = function () {
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
    IsoImage.prototype.set_icon = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "saklient.cloud.resource.Icon");
        this.m_icon = v;
        this.n_icon = true;
        return this.m_icon;
    };

    Object.defineProperty(IsoImage.prototype, "icon", {
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
    * @method get_displayOrder
    * @private
    * @return {number}
    */
    IsoImage.prototype.get_displayOrder = function () {
        return this.m_displayOrder;
    };

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_displayOrder
    * @private
    * @param {number} v
    * @return {number}
    */
    IsoImage.prototype.set_displayOrder = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "number");
        this.m_displayOrder = v;
        this.n_displayOrder = true;
        return this.m_displayOrder;
    };

    Object.defineProperty(IsoImage.prototype, "displayOrder", {
        /**
        * 表示順序
        *
        * @property displayOrder
        * @type number
        * @public
        */
        get: function () {
            return this.get_displayOrder();
        },
        set: function (v) {
            this.set_displayOrder(v);
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
    IsoImage.prototype.get_sizeMib = function () {
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
    IsoImage.prototype.set_sizeMib = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "number");
        if (!this.isNew) {
            throw new SaklientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saklient.cloud.resource.IsoImage#sizeMib");
        }
        ;
        this.m_sizeMib = v;
        this.n_sizeMib = true;
        return this.m_sizeMib;
    };

    Object.defineProperty(IsoImage.prototype, "sizeMib", {
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
    IsoImage.prototype.get_serviceClass = function () {
        return this.m_serviceClass;
    };

    Object.defineProperty(IsoImage.prototype, "serviceClass", {
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
    IsoImage.prototype.apiDeserializeImpl = function (r) {
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
        if (Util.existsPath(r, "DisplayOrder")) {
            this.m_displayOrder = Util.getByPath(r, "DisplayOrder") == null ? null : parseInt("" + Util.getByPath(r, "DisplayOrder"), 10);
        } else {
            this.m_displayOrder = null;
            this.isIncomplete = true;
        }
        ;
        this.n_displayOrder = false;
        if (Util.existsPath(r, "SizeMB")) {
            this.m_sizeMib = Util.getByPath(r, "SizeMB") == null ? null : parseInt("" + Util.getByPath(r, "SizeMB"), 10);
        } else {
            this.m_sizeMib = null;
            this.isIncomplete = true;
        }
        ;
        this.n_sizeMib = false;
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
    * @private
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    IsoImage.prototype.apiSerializeImpl = function (withClean) {
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
        if (withClean || this.n_displayOrder) {
            Util.setByPath(ret, "DisplayOrder", this.m_displayOrder);
        }
        ;
        if (withClean || this.n_sizeMib) {
            Util.setByPath(ret, "SizeMB", this.m_sizeMib);
        } else {
            if (this.isNew) {
                missing.push("sizeMib");
            }
            ;
        }
        ;
        if (withClean || this.n_serviceClass) {
            Util.setByPath(ret, "ServiceClass", this.m_serviceClass);
        }
        ;
        if (missing.length > 0) {
            throw new SaklientException("required_field", "Required fields must be set before the IsoImage creation: " + missing.join(", "));
        }
        ;
        return ret;
    };
    return IsoImage;
})(Resource);
module.exports = IsoImage;
