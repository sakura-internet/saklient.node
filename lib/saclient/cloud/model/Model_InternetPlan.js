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
* @class Model_InternetPlan
* @constructor
* @extends Model
*/
var Model_InternetPlan = (function (_super) {
    __extends(Model_InternetPlan, _super);
    function Model_InternetPlan() {
        _super.apply(this, arguments);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Model_InternetPlan.prototype._apiPath = function () {
        return "/product/internet";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_InternetPlan.prototype._rootKey = function () {
        return "InternetPlan";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_InternetPlan.prototype._rootKeyM = function () {
        return "InternetPlans";
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_InternetPlan} this
    */
    Model_InternetPlan.prototype.offset = function (offset) {
        return (this._offset(offset));
    };

    /**
    * 次に取得するリストの上限レコード数を指定します。
    *
    * @method limit
    * @chainable
    * @public
    * @param {number} count 上限レコード数
    * @return {Model_InternetPlan} this
    */
    Model_InternetPlan.prototype.limit = function (count) {
        return (this._limit(count));
    };

    /**
    * 次のリクエストのために設定されているステートをすべて破棄します。
    *
    * @method reset
    * @chainable
    * @public
    * @return {Model_InternetPlan} this
    */
    Model_InternetPlan.prototype.reset = function () {
        return (this._reset());
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method get
    * @public
    * @param {string} id
    * @return {InternetPlan} リソースオブジェクト
    */
    Model_InternetPlan.prototype.get = function (id) {
        return (this._get(id));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @method find
    * @public
    * @return {InternetPlan[]} リソースオブジェクトの配列
    */
    Model_InternetPlan.prototype.find = function () {
        return Util.castArray(this._find(), (null));
    };
    return Model_InternetPlan;
})(Model);
module.exports = Model_InternetPlan;
