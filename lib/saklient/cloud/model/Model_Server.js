var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');
var Model = require('./Model');

var EServerInstanceStatus = require('../enums/EServerInstanceStatus');

'use strict';

/**
* サーバを検索・作成するための機能を備えたクラス。
*
* @class Model_Server
* @constructor
* @extends Model
*/
var Model_Server = (function (_super) {
    __extends(Model_Server, _super);
    function Model_Server() {
        _super.apply(this, arguments);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Model_Server.prototype._apiPath = function () {
        return "/server";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_Server.prototype._rootKey = function () {
        return "Server";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_Server.prototype._rootKeyM = function () {
        return "Servers";
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model_Server.prototype._className = function () {
        return "Server";
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_Server} this
    */
    Model_Server.prototype.offset = function (offset) {
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
    * @return {Model_Server} this
    */
    Model_Server.prototype.limit = function (count) {
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
    * @return {Model_Server}
    */
    Model_Server.prototype.filterBy = function (key, value, multiple) {
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
    * @return {Model_Server} this
    */
    Model_Server.prototype.reset = function () {
        return (this._reset());
    };

    /**
    * 新規リソース作成用のオブジェクトを用意します。
    *
    * 返り値のオブジェクトにパラメータを設定し、save() を呼ぶことで実際のリソースが作成されます。
    *
    * @method create
    * @public
    * @return {Server} リソースオブジェクト
    */
    Model_Server.prototype.create = function () {
        return (this._create());
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method getById
    * @public
    * @param {string} id
    * @return {Server} リソースオブジェクト
    */
    Model_Server.prototype.getById = function (id) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(id, "string");
        return (this._getById(id));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @method find
    * @public
    * @return {Server[]} リソースオブジェクトの配列
    */
    Model_Server.prototype.find = function () {
        return Util.castArray(this._find(), (null));
    };

    /**
    * 指定した文字列を名前に含むリソースに絞り込みます。
    *
    * 大文字・小文字は区別されません。
    * 半角スペースで区切られた複数の文字列は、それらをすべて含むことが条件とみなされます。
    *
    * @method withNameLike
    * @chainable
    * @public
    * @param {string} name
    * @return {Model_Server}
    */
    Model_Server.prototype.withNameLike = function (name) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(name, "string");
        return (this._withNameLike(name));
    };

    /**
    * 指定したタグを持つリソースに絞り込みます。
    *
    * 複数のタグを指定する場合は withTags() を利用してください。
    *
    * @method withTag
    * @chainable
    * @public
    * @param {string} tag
    * @return {Model_Server}
    */
    Model_Server.prototype.withTag = function (tag) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(tag, "string");
        return (this._withTag(tag));
    };

    /**
    * 指定したすべてのタグを持つリソースに絞り込みます。
    *
    * @method withTags
    * @chainable
    * @public
    * @param {string[]} tags
    * @return {Model_Server}
    */
    Model_Server.prototype.withTags = function (tags) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(tags, "Array");
        return (this._withTags(tags));
    };

    /**
    * 名前でソートします。
    *
    * @method sortByName
    * @chainable
    * @public
    * @param {boolean} reverse=false
    * @return {Model_Server}
    */
    Model_Server.prototype.sortByName = function (reverse) {
        if (typeof reverse === "undefined") { reverse = false; }
        Util.validateType(reverse, "boolean");
        return (this._sortByName(reverse));
    };

    /**
    * 指定したプランのサーバに絞り込みます。
    *
    * @method withPlan
    * @chainable
    * @public
    * @param {ServerPlan} plan
    * @return {Model_Server}
    */
    Model_Server.prototype.withPlan = function (plan) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(plan, "saklient.cloud.resource.ServerPlan");
        this._filterBy("ServerPlan.ID", plan._id(), true);
        return this;
    };

    /**
    * インスタンスが指定した状態にあるサーバに絞り込みます。
    *
    * @method withStatus
    * @chainable
    * @public
    * @param {string} status
    * @return {Model_Server}
    */
    Model_Server.prototype.withStatus = function (status) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(status, "string");
        this._filterBy("Instance.Status", status, true);
        return this;
    };

    /**
    * インスタンスが起動中のサーバに絞り込みます。
    *
    * @method withStatusUp
    * @chainable
    * @public
    * @return {Model_Server}
    */
    Model_Server.prototype.withStatusUp = function () {
        return this.withStatus(EServerInstanceStatus.up);
    };

    /**
    * インスタンスが停止中のサーバに絞り込みます。
    *
    * @method withStatusDown
    * @chainable
    * @public
    * @return {Model_Server}
    */
    Model_Server.prototype.withStatusDown = function () {
        return this.withStatus(EServerInstanceStatus.down);
    };

    /**
    * 指定したISOイメージが挿入されているサーバに絞り込みます。
    *
    * @method withIsoImage
    * @chainable
    * @public
    * @param {IsoImage} iso
    * @return {Model_Server}
    */
    Model_Server.prototype.withIsoImage = function (iso) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(iso, "saklient.cloud.resource.IsoImage");
        this._filterBy("Instance.CDROM.ID", iso._id(), true);
        return this;
    };

    /**
    * 仮想コア数でソートします。
    *
    * @method sortByCpu
    * @chainable
    * @public
    * @param {boolean} reverse=false
    * @return {Model_Server}
    */
    Model_Server.prototype.sortByCpu = function (reverse) {
        if (typeof reverse === "undefined") { reverse = false; }
        Util.validateType(reverse, "boolean");
        this._sort("ServerPlan.CPU", reverse);
        return this;
    };

    /**
    * メモリ容量でソートします。
    *
    * @method sortByMemory
    * @chainable
    * @public
    * @param {boolean} reverse=false
    * @return {Model_Server}
    */
    Model_Server.prototype.sortByMemory = function (reverse) {
        if (typeof reverse === "undefined") { reverse = false; }
        Util.validateType(reverse, "boolean");
        this._sort("ServerPlan.MemoryMB", reverse);
        return this;
    };
    return Model_Server;
})(Model);
module.exports = Model_Server;
