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
* IPv6ネットワークを検索するための機能を備えたクラス。
*
* @module saklient.cloud.model.Model_Ipv6Net
* @class Model_Ipv6Net
* @constructor
* @extends Model
*/
var Model_Ipv6Net = (function (_super) {
    __extends(Model_Ipv6Net, _super);
    function Model_Ipv6Net() {
        _super.apply(this, arguments);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Model_Ipv6Net.prototype._apiPath = function () {
        return "/ipv6net";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_Ipv6Net.prototype._rootKey = function () {
        return "IPv6Net";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_Ipv6Net.prototype._rootKeyM = function () {
        return "IPv6Nets";
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model_Ipv6Net.prototype._className = function () {
        return "IPv6Net";
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_Ipv6Net} this
    */
    Model_Ipv6Net.prototype.offset = function (offset) {
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
    * @return {Model_Ipv6Net} this
    */
    Model_Ipv6Net.prototype.limit = function (count) {
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
    * @return {Model_Ipv6Net}
    */
    Model_Ipv6Net.prototype.filterBy = function (key, value, multiple) {
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
    * @return {Model_Ipv6Net} this
    */
    Model_Ipv6Net.prototype.reset = function () {
        return (this._reset());
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method getById
    * @public
    * @param {string} id
    * @return {Ipv6Net} リソースオブジェクト
    */
    Model_Ipv6Net.prototype.getById = function (id) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(id, "string");
        return (this._getById(id));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @method find
    * @public
    * @return {Ipv6Net[]} リソースオブジェクトの配列
    */
    Model_Ipv6Net.prototype.find = function () {
        return Util.castArray(this._find(), (null));
    };
    return Model_Ipv6Net;
})(Model);
module.exports = Model_Ipv6Net;
