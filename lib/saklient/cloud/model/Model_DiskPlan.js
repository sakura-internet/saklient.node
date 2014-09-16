var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');

var Model = require('./Model');

'use strict';

/**
* ディスクプランを検索するための機能を備えたクラス。
*
* @module saklient.cloud.model.Model_DiskPlan
* @class Model_DiskPlan
* @constructor
* @extends Model
*/
var Model_DiskPlan = (function (_super) {
    __extends(Model_DiskPlan, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    */
    function Model_DiskPlan(client) {
        _super.call(this, client);
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(client, "saklient.cloud.Client");
        this._hdd = null;
        this._ssd = null;
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Model_DiskPlan.prototype._apiPath = function () {
        return "/product/disk";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_DiskPlan.prototype._rootKey = function () {
        return "DiskPlan";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_DiskPlan.prototype._rootKeyM = function () {
        return "DiskPlans";
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model_DiskPlan.prototype._className = function () {
        return "DiskPlan";
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_DiskPlan} this
    */
    Model_DiskPlan.prototype.offset = function (offset) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(offset, "number");
        return (this._offset(offset));
    };

    /**
    * 次に取得するリストの上限レコード数を指定します。
    *
    * @method limit
    * @chainable
    * @public
    * @param {number} count 上限レコード数
    * @return {Model_DiskPlan} this
    */
    Model_DiskPlan.prototype.limit = function (count) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(count, "number");
        return (this._limit(count));
    };

    /**
    * Web APIのフィルタリング設定を直接指定します。
    *
    * @method filterBy
    * @chainable
    * @public
    * @param {string} key キー
    * @param {any} value 値
    * @param {boolean} multiple=false valueに配列を与え、OR条件で完全一致検索する場合にtrueを指定します。通常、valueはスカラ値であいまい検索されます。
    * @return {Model_DiskPlan}
    */
    Model_DiskPlan.prototype.filterBy = function (key, value, multiple) {
        if (typeof multiple === "undefined") { multiple = false; }
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(key, "string");
        Util.validateType(multiple, "boolean");
        return (this._filterBy(key, value, multiple));
    };

    /**
    * 次のリクエストのために設定されているステートをすべて破棄します。
    *
    * @method reset
    * @chainable
    * @public
    * @return {Model_DiskPlan} this
    */
    Model_DiskPlan.prototype.reset = function () {
        return (this._reset());
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method getById
    * @public
    * @param {string} id
    * @return {DiskPlan} リソースオブジェクト
    */
    Model_DiskPlan.prototype.getById = function (id) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(id, "string");
        return (this._getById(id));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @method find
    * @public
    * @return {DiskPlan[]} リソースオブジェクトの配列
    */
    Model_DiskPlan.prototype.find = function () {
        return Util.castArray(this._find(), (null));
    };

    /**
    * @method get_hdd
    * @protected
    * @private
    * @return {DiskPlan}
    */
    Model_DiskPlan.prototype.get_hdd = function () {
        if (this._hdd == null) {
            this._hdd = this.getById("2");
        }
        ;
        return this._hdd;
    };

    Object.defineProperty(Model_DiskPlan.prototype, "hdd", {
        /**
        * 標準プラン
        *
        * @property hdd
        * @type DiskPlan
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_hdd();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @method get_ssd
    * @protected
    * @private
    * @return {DiskPlan}
    */
    Model_DiskPlan.prototype.get_ssd = function () {
        if (this._ssd == null) {
            this._ssd = this.getById("4");
        }
        ;
        return this._ssd;
    };

    Object.defineProperty(Model_DiskPlan.prototype, "ssd", {
        /**
        * SSDプラン
        *
        * @property ssd
        * @type DiskPlan
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_ssd();
        },
        enumerable: true,
        configurable: true
    });
    return Model_DiskPlan;
})(Model);
module.exports = Model_DiskPlan;
