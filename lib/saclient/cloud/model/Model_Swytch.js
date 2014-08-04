var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');
var Model = require('./Model');

/**
* スイッチを検索するための機能を備えたクラス。
*
* @class Model_Swytch
* @constructor
* @extends Model
*/
var Model_Swytch = (function (_super) {
    __extends(Model_Swytch, _super);
    function Model_Swytch() {
        _super.apply(this, arguments);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Model_Swytch.prototype._apiPath = function () {
        return "/switch";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_Swytch.prototype._rootKey = function () {
        return "Switch";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_Swytch.prototype._rootKeyM = function () {
        return "Switches";
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model_Swytch.prototype._className = function () {
        return "Swytch";
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_Swytch} this
    */
    Model_Swytch.prototype.offset = function (offset) {
        return (this._offset(offset));
    };

    /**
    * 次に取得するリストの上限レコード数を指定します。
    *
    * @method limit
    * @chainable
    * @public
    * @param {number} count 上限レコード数
    * @return {Model_Swytch} this
    */
    Model_Swytch.prototype.limit = function (count) {
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
    * @return {Model_Swytch}
    */
    Model_Swytch.prototype.filterBy = function (key, value, multiple) {
        if (typeof multiple === "undefined") { multiple = false; }
        return (this._filterBy(key, value, multiple));
    };

    /**
    * 次のリクエストのために設定されているステートをすべて破棄します。
    *
    * @method reset
    * @chainable
    * @public
    * @return {Model_Swytch} this
    */
    Model_Swytch.prototype.reset = function () {
        return (this._reset());
    };

    /**
    * *
    *
    * @method create
    * @public
    * @return {Swytch}
    */
    Model_Swytch.prototype.create = function () {
        return (this._create());
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method getById
    * @public
    * @param {string} id
    * @return {Swytch} リソースオブジェクト
    */
    Model_Swytch.prototype.getById = function (id) {
        return (this._getById(id));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @method find
    * @public
    * @return {Swytch[]} リソースオブジェクトの配列
    */
    Model_Swytch.prototype.find = function () {
        return Util.castArray(this._find(), (null));
    };

    /**
    * 指定した文字列を名前に含むスイッチに絞り込みます。
    *
    * @method withNameLike
    * @chainable
    * @public
    * @param {string} name
    * @return {Model_Swytch}
    */
    Model_Swytch.prototype.withNameLike = function (name) {
        this._filterBy("Name", name);
        return this;
    };
    return Model_Swytch;
})(Model);
module.exports = Model_Swytch;
