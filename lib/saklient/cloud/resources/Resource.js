
var Util = require('../../Util');

var HttpException = require('../../errors/HttpException');

'use strict';

/**
* @private
* @module saklient.cloud.resources.Resource
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
        this._query = {};
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
        this._query[key] = value;
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
    * @param {any} query
    * @return {void}
    */
    Resource.prototype._onBeforeSave = function (query) {
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
    * @method _onBeforeApiSerialize
    * @protected
    * @param {boolean} withClean
    * @return {void}
    */
    Resource.prototype._onBeforeApiSerialize = function (withClean) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(withClean, "boolean");
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
        this._onBeforeApiSerialize(withClean);
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
        var query = this._query;
        this._query = {};
        var keys = Object.keys(query);
        for (var __it1 = 0; __it1 < keys.length; __it1++) {
            var k = keys[__it1];
            var v = query[k];
            r[k] = v;
        }
        ;
        var method = this.isNew ? "POST" : "PUT";
        var path = this._apiPath();
        if (!this.isNew) {
            path += "/" + Util.urlEncode(this._id());
        }
        ;
        var q = {};
        q[this._rootKey()] = r;
        this._onBeforeSave(q);
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
        this.requestRetry("DELETE", path);
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
        var result = this.requestRetry("GET", this._apiPath() + "/" + Util.urlEncode(this._id()));
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
        var query = {};
        Util.setByPath(query, "Filter.ID", [this._id()]);
        Util.setByPath(query, "Include", ["ID"]);
        var result = this.requestRetry("GET", this._apiPath(), query);
        var cnt = result["Count"];
        return (cnt) == 1;
    };

    /**
    * @private
    * @method dump
    * @return {any}
    */
    Resource.prototype.dump = function () {
        return this.apiSerialize(true);
    };

    /**
    * @private
    * @static
    * @method createWith
    * @chainable
    * @param {string} className
    * @param {Client} client
    * @param {any} obj
    * @param {boolean} wrapped=false
    * @return {Resource}
    */
    Resource.createWith = function (className, client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        Util.validateArgCount(arguments.length, 3);
        Util.validateType(className, "string");
        Util.validateType(client, "saklient.cloud.Client");
        Util.validateType(wrapped, "boolean");
        var a = [client, obj, wrapped];
        return (Util.createClassInstance("saklient.cloud.resources." + className, a));
    };

    /**
    * @method requestRetry
    * @public
    * @param {string} method
    * @param {string} path
    * @param {any} query=null
    * @param {number} retryCount=5
    * @param {number} retrySleep=5
    * @return {any}
    */
    Resource.prototype.requestRetry = function (method, path, query, retryCount, retrySleep) {
        if (typeof query === "undefined") { query = null; }
        if (typeof retryCount === "undefined") { retryCount = 5; }
        if (typeof retrySleep === "undefined") { retrySleep = 5; }
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(method, "string");
        Util.validateType(path, "string");
        Util.validateType(retryCount, "number");
        Util.validateType(retrySleep, "number");
        var ret = null;
        while (1 < retryCount) {
            var isOk = false;
            try  {
                ret = this._client.request(method, path, query);
                isOk = true;
            } catch (__ex) {
                if (__ex instanceof HttpException) {
                    var ex = __ex;
                     {
                        isOk = false;
                    }
                }
            }
            ;
            if (isOk) {
                retryCount = -1;
            } else {
                retryCount -= 1;
                Util.sleep(retrySleep);
            }
            ;
        }
        ;
        if (retryCount == 0) {
            ret = this._client.request(method, path, query);
        }
        ;
        return ret;
    };
    return Resource;
})();
module.exports = Resource;
