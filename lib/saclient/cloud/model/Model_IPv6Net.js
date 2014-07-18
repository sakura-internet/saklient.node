var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../Util');
var Model = require('./Model');

/**
* IPv6ネットワークを検索するための機能を備えたクラス。
*
* @class Model_IPv6Net
* @constructor
* @extends Model
*/
var Model_IPv6Net = (function (_super) {
    __extends(Model_IPv6Net, _super);
    function Model_IPv6Net() {
        _super.apply(this, arguments);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Model_IPv6Net.prototype._apiPath = function () {
        return "/ipv6net";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_IPv6Net.prototype._rootKey = function () {
        return "IPv6Net";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_IPv6Net.prototype._rootKeyM = function () {
        return "IPv6Nets";
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model_IPv6Net.prototype._className = function () {
        return "IPv6Net";
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_IPv6Net} this
    */
    Model_IPv6Net.prototype.offset = function (offset) {
        return (this._offset(offset));
    };

    /**
    * 次に取得するリストの上限レコード数を指定します。
    *
    * @method limit
    * @chainable
    * @public
    * @param {number} count 上限レコード数
    * @return {Model_IPv6Net} this
    */
    Model_IPv6Net.prototype.limit = function (count) {
        return (this._limit(count));
    };

    /**
    * 次のリクエストのために設定されているステートをすべて破棄します。
    *
    * @method reset
    * @chainable
    * @public
    * @return {Model_IPv6Net} this
    */
    Model_IPv6Net.prototype.reset = function () {
        return (this._reset());
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method getById
    * @public
    * @param {string} id
    * @return {IPv6Net} リソースオブジェクト
    */
    Model_IPv6Net.prototype.getById = function (id) {
        return (this._getById(id));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @method find
    * @public
    * @return {IPv6Net[]} リソースオブジェクトの配列
    */
    Model_IPv6Net.prototype.find = function () {
        return Util.castArray(this._find(), (null));
    };
    return Model_IPv6Net;
})(Model);
module.exports = Model_IPv6Net;
