var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');

var Model = require('./Model');

var Bridge = require('../resources/Bridge');

'use strict';

/**
* ブリッジを検索・作成するための機能を備えたクラス。
*
* @module saklient.cloud.models.Model_Bridge
* @class Model_Bridge
* @constructor
* @extends Model
*/
var Model_Bridge = (function (_super) {
    __extends(Model_Bridge, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    */
    function Model_Bridge(client) {
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
    Model_Bridge.prototype._apiPath = function () {
        return "/bridge";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_Bridge.prototype._rootKey = function () {
        return "Bridge";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_Bridge.prototype._rootKeyM = function () {
        return "Bridges";
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model_Bridge.prototype._className = function () {
        return "Bridge";
    };

    /**
    * @private
    * @method _createResourceImpl
    * @protected
    * @param {any} obj
    * @param {boolean} wrapped=false
    * @return {Resource}
    */
    Model_Bridge.prototype._createResourceImpl = function (obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(wrapped, "boolean");
        return new Bridge(this._client, obj, wrapped);
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_Bridge} this
    */
    Model_Bridge.prototype.offset = function (offset) {
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
    * @return {Model_Bridge} this
    */
    Model_Bridge.prototype.limit = function (count) {
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
    * @return {Model_Bridge}
    */
    Model_Bridge.prototype.filterBy = function (key, value, multiple) {
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
    * @return {Model_Bridge} this
    */
    Model_Bridge.prototype.reset = function () {
        return (this._reset());
    };

    /**
    * 新規リソース作成用のオブジェクトを用意します。
    *
    * 返り値のオブジェクトにパラメータを設定し、save() を呼ぶことで実際のリソースが作成されます。
    *
    * @method create
    * @public
    * @return {Bridge} リソースオブジェクト
    */
    Model_Bridge.prototype.create = function () {
        return (this._create());
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method getById
    * @public
    * @param {string} id
    * @return {Bridge} リソースオブジェクト
    */
    Model_Bridge.prototype.getById = function (id) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(id, "string");
        return (this._getById(id));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @method find
    * @public
    * @return {Bridge[]} リソースオブジェクトの配列
    */
    Model_Bridge.prototype.find = function () {
        return Util.castArray(this._find(), (null));
    };

    /**
    * 指定した文字列を名前に含むリソースに絞り込みます。
    *
    * 大文字・小文字は区別されません。
    * 半角スペースで区切られた複数の文字列は、それらをすべて含むことが条件とみなされます。
    *
    * @todo Implement test case
    * @method withNameLike
    * @chainable
    * @public
    * @param {string} name
    * @return {Model_Bridge}
    */
    Model_Bridge.prototype.withNameLike = function (name) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(name, "string");
        return (this._withNameLike(name));
    };

    /**
    * 名前でソートします。
    *
    * @todo Implement test case
    * @method sortByName
    * @chainable
    * @public
    * @param {boolean} reverse=false
    * @return {Model_Bridge}
    */
    Model_Bridge.prototype.sortByName = function (reverse) {
        if (typeof reverse === "undefined") { reverse = false; }
        Util.validateType(reverse, "boolean");
        return (this._sortByName(reverse));
    };
    return Model_Bridge;
})(Model);
module.exports = Model_Bridge;
