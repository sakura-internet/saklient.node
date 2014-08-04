var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');
var Model = require('./Model');

var EServerInstanceStatus = require('../enums/EServerInstanceStatus');

/**
* サーバを検索するための機能を備えたクラス。
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
        Util.validateArgCount(arguments.length, 0);
        return "/server";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_Server.prototype._rootKey = function () {
        Util.validateArgCount(arguments.length, 0);
        return "Server";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_Server.prototype._rootKeyM = function () {
        Util.validateArgCount(arguments.length, 0);
        return "Servers";
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model_Server.prototype._className = function () {
        Util.validateArgCount(arguments.length, 0);
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
    * APIのフィルタリング設定を直接指定します。
    *
    * @method filterBy
    * @chainable
    * @public
    * @param {any} value
    * @param {string} key
    * @param {boolean} multiple=false
    * @return {Model_Server}
    */
    Model_Server.prototype.filterBy = function (key, value, multiple) {
        if (typeof multiple === "undefined") { multiple = false; }
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(key, "string");
        Util.validateType(value, "any");
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
        Util.validateArgCount(arguments.length, 0);
        return (this._reset());
    };

    /**
    * *
    *
    * @method create
    * @public
    * @return {Server}
    */
    Model_Server.prototype.create = function () {
        Util.validateArgCount(arguments.length, 0);
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
        Util.validateArgCount(arguments.length, 0);
        return Util.castArray(this._find(), (null));
    };

    /**
    * 指定した文字列を名前に含むサーバに絞り込みます。
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
        this._filterBy("Name", name);
        return this;
    };

    /**
    * 指定したタグを持つサーバに絞り込みます。
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
        this._filterBy("Tags.Name", tag, true);
        return this;
    };

    /**
    * 指定したタグを持つサーバに絞り込みます。
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
        this._filterBy("Tags.Name", tags, true);
        return this;
    };

    /**
    * 指定したタグを持つサーバに絞り込みます。
    *
    * @method withPlan
    * @chainable
    * @public
    * @param {ServerPlan} plan
    * @return {Model_Server}
    */
    Model_Server.prototype.withPlan = function (plan) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(plan, "saclient.cloud.resource.ServerPlan");
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
        Util.validateArgCount(arguments.length, 0);
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
        Util.validateArgCount(arguments.length, 0);
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
        Util.validateType(iso, "saclient.cloud.resource.IsoImage");
        this._filterBy("Instance.CDROM.ID", iso._id(), true);
        return this;
    };
    return Model_Server;
})(Model);
module.exports = Model_Server;
