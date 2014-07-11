
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
    * @method _id
    * @public
    * @return {string}
    */
    Resource.prototype._id = function () {
        return null;
    };

    /**
    * @method apiDeserialize
    * @public
    * @param {any} r
    * @return {void}
    */
    Resource.prototype.apiDeserialize = function (r) {
    };

    /**
    * @method apiSerialize
    * @public
    * @param {boolean} withClean=false
    * @return {any}
    */
    Resource.prototype.apiSerialize = function (withClean) {
        if (typeof withClean === "undefined") { withClean = false; }
        return null;
    };

    /**
    * @method apiSerializeID
    * @protected
    * @return {any}
    */
    Resource.prototype.apiSerializeID = function () {
        var id = this._id();
        if (id == null)
            return null;
        ;
        var r = {};
        r["ID"] = id;
        return r;
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
        var r = {};
        r[this._rootKey()] = this.apiSerialize();
        var method = this.isNew ? "POST" : "PUT";
        var path = this._apiPath();
        if (!this.isNew)
            path += "/" + Util.urlEncode(this._id());
        var result = this._client.request(method, path, r);
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
        if (this.isNew)
            return;
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
