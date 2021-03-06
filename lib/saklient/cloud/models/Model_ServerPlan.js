var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');

var Model = require('./Model');

var ServerPlan = require('../resources/ServerPlan');

'use strict';

/**
* サーバプランを検索するための機能を備えたクラス。
*
* @module saklient.cloud.models.Model_ServerPlan
* @class Model_ServerPlan
* @constructor
* @extends Model
*/
var Model_ServerPlan = (function (_super) {
    __extends(Model_ServerPlan, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    */
    function Model_ServerPlan(client) {
        _super.call(this, client);
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(client, "saklient.cloud.Client");
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Model_ServerPlan.prototype._apiPath = function () {
        return "/product/server";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_ServerPlan.prototype._rootKey = function () {
        return "ServerPlan";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_ServerPlan.prototype._rootKeyM = function () {
        return "ServerPlans";
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model_ServerPlan.prototype._className = function () {
        return "ServerPlan";
    };

    /**
    * @private
    * @method _createResourceImpl
    * @protected
    * @param {any} obj
    * @param {boolean} wrapped=false
    * @return {Resource}
    */
    Model_ServerPlan.prototype._createResourceImpl = function (obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(wrapped, "boolean");
        return new ServerPlan(this._client, obj, wrapped);
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_ServerPlan} this
    */
    Model_ServerPlan.prototype.offset = function (offset) {
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
    * @return {Model_ServerPlan} this
    */
    Model_ServerPlan.prototype.limit = function (count) {
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
    * @return {Model_ServerPlan}
    */
    Model_ServerPlan.prototype.filterBy = function (key, value, multiple) {
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
    * @return {Model_ServerPlan} this
    */
    Model_ServerPlan.prototype.reset = function () {
        return (this._reset());
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method getById
    * @public
    * @param {string} id
    * @return {ServerPlan} リソースオブジェクト
    */
    Model_ServerPlan.prototype.getById = function (id) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(id, "string");
        return (this._getById(id));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @method find
    * @public
    * @return {ServerPlan[]} リソースオブジェクトの配列
    */
    Model_ServerPlan.prototype.find = function () {
        return Util.castArray(this._find(), (null));
    };

    /**
    * 指定したスペックのプランを取得します。
    *
    * @method getBySpec
    * @public
    * @param {number} cores
    * @param {number} memoryGib
    * @return {ServerPlan}
    */
    Model_ServerPlan.prototype.getBySpec = function (cores, memoryGib) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(cores, "number");
        Util.validateType(memoryGib, "number");
        this._filterBy("CPU", [cores]);
        this._filterBy("MemoryMB", [memoryGib * 1024]);
        return (this._findOne());
    };
    return Model_ServerPlan;
})(Model);
module.exports = Model_ServerPlan;
