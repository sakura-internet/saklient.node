var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');

var Model = require('./Model');

var Appliance = require('../resources/Appliance');
var LoadBalancer = require('../resources/LoadBalancer');
var VpcRouter = require('../resources/VpcRouter');

'use strict';

/**
* アプライアンスを検索・作成するための機能を備えたクラス。
*
* @module saklient.cloud.models.Model_Appliance
* @class Model_Appliance
* @constructor
* @extends Model
*/
var Model_Appliance = (function (_super) {
    __extends(Model_Appliance, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    */
    function Model_Appliance(client) {
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
    Model_Appliance.prototype._apiPath = function () {
        return "/appliance";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_Appliance.prototype._rootKey = function () {
        return "Appliance";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_Appliance.prototype._rootKeyM = function () {
        return "Appliances";
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model_Appliance.prototype._className = function () {
        return "Appliance";
    };

    /**
    * @private
    * @method _createResourceImpl
    * @protected
    * @param {any} obj
    * @param {boolean} wrapped=false
    * @return {Resource}
    */
    Model_Appliance.prototype._createResourceImpl = function (obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(wrapped, "boolean");
        var ret = new Appliance(this._client, obj, wrapped);
        var clazz = (ret["clazz"]);
        if (clazz == "loadbalancer") {
            return new LoadBalancer(this._client, obj, wrapped);
        }
        ;
        if (clazz == "vpcrouter") {
            return new VpcRouter(this._client, obj, wrapped);
        }
        ;
        return ret;
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_Appliance} this
    */
    Model_Appliance.prototype.offset = function (offset) {
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
    * @return {Model_Appliance} this
    */
    Model_Appliance.prototype.limit = function (count) {
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
    * @return {Model_Appliance}
    */
    Model_Appliance.prototype.filterBy = function (key, value, multiple) {
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
    * @return {Model_Appliance} this
    */
    Model_Appliance.prototype.reset = function () {
        return (this._reset());
    };

    /**
    * @method createLoadBalancer
    * @public
    * @param {Swytch} swytch
    * @param {number} vrid
    * @param {string[]} realIps
    * @param {boolean} isHighSpec=false
    * @return {LoadBalancer}
    */
    Model_Appliance.prototype.createLoadBalancer = function (swytch, vrid, realIps, isHighSpec) {
        if (typeof isHighSpec === "undefined") { isHighSpec = false; }
        Util.validateArgCount(arguments.length, 3);
        Util.validateType(swytch, "saklient.cloud.resources.Swytch");
        Util.validateType(vrid, "number");
        Util.validateType(realIps, "Array");
        Util.validateType(isHighSpec, "boolean");
        var ret = new LoadBalancer(this._client, null);
        return ret.setInitialParams(swytch, vrid, realIps, isHighSpec);
    };

    /**
    * @method createVpcRouter
    * @public
    * @return {VpcRouter}
    */
    Model_Appliance.prototype.createVpcRouter = function () {
        var ret = new VpcRouter(this._client, null);
        return ret;
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method getById
    * @public
    * @param {string} id
    * @return {Appliance} リソースオブジェクト
    */
    Model_Appliance.prototype.getById = function (id) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(id, "string");
        return (this._getById(id));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @method find
    * @public
    * @return {Appliance[]} リソースオブジェクトの配列
    */
    Model_Appliance.prototype.find = function () {
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
    * @return {Model_Appliance}
    */
    Model_Appliance.prototype.withNameLike = function (name) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(name, "string");
        return (this._withNameLike(name));
    };

    /**
    * 指定したタグを持つリソースに絞り込みます。
    *
    * 複数のタグを指定する場合は withTags() を利用してください。
    *
    * @todo Implement test case
    * @method withTag
    * @chainable
    * @public
    * @param {string} tag
    * @return {Model_Appliance}
    */
    Model_Appliance.prototype.withTag = function (tag) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(tag, "string");
        return (this._withTag(tag));
    };

    /**
    * 指定したすべてのタグを持つリソースに絞り込みます。
    *
    * @todo Implement test case
    * @method withTags
    * @chainable
    * @public
    * @param {string[]} tags
    * @return {Model_Appliance}
    */
    Model_Appliance.prototype.withTags = function (tags) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(tags, "Array");
        return (this._withTags(tags));
    };

    /**
    * 指定したDNFに合致するタグを持つリソースに絞り込みます。
    *
    * @todo Implement test case
    * @method withTagDnf
    * @chainable
    * @public
    * @param {string[][]} dnf
    * @return {Model_Appliance}
    */
    Model_Appliance.prototype.withTagDnf = function (dnf) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(dnf, "Array");
        return (this._withTagDnf(dnf));
    };

    /**
    * 名前でソートします。
    *
    * @todo Implement test case
    * @method sortByName
    * @chainable
    * @public
    * @param {boolean} reverse=false
    * @return {Model_Appliance}
    */
    Model_Appliance.prototype.sortByName = function (reverse) {
        if (typeof reverse === "undefined") { reverse = false; }
        Util.validateType(reverse, "boolean");
        return (this._sortByName(reverse));
    };
    return Model_Appliance;
})(Model);
module.exports = Model_Appliance;
