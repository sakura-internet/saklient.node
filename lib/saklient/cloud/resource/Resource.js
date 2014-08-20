
var Util = require('../../Util');

'use strict';

/**
* @private
* @class Resource
* @constructor
*/
var Resource = (function () {
    /**
    * @private
    * @constructor
    * @param {Client} client
    */
    function Resource(client) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(client, "saklient.cloud.Client");
        this._client = client;
        this._params = {};
    }
    /**
    * @method get_client
    * @protected
    * @private
    * @return {Client}
    */
    Resource.prototype.get_client = function () {
        return this._client;
    };

    Object.defineProperty(Resource.prototype, "client", {
        /**
        * @private
        * @property client
        * @type Client
        * @readOnly
        */
        get: function () {
            return this.get_client();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @private
    * @method setParam
    * @param {string} key
    * @param {any} value
    * @return {void}
    */
    Resource.prototype.setParam = function (key, value) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(key, "string");
        this._params[key] = value;
    };

    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Resource.prototype._apiPath = function () {
        return null;
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Resource.prototype._rootKey = function () {
        return null;
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Resource.prototype._rootKeyM = function () {
        return null;
    };

    /**
    * @private
    * @method _className
    * @return {string}
    */
    Resource.prototype._className = function () {
        return null;
    };

    /**
    * @private
    * @method _id
    * @return {string}
    */
    Resource.prototype._id = function () {
        return null;
    };

    /**
    * @private
    * @method _onBeforeSave
    * @protected
    * @param {any} r
    * @return {void}
    */
    Resource.prototype._onBeforeSave = function (r) {
        Util.validateArgCount(arguments.length, 1);
    };

    /**
    * @private
    * @method _onAfterApiDeserialize
    * @protected
    * @param {any} r
    * @param {any} root
    * @return {void}
    */
    Resource.prototype._onAfterApiDeserialize = function (r, root) {
        Util.validateArgCount(arguments.length, 2);
    };

    /**
    * @private
    * @method _onAfterApiSerialize
    * @protected
    * @param {any} r
    * @param {boolean} withClean
    * @return {void}
    */
    Resource.prototype._onAfterApiSerialize = function (r, withClean) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(withClean, "boolean");
    };

    /**
    * @private
    * @method apiDeserializeImpl
    * @protected
    * @param {any} r
    * @return {void}
    */
    Resource.prototype.apiDeserializeImpl = function (r) {
        Util.validateArgCount(arguments.length, 1);
    };

    /**
    * @private
    * @method apiDeserialize
    * @param {any} obj
    * @param {boolean} wrapped=false
    * @return {void}
    */
    Resource.prototype.apiDeserialize = function (obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(wrapped, "boolean");
        var root = null;
        var record = null;
        var rkey = this._rootKey();
        if (obj != null) {
            if (!wrapped) {
                if (rkey != null) {
                    root = {};
                    root[rkey] = obj;
                }
                ;
                record = obj;
            } else {
                root = obj;
                record = obj[rkey];
            }
            ;
        }
        ;
        this.apiDeserializeImpl(record);
        this._onAfterApiDeserialize(record, root);
    };

    /**
    * @private
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Resource.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        Util.validateType(withClean, "boolean");
        return null;
    };

    /**
    * @private
    * @method apiSerialize
    * @param {boolean} withClean=false
    * @return {any}
    */
    Resource.prototype.apiSerialize = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        Util.validateType(withClean, "boolean");
        var ret = this.apiSerializeImpl(withClean);
        this._onAfterApiSerialize(ret, withClean);
        return ret;
    };

    /**
    * @private
    * @method apiSerializeID
    * @protected
    * @return {any}
    */
    Resource.prototype.apiSerializeID = function () {
        var id = this._id();
        if (id == null) {
            return null;
        }
        ;
        var r = {};
        r["ID"] = id;
        return r;
    };

    /**
    * @private
    * @method normalizeFieldName
    * @protected
    * @param {string} name
    * @return {string}
    */
    Resource.prototype.normalizeFieldName = function (name) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(name, "string");
        return name;
    };

    /**
    * @private
    * @method setProperty
    * @param {string} name
    * @param {any} value
    * @return {void}
    */
    Resource.prototype.setProperty = function (name, value) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(name, "string");
        name = this.normalizeFieldName(name);
        this["m_" + name] = value;
        this["n_" + name] = true;
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新規作成または上書き保存します。
    *
    * @private
    * @method _save
    * @chainable
    * @protected
    * @return {Resource} this
    */
    Resource.prototype._save = function () {
        var r = this.apiSerialize();
        var params = this._params;
        this._params = {};
        var keys = Object.keys(params);
        for (var __it1 = 0; __it1 < keys.length; __it1++) {
            var k = keys[__it1];
            var v = params[k];
            r[k] = v;
        }
        ;
        this._onBeforeSave(r);
        var method = this.isNew ? "POST" : "PUT";
        var path = this._apiPath();
        if (!this.isNew) {
            path += "/" + Util.urlEncode(this._id());
        }
        ;
        var q = {};
        q[this._rootKey()] = r;
        var result = this._client.request(method, path, q);
        this.apiDeserialize(result, true);
        return this;
    };

    /**
    * このローカルオブジェクトのIDと一致するリソースの削除リクエストをAPIに送信します。
    *
    * @method destroy
    * @public
    * @return {void}
    */
    Resource.prototype.destroy = function () {
        if (this.isNew) {
            return;
        }
        ;
        var path = this._apiPath() + "/" + Util.urlEncode(this._id());
        this._client.request("DELETE", path);
    };

    /**
    * 最新のリソース情報を再取得します。
    *
    * @private
    * @method _reload
    * @chainable
    * @protected
    * @return {Resource} this
    */
    Resource.prototype._reload = function () {
        var result = this._client.request("GET", this._apiPath() + "/" + Util.urlEncode(this._id()));
        this.apiDeserialize(result, true);
        return this;
    };

    /**
    * このリソースが存在するかを調べます。
    *
    * @method exists
    * @public
    * @return {boolean}
    */
    Resource.prototype.exists = function () {
        var params = {};
        Util.setByPath(params, "Filter.ID", [this._id()]);
        Util.setByPath(params, "Include", ["ID"]);
        var result = this._client.request("GET", this._apiPath(), params);
        return result["Count"] == 1;
    };

    /**
    * @private
    * @method dump
    * @return {any}
    */
    Resource.prototype.dump = function () {
        return this.apiSerialize(true);
    };
    return Resource;
})();
module.exports = Resource;
