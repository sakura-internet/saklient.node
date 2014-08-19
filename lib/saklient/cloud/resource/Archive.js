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
var DiskPlan = require('./DiskPlan');

var EAvailability = require('../enums/EAvailability');
var SaklientException = require('../../errors/SaklientException');

'use strict';

/**
* アーカイブの実体1つに対応し、属性の取得や操作を行うためのクラス。
*
* @class Archive
* @constructor
* @extends Resource
*/
var Archive = (function (_super) {
    __extends(Archive, _super);
    /**
    * @ignore
    * @constructor
    * @public
    * @param {any} obj
    * @param {Client} client
    * @param {boolean} wrapped=false
    */
    function Archive(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client);
        /**
        * @member saklient.cloud.resource.Archive#n_id
        * @type boolean
        * @private
        */
        this.n_id = false;
        /**
        * @member saklient.cloud.resource.Archive#n_scope
        * @type boolean
        * @private
        */
        this.n_scope = false;
        /**
        * @member saklient.cloud.resource.Archive#n_name
        * @type boolean
        * @private
        */
        this.n_name = false;
        /**
        * @member saklient.cloud.resource.Archive#n_description
        * @type boolean
        * @private
        */
        this.n_description = false;
        /**
        * @member saklient.cloud.resource.Archive#n_tags
        * @type boolean
        * @private
        */
        this.n_tags = false;
        /**
        * @member saklient.cloud.resource.Archive#n_icon
        * @type boolean
        * @private
        */
        this.n_icon = false;
        /**
        * @member saklient.cloud.resource.Archive#n_sizeMib
        * @type boolean
        * @private
        */
        this.n_sizeMib = false;
        /**
        * @member saklient.cloud.resource.Archive#n_serviceClass
        * @type boolean
        * @private
        */
        this.n_serviceClass = false;
        /**
        * @member saklient.cloud.resource.Archive#n_plan
        * @type boolean
        * @private
        */
        this.n_plan = false;
        /**
        * @member saklient.cloud.resource.Archive#n_availability
        * @type boolean
        * @private
        */
        this.n_availability = false;
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
    * @method _className
    * @public
    * @return {string}
    */
    Archive.prototype._className = function () {
        return "Archive";
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
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新規作成または上書き保存します。
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
    * @method get_isAvailable
    * @protected
    * @return {boolean}
    */
    Archive.prototype.get_isAvailable = function () {
        return this.get_availability() == EAvailability.available;
    };

    Object.defineProperty(Archive.prototype, "isAvailable", {
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
    Archive.prototype.get_sizeGib = function () {
        return this.get_sizeMib() >> 10;
    };

    /**
    * @method set_sizeGib
    * @protected
    * @param {number} sizeGib
    * @return {number}
    */
    Archive.prototype.set_sizeGib = function (sizeGib) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(sizeGib, "number");
        this.set_sizeMib(sizeGib * 1024);
        return sizeGib;
    };

    Object.defineProperty(Archive.prototype, "sizeGib", {
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
    * @return {Resource}
    */
    Archive.prototype.get_source = function () {
        return this._source;
    };

    /**
    * @method set_source
    * @public
    * @param {Resource} source
    * @return {Resource}
    */
    Archive.prototype.set_source = function (source) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(source, "saklient.cloud.resource.Resource");
        this._source = source;
        return source;
    };

    Object.defineProperty(Archive.prototype, "source", {
        /**
        * アーカイブのコピー元
        *
        * @property source
        * @type Resource
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
    * @method get_ftpInfo
    * @public
    * @return {FtpInfo}
    */
    Archive.prototype.get_ftpInfo = function () {
        return this._ftpInfo;
    };

    Object.defineProperty(Archive.prototype, "ftpInfo", {
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
    * @private
    * @method _onAfterApiDeserialize
    * @protected
    * @param {any} root
    * @param {any} r
    * @return {void}
    */
    Archive.prototype._onAfterApiDeserialize = function (r, root) {
        Util.validateArgCount(arguments.length, 2);
        if (root != null) {
            if (("FTPServer" in root)) {
                var ftp = root["FTPServer"];
                if (ftp != null) {
                    this._ftpInfo = new FtpInfo(ftp);
                }
                ;
            }
            ;
        }
        ;
        if (r != null) {
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
                        var obj = Util.createClassInstance("saklient.cloud.resource.Disk", [this._client, s]);
                        this._source = (obj);
                    }
                    ;
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
    Archive.prototype._onAfterApiSerialize = function (r, withClean) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(withClean, "boolean");
        if (r == null) {
            return;
        }
        ;
        if (this._source != null) {
            if (this._source._className() == "Archive") {
                var s = withClean ? this._source.apiSerialize(true) : { ID: this._source._id() };
                r["SourceArchive"] = s;
            } else {
                if (this._source._className() == "Disk") {
                    var s = withClean ? this._source.apiSerialize(true) : { ID: this._source._id() };
                    r["SourceDisk"] = s;
                } else {
                    this._source = null;
                    Util.validateType(this._source, "Disk or Archive", true);
                }
                ;
            }
            ;
        }
        ;
    };

    /**
    * FTPSを開始し、イメージファイルをアップロード・ダウンロードできる状態にします。
    *
    * アカウント情報は、ftpInfo プロパティから取得することができます。
    *
    * @method openFtp
    * @chainable
    * @public
    * @param reset 既にFTPSが開始されているとき、trueを指定してこのメソッドを呼ぶことでパスワードを再設定します。
    * @param {boolean} reset=false
    * @return {Archive} this
    */
    Archive.prototype.openFtp = function (reset) {
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
    * FTPSを終了し、アーカイブを利用可能な状態にします。
    *
    * @method closeFtp
    * @chainable
    * @public
    * @return {Archive} this
    */
    Archive.prototype.closeFtp = function () {
        var path = this._apiPath() + "/" + Util.urlEncode(this._id()) + "/ftp";
        var result = this._client.request("DELETE", path);
        this._ftpInfo = null;
        return this;
    };

    /**
    * コピー中のアーカイブが利用可能になるまで待機します。
    *
    * @ignore
    * @method afterCopy
    * @public
    * @param {number} timeoutSec
    * @param {(Archive, boolean) => void} callback
    * @return {void}
    */
    Archive.prototype.afterCopy = function (timeoutSec, callback) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(timeoutSec, "number");
        Util.validateType(callback, "function");
        var ret = this.sleepWhileCopying(timeoutSec);
        callback(this, ret);
    };

    /**
    * コピー中のアーカイブが利用可能になるまで待機します。
    *
    * @method sleepWhileCopying
    * @public
    * @param {number} timeoutSec=3600
    * @return {boolean} 成功時はtrue、タイムアウトやエラーによる失敗時はfalseを返します。
    */
    Archive.prototype.sleepWhileCopying = function (timeoutSec) {
        if (typeof timeoutSec === "undefined") { timeoutSec = 3600; }
        Util.validateType(timeoutSec, "number");
        var step = 3;
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

    Object.defineProperty(Archive.prototype, "scope", {
        /**
        * スコープ {@link EScope}
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
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
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
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "string");
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
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "Array");
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
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "saklient.cloud.resource.Icon");
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

    /**
    * (This method is generated in Translator_default#buildImpl)
    *
    * @method set_sizeMib
    * @private
    * @param {number} v
    * @return {number}
    */
    Archive.prototype.set_sizeMib = function (v) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(v, "number");
        if (!this.isNew) {
            throw new SaklientException("immutable_field", "Immutable fields cannot be modified after the resource creation: " + "saklient.cloud.resource.Archive#sizeMib");
        }
        ;
        this.m_sizeMib = v;
        this.n_sizeMib = true;
        return this.m_sizeMib;
    };

    Object.defineProperty(Archive.prototype, "sizeMib", {
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
    * @method get_availability
    * @private
    * @return {string}
    */
    Archive.prototype.get_availability = function () {
        return this.m_availability;
    };

    Object.defineProperty(Archive.prototype, "availability", {
        /**
        * 有効状態 {@link EAvailability}
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
    Archive.prototype.apiDeserializeImpl = function (r) {
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
        if (Util.existsPath(r, "Plan")) {
            this.m_plan = Util.getByPath(r, "Plan") == null ? null : new DiskPlan(this._client, Util.getByPath(r, "Plan"));
        } else {
            this.m_plan = null;
            this.isIncomplete = true;
        }
        ;
        this.n_plan = false;
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
    Archive.prototype.apiSerializeImpl = function (withClean) {
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
        if (withClean || this.n_sizeMib) {
            Util.setByPath(ret, "SizeMB", this.m_sizeMib);
        }
        ;
        if (withClean || this.n_serviceClass) {
            Util.setByPath(ret, "ServiceClass", this.m_serviceClass);
        }
        ;
        if (withClean || this.n_plan) {
            Util.setByPath(ret, "Plan", withClean ? (this.m_plan == null ? null : this.m_plan.apiSerialize(withClean)) : (this.m_plan == null ? { ID: "0" } : this.m_plan.apiSerializeID()));
        }
        ;
        if (withClean || this.n_availability) {
            Util.setByPath(ret, "Availability", this.m_availability);
        }
        ;
        if (missing.length > 0) {
            throw new SaklientException("required_field", "Required fields must be set before the Archive creation: " + missing.join(", "));
        }
        ;
        return ret;
    };
    return Archive;
})(Resource);
module.exports = Archive;
