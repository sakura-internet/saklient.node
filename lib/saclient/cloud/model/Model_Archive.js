var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../Util');
var Model = require('./Model');

/**
* アーカイブを検索するための機能を備えたクラス。
*
* @class Model_Archive
* @constructor
* @extends Model
*/
var Model_Archive = (function (_super) {
    __extends(Model_Archive, _super);
    function Model_Archive() {
        _super.apply(this, arguments);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Model_Archive.prototype._apiPath = function () {
        return "/archive";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_Archive.prototype._rootKey = function () {
        return "Archive";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_Archive.prototype._rootKeyM = function () {
        return "Archives";
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_Archive} this
    */
    Model_Archive.prototype.offset = function (offset) {
        return (this._offset(offset));
    };

    /**
    * 次に取得するリストの上限レコード数を指定します。
    *
    * @method limit
    * @chainable
    * @public
    * @param {number} count 上限レコード数
    * @return {Model_Archive} this
    */
    Model_Archive.prototype.limit = function (count) {
        return (this._limit(count));
    };

    /**
    * 次のリクエストのために設定されているステートをすべて破棄します。
    *
    * @method reset
    * @chainable
    * @public
    * @return {Model_Archive} this
    */
    Model_Archive.prototype.reset = function () {
        return (this._reset());
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method getById
    * @public
    * @param {string} id
    * @return {Archive} リソースオブジェクト
    */
    Model_Archive.prototype.getById = function (id) {
        return (this._getById(id));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @method find
    * @public
    * @return {Archive[]} リソースオブジェクトの配列
    */
    Model_Archive.prototype.find = function () {
        return Util.castArray(this._find(), (null));
    };

    /**
    * 指定した文字列を名前に含むアーカイブに絞り込みます。
    *
    * @method withNameLike
    * @chainable
    * @public
    * @param {string} name
    * @return {Model_Archive}
    */
    Model_Archive.prototype.withNameLike = function (name) {
        this._filterBy("Name", name);
        return this;
    };

    /**
    * 指定したタグを持つアーカイブに絞り込みます。
    *
    * @method withTag
    * @chainable
    * @public
    * @param {string} tag
    * @return {Model_Archive}
    */
    Model_Archive.prototype.withTag = function (tag) {
        this._filterBy("Tags.Name", tag, true);
        return this;
    };
    return Model_Archive;
})(Model);
module.exports = Model_Archive;
