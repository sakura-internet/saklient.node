
var Util = require('../../Util');

'use strict';

/**
* @private
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
        Util.validateType(client, "saklient.cloud.Client");
        this._client = client;
        this._params = {};
        this._total = null;
        this._count = null;
    }
    /**
    * @method get_client
    * @protected
    * @private
    * @return {Client}
    */
    Model.prototype.get_client = function () {
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
    * @private
    * @return {TQueryParams}
    */
    Model.prototype.get_params = function () {
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
    * @private
    * @return {number}
    */
    Model.prototype.get_total = function () {
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
    * @private
    * @return {number}
    */
    Model.prototype.get_count = function () {
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
        return null;
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model.prototype._rootKey = function () {
        return null;
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model.prototype._rootKeyM = function () {
        return null;
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model.prototype._className = function () {
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
        return this;
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
        return this;
    };

    /**
    * 次に取得するリストのソートカラムを指定します。
    *
    * @private
    * @method _sort
    * @chainable
    * @protected
    * @param {string} column カラム名
    * @param {boolean} reverse=false
    * @return {Model} this
    */
    Model.prototype._sort = function (column, reverse) {
        if (typeof reverse === "undefined") { reverse = false; }
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(column, "string");
        Util.validateType(reverse, "boolean");
        if (!("Sort" in this._params)) {
            this._params["Sort"] = [];
        }
        ;
        var sort = this._params["Sort"];
        var op = reverse ? "-" : "";
        sort.push(op + column);
        return this;
    };

    /**
    * Web APIのフィルタリング設定を直接指定します。
    *
    * @private
    * @method _filterBy
    * @chainable
    * @protected
    * @param {string} key キー
    * @param {any} value 値
    * @param {boolean} multiple=false valueに配列を与え、OR条件で完全一致検索する場合にtrueを指定します。通常、valueはスカラ値であいまい検索されます。
    * @return {Model}
    */
    Model.prototype._filterBy = function (key, value, multiple) {
        if (typeof multiple === "undefined") { multiple = false; }
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(key, "string");
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
        return this;
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
        this._params = {};
        this._total = 0;
        this._count = 0;
        return this;
    };

    /**
    * 新規リソース作成用のオブジェクトを用意します。
    *
    * 返り値のオブジェクトにパラメータを設定し、save() を呼ぶことで実際のリソースが作成されます。
    *
    * @private
    * @method _create
    * @protected
    * @return {Resource} リソースオブジェクト
    */
    Model.prototype._create = function () {
        return Util.createClassInstance("saklient.cloud.resource." + this._className(), [this._client, null]);
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
        return (Util.createClassInstance("saklient.cloud.resource." + this._className(), [this._client, result, true]));
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
        var params = this._params;
        this._reset();
        var result = this._client.request("GET", this._apiPath(), params);
        this._total = (result["Total"]);
        this._count = (result["Count"]);
        var records = (result[this._rootKeyM()]);
        var data = [];
        for (var __it1 = 0; __it1 < records.length; __it1++) {
            var record = records[__it1];
            var i = Util.createClassInstance("saklient.cloud.resource." + this._className(), [this._client, record]);
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
        return (Util.createClassInstance("saklient.cloud.resource." + this._className(), [this._client, records[0]]));
    };

    /**
    * 指定した文字列を名前に含むリソースに絞り込みます。
    *
    * 大文字・小文字は区別されません。
    * 半角スペースで区切られた複数の文字列は、それらをすべて含むことが条件とみなされます。
    *
    * @private
    * @method _withNameLike
    * @chainable
    * @protected
    * @param {string} name
    * @return {Model}
    */
    Model.prototype._withNameLike = function (name) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(name, "string");
        return this._filterBy("Name", name);
    };

    /**
    * 指定したタグを持つリソースに絞り込みます。
    *
    * 複数のタグを指定する場合は withTags() を利用してください。
    *
    * @private
    * @method _withTag
    * @chainable
    * @protected
    * @param {string} tag
    * @return {Model}
    */
    Model.prototype._withTag = function (tag) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(tag, "string");
        return this._filterBy("Tags.Name", tag, true);
    };

    /**
    * 指定したすべてのタグを持つリソースに絞り込みます。
    *
    * @private
    * @method _withTags
    * @chainable
    * @protected
    * @param {string[]} tags
    * @return {Model}
    */
    Model.prototype._withTags = function (tags) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(tags, "Array");
        return this._filterBy("Tags.Name", tags, true);
    };

    /**
    * 名前でソートします。
    *
    * @private
    * @method _sortByName
    * @chainable
    * @protected
    * @param {boolean} reverse=false
    * @return {Model}
    */
    Model.prototype._sortByName = function (reverse) {
        if (typeof reverse === "undefined") { reverse = false; }
        Util.validateType(reverse, "boolean");
        return this._sort("Name", reverse);
    };
    return Model;
})();
module.exports = Model;
