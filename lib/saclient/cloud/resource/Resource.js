
var Util = require('../Util');

/**
* @ignore
* @class Resource
* @constructor
*/
var Resource = (function () {
    /**
    * @private
    * @constructor
    * @public
    * @param {Client} client
    */
    function Resource(client) {
        this._client = client;
        this._params = {};
    }
    /**
    * @method get_client
    * @protected
    * @return {Client}
    */
    Resource.prototype.get_client = function () {
        return this._client;
    };

    Object.defineProperty(Resource.prototype, "client", {
        /**
        * @property client
        * @type Client
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_client();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method setParam
    * @public
    * @param {any} value
    * @param {string} key
    * @return {void}
    */
    Resource.prototype.setParam = function (key, value) {
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
    * @protected
    * @return {string}
    */
    Resource.prototype._className = function () {
        return null;
    };

    /**
    * @private
    * @method _id
    * @public
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
    };

    /**
    * @private
    * @method _onAfterApiDeserialize
    * @protected
    * @param {any} r
    * @return {void}
    */
    Resource.prototype._onAfterApiDeserialize = function (r) {
    };

    /**
    * @private
    * @method _onAfterApiSerialize
    * @protected
    * @param {boolean} withClean
    * @param {any} r
    * @return {void}
    */
    Resource.prototype._onAfterApiSerialize = function (r, withClean) {
    };

    /**
    * @method apiDeserializeImpl
    * @protected
    * @param {any} r
    * @return {void}
    */
    Resource.prototype.apiDeserializeImpl = function (r) {
    };

    /**
    * @method apiDeserialize
    * @public
    * @param {any} r
    * @return {void}
    */
    Resource.prototype.apiDeserialize = function (r) {
        this.apiDeserializeImpl(r);
        this._onAfterApiDeserialize(r);
    };

    /**
    * @method apiSerializeImpl
    * @protected
    * @param {boolean} withClean=false
    * @return {any}
    */
    Resource.prototype.apiSerializeImpl = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        return null;
    };

    /**
    * @method apiSerialize
    * @public
    * @param {boolean} withClean=false
    * @return {any}
    */
    Resource.prototype.apiSerialize = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        var ret = this.apiSerializeImpl(withClean);
        this._onAfterApiSerialize(ret, withClean);
        return ret;
    };

    /**
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
    * @method normalizeFieldName
    * @protected
    * @param {string} name
    * @return {string}
    */
    Resource.prototype.normalizeFieldName = function (name) {
        return name;
    };

    /**
    * @method setProperty
    * @public
    * @param {string} name
    * @param {any} value
    * @return {void}
    */
    Resource.prototype.setProperty = function (name, value) {
        name = this.normalizeFieldName(name);
        this["m_" + name] = value;
        this["n_" + name] = true;
    };

    /**
    * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
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
        this.apiDeserialize(result[this._rootKey()]);
        return this;
    };

    /**
    * このローカルオブジェクトのIDと対応するリソースの削除リクエストをAPIに送信します。
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
        this.apiDeserialize(result[this._rootKey()]);
        return this;
    };

    /**
    * @method dump
    * @public
    * @return {any}
    */
    Resource.prototype.dump = function () {
        return this.apiSerialize(true);
    };
    return Resource;
})();
module.exports = Resource;
