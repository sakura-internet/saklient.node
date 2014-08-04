
var Util = require('../../Util');

/**
* @ignore
* @class Model
* @constructor
*/
var Model = (function () {
    /**
    * @constructor
    * @public
    * @param {Client} client
    */
    function Model(client) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(client, "saclient.cloud.Client");
        this._client = client;
        this._params = {};
        this._total = null;
        this._count = null;
    }
    /**
    * @method get_client
    * @protected
    * @return {Client}
    */
    Model.prototype.get_client = function () {
        Util.validateArgCount(arguments.length, 0);
        return this._client;
    };

    Object.defineProperty(Model.prototype, "client", {
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
    * @method get_params
    * @protected
    * @return {TQueryParams}
    */
    Model.prototype.get_params = function () {
        Util.validateArgCount(arguments.length, 0);
        return this._params;
    };

    Object.defineProperty(Model.prototype, "params", {
        /**
        * @property params
        * @type TQueryParams
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_params();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_total
    * @protected
    * @return {number}
    */
    Model.prototype.get_total = function () {
        Util.validateArgCount(arguments.length, 0);
        return this._total;
    };

    Object.defineProperty(Model.prototype, "total", {
        /**
        * @property total
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_total();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_count
    * @protected
    * @return {number}
    */
    Model.prototype.get_count = function () {
        Util.validateArgCount(arguments.length, 0);
        return this._count;
    };

    Object.defineProperty(Model.prototype, "count", {
        /**
        * @property count
        * @type number
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_count();
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
    Model.prototype._apiPath = function () {
        Util.validateArgCount(arguments.length, 0);
        return null;
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model.prototype._rootKey = function () {
        Util.validateArgCount(arguments.length, 0);
        return null;
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model.prototype._rootKeyM = function () {
        Util.validateArgCount(arguments.length, 0);
        return null;
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model.prototype._className = function () {
        Util.validateArgCount(arguments.length, 0);
        return null;
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @private
    * @method _offset
    * @chainable
    * @protected
    * @param {number} offset オフセット
    * @return {Model} this
    */
    Model.prototype._offset = function (offset) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(offset, "number");
        this._params["Begin"] = offset;
        return (this);
    };

    /**
    * 次に取得するリストの上限レコード数を指定します。
    *
    * @private
    * @method _limit
    * @chainable
    * @protected
    * @param {number} count 上限レコード数
    * @return {Model} this
    */
    Model.prototype._limit = function (count) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(count, "number");
        this._params["Count"] = count;
        return (this);
    };

    /**
    * APIのフィルタリング設定を直接指定します。
    *
    * @private
    * @method _filterBy
    * @chainable
    * @protected
    * @param {any} value
    * @param {string} key
    * @param {boolean} multiple=false
    * @return {Model}
    */
    Model.prototype._filterBy = function (key, value, multiple) {
        if (typeof multiple === "undefined") { multiple = false; }
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(key, "string");
        Util.validateType(value, "any");
        Util.validateType(multiple, "boolean");
        if (!("Filter" in this._params)) {
            this._params["Filter"] = {};
        }
        ;
        var filter = this._params["Filter"];
        if (multiple) {
            if (!(key in filter)) {
                filter[key] = [];
            }
            ;
            var values = filter[key];
            values.push(value);
        } else {
            filter[key] = value;
        }
        ;
        return (this);
    };

    /**
    * 次のリクエストのために設定されているステートをすべて破棄します。
    *
    * @private
    * @method _reset
    * @chainable
    * @protected
    * @return {Model} this
    */
    Model.prototype._reset = function () {
        Util.validateArgCount(arguments.length, 0);
        this._params = {};
        this._total = 0;
        this._count = 0;
        return (this);
    };

    /**
    *  *
    *
    * @private
    * @method _create
    * @protected
    * @return {Resource}
    */
    Model.prototype._create = function () {
        Util.validateArgCount(arguments.length, 0);
        return Util.createClassInstance("saclient.cloud.resource." + this._className(), [this._client, null]);
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @private
    * @method _getById
    * @protected
    * @param {string} id
    * @return {Resource} リソースオブジェクト
    */
    Model.prototype._getById = function (id) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(id, "string");
        var params = this._params;
        this._reset();
        var result = this._client.request("GET", this._apiPath() + "/" + Util.urlEncode(id), params);
        this._total = 1;
        this._count = 1;
        var record = result[this._rootKey()];
        return (Util.createClassInstance("saclient.cloud.resource." + this._className(), [this._client, record]));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @private
    * @method _find
    * @protected
    * @return {Resource[]} リソースオブジェクトの配列
    */
    Model.prototype._find = function () {
        Util.validateArgCount(arguments.length, 0);
        var params = this._params;
        this._reset();
        var result = this._client.request("GET", this._apiPath(), params);
        this._total = (result["Total"]);
        this._count = (result["Count"]);
        var records = (result[this._rootKeyM()]);
        var data = [];
        for (var __it1 = 0; __it1 < records.length; __it1++) {
            var record = records[__it1];
            var i = Util.createClassInstance("saclient.cloud.resource." + this._className(), [this._client, record]);
            data.push(i);
        }
        ;
        return (data);
    };

    /**
    * リソースの検索リクエストを実行し、唯一のリソースを取得します。
    *
    * @private
    * @method _findOne
    * @protected
    * @return {Resource} リソースオブジェクト
    */
    Model.prototype._findOne = function () {
        Util.validateArgCount(arguments.length, 0);
        var params = this._params;
        this._reset();
        var result = this._client.request("GET", this._apiPath(), params);
        this._total = (result["Total"]);
        this._count = (result["Count"]);
        if (this._total == 0) {
            return null;
        }
        ;
        var records = (result[this._rootKeyM()]);
        return (Util.createClassInstance("saclient.cloud.resource." + this._className(), [this._client, records[0]]));
    };
    return Model;
})();
module.exports = Model;
