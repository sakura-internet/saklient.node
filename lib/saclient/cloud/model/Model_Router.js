var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../Util');
var Model = require('./Model');

/**
* ルータを検索するための機能を備えたクラス。
*
* @class Model_Router
* @constructor
* @extends Model
*/
var Model_Router = (function (_super) {
    __extends(Model_Router, _super);
    function Model_Router() {
        _super.apply(this, arguments);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Model_Router.prototype._apiPath = function () {
        return "/internet";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_Router.prototype._rootKey = function () {
        return "Internet";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_Router.prototype._rootKeyM = function () {
        return "Internet";
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model_Router.prototype._className = function () {
        return "Router";
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_Router} this
    */
    Model_Router.prototype.offset = function (offset) {
        return (this._offset(offset));
    };

    /**
    * 次に取得するリストの上限レコード数を指定します。
    *
    * @method limit
    * @chainable
    * @public
    * @param {number} count 上限レコード数
    * @return {Model_Router} this
    */
    Model_Router.prototype.limit = function (count) {
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
    * @return {Model_Router}
    */
    Model_Router.prototype.filterBy = function (key, value, multiple) {
        if (typeof multiple === "undefined") { multiple = false; }
        return (this._filterBy(key, value, multiple));
    };

    /**
    * 次のリクエストのために設定されているステートをすべて破棄します。
    *
    * @method reset
    * @chainable
    * @public
    * @return {Model_Router} this
    */
    Model_Router.prototype.reset = function () {
        return (this._reset());
    };

    /**
    * *
    *
    * @method create
    * @public
    * @return {Router}
    */
    Model_Router.prototype.create = function () {
        return (this._create());
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method getById
    * @public
    * @param {string} id
    * @return {Router} リソースオブジェクト
    */
    Model_Router.prototype.getById = function (id) {
        return (this._getById(id));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @method find
    * @public
    * @return {Router[]} リソースオブジェクトの配列
    */
    Model_Router.prototype.find = function () {
        return Util.castArray(this._find(), (null));
    };

    /**
    * 指定した文字列を名前に含むルータに絞り込みます。
    *
    * @method withNameLike
    * @chainable
    * @public
    * @param {string} name
    * @return {Model_Router}
    */
    Model_Router.prototype.withNameLike = function (name) {
        this._filterBy("Name", name);
        return this;
    };

    /**
    * 指定した帯域幅のルータに絞り込みます。
    *
    * @method withBandWidthMbps
    * @chainable
    * @public
    * @param {number} mbps
    * @return {Model_Router}
    */
    Model_Router.prototype.withBandWidthMbps = function (mbps) {
        this._filterBy("BandWidthMbps", mbps);
        return this;
    };
    return Model_Router;
})(Model);
module.exports = Model_Router;