var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../Util');
var Model = require('./Model');

/**
* アプライアンスを検索するための機能を備えたクラス。
*
* @class Model_Appliance
* @constructor
* @extends Model
*/
var Model_Appliance = (function (_super) {
    __extends(Model_Appliance, _super);
    function Model_Appliance() {
        _super.apply(this, arguments);
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
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_Appliance} this
    */
    Model_Appliance.prototype.offset = function (offset) {
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
        return (this._limit(count));
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
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method getById
    * @public
    * @param {string} id
    * @return {Appliance} リソースオブジェクト
    */
    Model_Appliance.prototype.getById = function (id) {
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
    * 指定した文字列を名前に含むアプライアンスに絞り込みます。
    *
    * @method withNameLike
    * @chainable
    * @public
    * @param {string} name
    * @return {Model_Appliance}
    */
    Model_Appliance.prototype.withNameLike = function (name) {
        this._filterBy("Name", name);
        return this;
    };

    /**
    * 指定したタグを持つアプライアンスに絞り込みます。
    *
    * @method withTag
    * @chainable
    * @public
    * @param {string} tag
    * @return {Model_Appliance}
    */
    Model_Appliance.prototype.withTag = function (tag) {
        this._filterBy("Tags.Name", tag, true);
        return this;
    };
    return Model_Appliance;
})(Model);
module.exports = Model_Appliance;
