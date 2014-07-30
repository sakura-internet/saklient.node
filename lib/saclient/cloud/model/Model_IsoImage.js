var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../Util');
var Model = require('./Model');

var EScope = require('../enums/EScope');

/**
* ISOイメージを検索するための機能を備えたクラス。
*
* @class Model_IsoImage
* @constructor
* @extends Model
*/
var Model_IsoImage = (function (_super) {
    __extends(Model_IsoImage, _super);
    function Model_IsoImage() {
        _super.apply(this, arguments);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Model_IsoImage.prototype._apiPath = function () {
        return "/cdrom";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_IsoImage.prototype._rootKey = function () {
        return "CDROM";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_IsoImage.prototype._rootKeyM = function () {
        return "CDROMs";
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model_IsoImage.prototype._className = function () {
        return "IsoImage";
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_IsoImage} this
    */
    Model_IsoImage.prototype.offset = function (offset) {
        return (this._offset(offset));
    };

    /**
    * 次に取得するリストの上限レコード数を指定します。
    *
    * @method limit
    * @chainable
    * @public
    * @param {number} count 上限レコード数
    * @return {Model_IsoImage} this
    */
    Model_IsoImage.prototype.limit = function (count) {
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
    * @return {Model_IsoImage}
    */
    Model_IsoImage.prototype.filterBy = function (key, value, multiple) {
        if (typeof multiple === "undefined") { multiple = false; }
        return (this._filterBy(key, value, multiple));
    };

    /**
    * 次のリクエストのために設定されているステートをすべて破棄します。
    *
    * @method reset
    * @chainable
    * @public
    * @return {Model_IsoImage} this
    */
    Model_IsoImage.prototype.reset = function () {
        return (this._reset());
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method getById
    * @public
    * @param {string} id
    * @return {IsoImage} リソースオブジェクト
    */
    Model_IsoImage.prototype.getById = function (id) {
        return (this._getById(id));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @method find
    * @public
    * @return {IsoImage[]} リソースオブジェクトの配列
    */
    Model_IsoImage.prototype.find = function () {
        return Util.castArray(this._find(), (null));
    };

    /**
    * 指定した文字列を名前に含むアーカイブに絞り込みます。
    *
    * @method withNameLike
    * @chainable
    * @public
    * @param {string} name
    * @return {Model_IsoImage}
    */
    Model_IsoImage.prototype.withNameLike = function (name) {
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
    * @return {Model_IsoImage}
    */
    Model_IsoImage.prototype.withTag = function (tag) {
        this._filterBy("Tags.Name", tag, true);
        return this;
    };

    /**
    * 指定したサイズのアーカイブに絞り込みます。
    *
    * @method withSizeGib
    * @chainable
    * @public
    * @param {number} sizeGib
    * @return {Model_IsoImage}
    */
    Model_IsoImage.prototype.withSizeGib = function (sizeGib) {
        this._filterBy("SizeMB", sizeGib * 1024);
        return this;
    };

    /**
    * パブリックアーカイブに絞り込みます。
    *
    * @method withSharedScope
    * @chainable
    * @public
    * @return {Model_IsoImage}
    */
    Model_IsoImage.prototype.withSharedScope = function () {
        this._filterBy("Scope", EScope.shared);
        return this;
    };

    /**
    * プライベートアーカイブに絞り込みます。
    *
    * @method withUserScope
    * @chainable
    * @public
    * @return {Model_IsoImage}
    */
    Model_IsoImage.prototype.withUserScope = function () {
        this._filterBy("Scope", EScope.user);
        return this;
    };
    return Model_IsoImage;
})(Model);
module.exports = Model_IsoImage;
