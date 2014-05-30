var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../Util');
var Model = require('./Model');

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
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_Server} this
    */
    Model_Server.prototype.offset = function (offset) {
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
        return (this._limit(count));
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
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method get
    * @public
    * @param {string} id
    * @return {Server} リソースオブジェクト
    */
    Model_Server.prototype.get = function (id) {
        return (this._get(id));
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
    * 指定した文字列を名前に含むサーバに絞り込みます。
    *
    * @method withNameLike
    * @chainable
    * @public
    * @param {string} name
    * @return {Model_Server}
    */
    Model_Server.prototype.withNameLike = function (name) {
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
        this._filterBy("Tags.Name", tag, true);
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
        this._filterBy("ServerPlan.ID", plan._id(), true);
        return this;
    };

    /**
    * インスタンスが指定した状態にあるサーバに絞り込みます。
    *
    * @method withInstanceStatus
    * @chainable
    * @public
    * @param {string} status
    * @return {Model_Server}
    */
    Model_Server.prototype.withInstanceStatus = function (status) {
        this._filterBy("Instance.Status", status, true);
        return this;
    };
    return Model_Server;
})(Model);
module.exports = Model_Server;
