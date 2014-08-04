var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');
var Model = require('./Model');

/**
* インタフェースを検索するための機能を備えたクラス。
*
* @class Model_Iface
* @constructor
* @extends Model
*/
var Model_Iface = (function (_super) {
    __extends(Model_Iface, _super);
    function Model_Iface() {
        _super.apply(this, arguments);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Model_Iface.prototype._apiPath = function () {
        Util.validateArgCount(arguments.length, 0);
        return "/interface";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_Iface.prototype._rootKey = function () {
        Util.validateArgCount(arguments.length, 0);
        return "Interface";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_Iface.prototype._rootKeyM = function () {
        Util.validateArgCount(arguments.length, 0);
        return "Interfaces";
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model_Iface.prototype._className = function () {
        Util.validateArgCount(arguments.length, 0);
        return "Iface";
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_Iface} this
    */
    Model_Iface.prototype.offset = function (offset) {
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
    * @return {Model_Iface} this
    */
    Model_Iface.prototype.limit = function (count) {
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
    * @return {Model_Iface}
    */
    Model_Iface.prototype.filterBy = function (key, value, multiple) {
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
    * @return {Model_Iface} this
    */
    Model_Iface.prototype.reset = function () {
        Util.validateArgCount(arguments.length, 0);
        return (this._reset());
    };

    /**
    * *
    *
    * @method create
    * @public
    * @return {Iface}
    */
    Model_Iface.prototype.create = function () {
        Util.validateArgCount(arguments.length, 0);
        return (this._create());
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method getById
    * @public
    * @param {string} id
    * @return {Iface} リソースオブジェクト
    */
    Model_Iface.prototype.getById = function (id) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(id, "string");
        return (this._getById(id));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @method find
    * @public
    * @return {Iface[]} リソースオブジェクトの配列
    */
    Model_Iface.prototype.find = function () {
        Util.validateArgCount(arguments.length, 0);
        return Util.castArray(this._find(), (null));
    };
    return Model_Iface;
})(Model);
module.exports = Model_Iface;
