var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../Util');
var Model = require('./Model');

/**
* ディスクを検索するための機能を備えたクラス。
*
* @class Model_Disk
* @constructor
* @extends Model
*/
var Model_Disk = (function (_super) {
    __extends(Model_Disk, _super);
    function Model_Disk() {
        _super.apply(this, arguments);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Model_Disk.prototype._apiPath = function () {
        return "/disk";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_Disk.prototype._rootKey = function () {
        return "Disk";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_Disk.prototype._rootKeyM = function () {
        return "Disks";
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model_Disk.prototype._className = function () {
        return "Disk";
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_Disk} this
    */
    Model_Disk.prototype.offset = function (offset) {
        return (this._offset(offset));
    };

    /**
    * 次に取得するリストの上限レコード数を指定します。
    *
    * @method limit
    * @chainable
    * @public
    * @param {number} count 上限レコード数
    * @return {Model_Disk} this
    */
    Model_Disk.prototype.limit = function (count) {
        return (this._limit(count));
    };

    /**
    * 次のリクエストのために設定されているステートをすべて破棄します。
    *
    * @method reset
    * @chainable
    * @public
    * @return {Model_Disk} this
    */
    Model_Disk.prototype.reset = function () {
        return (this._reset());
    };

    /**
    * *
    *
    * @method create
    * @public
    * @return {Disk}
    */
    Model_Disk.prototype.create = function () {
        return (this._create());
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method getById
    * @public
    * @param {string} id
    * @return {Disk} リソースオブジェクト
    */
    Model_Disk.prototype.getById = function (id) {
        return (this._getById(id));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @method find
    * @public
    * @return {Disk[]} リソースオブジェクトの配列
    */
    Model_Disk.prototype.find = function () {
        return Util.castArray(this._find(), (null));
    };

    /**
    * 指定した文字列を名前に含むディスクに絞り込みます。
    *
    * @method withNameLike
    * @chainable
    * @public
    * @param {string} name
    * @return {Model_Disk}
    */
    Model_Disk.prototype.withNameLike = function (name) {
        this._filterBy("Name", name);
        return this;
    };

    /**
    * 指定したタグを持つディスクに絞り込みます。
    *
    * @method withTag
    * @chainable
    * @public
    * @param {string} tag
    * @return {Model_Disk}
    */
    Model_Disk.prototype.withTag = function (tag) {
        this._filterBy("Tags.Name", tag, true);
        return this;
    };

    /**
    * 指定したサイズのディスクに絞り込みます。
    *
    * @method withSizeGib
    * @chainable
    * @public
    * @param {number} sizeGib
    * @return {Model_Disk}
    */
    Model_Disk.prototype.withSizeGib = function (sizeGib) {
        this._filterBy("SizeMB", sizeGib * 1024);
        return this;
    };

    /**
    * 指定したサーバへ接続されているディスクに絞り込みます。
    *
    * @method withServerId
    * @chainable
    * @public
    * @param {string} id
    * @return {Model_Disk}
    */
    Model_Disk.prototype.withServerId = function (id) {
        this._filterBy("Server.ID", id);
        return this;
    };
    return Model_Disk;
})(Model);
module.exports = Model_Disk;
