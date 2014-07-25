var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../Util');
var Model = require('./Model');

/**
* ルータのプランを検索するための機能を備えたクラス。
*
* @class Model_RouterPlan
* @constructor
* @extends Model
*/
var Model_RouterPlan = (function (_super) {
    __extends(Model_RouterPlan, _super);
    function Model_RouterPlan() {
        _super.apply(this, arguments);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Model_RouterPlan.prototype._apiPath = function () {
        return "/product/internet";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_RouterPlan.prototype._rootKey = function () {
        return "InternetPlan";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_RouterPlan.prototype._rootKeyM = function () {
        return "InternetPlans";
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model_RouterPlan.prototype._className = function () {
        return "RouterPlan";
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_RouterPlan} this
    */
    Model_RouterPlan.prototype.offset = function (offset) {
        return (this._offset(offset));
    };

    /**
    * 次に取得するリストの上限レコード数を指定します。
    *
    * @method limit
    * @chainable
    * @public
    * @param {number} count 上限レコード数
    * @return {Model_RouterPlan} this
    */
    Model_RouterPlan.prototype.limit = function (count) {
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
    * @return {Model_RouterPlan}
    */
    Model_RouterPlan.prototype.filterBy = function (key, value, multiple) {
        if (typeof multiple === "undefined") { multiple = false; }
        return (this._filterBy(key, value, multiple));
    };

    /**
    * 次のリクエストのために設定されているステートをすべて破棄します。
    *
    * @method reset
    * @chainable
    * @public
    * @return {Model_RouterPlan} this
    */
    Model_RouterPlan.prototype.reset = function () {
        return (this._reset());
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method getById
    * @public
    * @param {string} id
    * @return {RouterPlan} リソースオブジェクト
    */
    Model_RouterPlan.prototype.getById = function (id) {
        return (this._getById(id));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @method find
    * @public
    * @return {RouterPlan[]} リソースオブジェクトの配列
    */
    Model_RouterPlan.prototype.find = function () {
        return Util.castArray(this._find(), (null));
    };
    return Model_RouterPlan;
})(Model);
module.exports = Model_RouterPlan;