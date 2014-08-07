var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');
var Model = require('./Model');

var EScope = require('../enums/EScope');

'use strict';

/**
* アイコンを検索するための機能を備えたクラス。
*
* @class Model_Icon
* @constructor
* @extends Model
*/
var Model_Icon = (function (_super) {
    __extends(Model_Icon, _super);
    function Model_Icon() {
        _super.apply(this, arguments);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Model_Icon.prototype._apiPath = function () {
        return "/icon";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_Icon.prototype._rootKey = function () {
        return "Icon";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_Icon.prototype._rootKeyM = function () {
        return "Icons";
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model_Icon.prototype._className = function () {
        return "Icon";
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_Icon} this
    */
    Model_Icon.prototype.offset = function (offset) {
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
    * @return {Model_Icon} this
    */
    Model_Icon.prototype.limit = function (count) {
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
    * @return {Model_Icon}
    */
    Model_Icon.prototype.filterBy = function (key, value, multiple) {
        if (typeof multiple === "undefined") { multiple = false; }
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(key, "string");
        Util.validateType(multiple, "boolean");
        return (this._filterBy(key, value, multiple));
    };

    /**
    * 次のリクエストのために設定されているステートをすべて破棄します。
    *
    * @method reset
    * @chainable
    * @public
    * @return {Model_Icon} this
    */
    Model_Icon.prototype.reset = function () {
        return (this._reset());
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method getById
    * @public
    * @param {string} id
    * @return {Icon} リソースオブジェクト
    */
    Model_Icon.prototype.getById = function (id) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(id, "string");
        return (this._getById(id));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @method find
    * @public
    * @return {Icon[]} リソースオブジェクトの配列
    */
    Model_Icon.prototype.find = function () {
        return Util.castArray(this._find(), (null));
    };

    /**
    * 指定した文字列を名前に含むアイコンに絞り込みます。
    *
    * @method withNameLike
    * @chainable
    * @public
    * @param {string} name
    * @return {Model_Icon}
    */
    Model_Icon.prototype.withNameLike = function (name) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(name, "string");
        this._filterBy("Name", name);
        return this;
    };

    /**
    * 指定したタグを持つアイコンに絞り込みます。
    *
    * @method withTag
    * @chainable
    * @public
    * @param {string} tag
    * @return {Model_Icon}
    */
    Model_Icon.prototype.withTag = function (tag) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(tag, "string");
        this._filterBy("Tags.Name", tag, true);
        return this;
    };

    /**
    * 指定したタグを持つアイコンに絞り込みます。
    *
    * @method withTags
    * @chainable
    * @public
    * @param {string[]} tags
    * @return {Model_Icon}
    */
    Model_Icon.prototype.withTags = function (tags) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(tags, "Array");
        this._filterBy("Tags.Name", tags, true);
        return this;
    };

    /**
    * パブリックアイコンに絞り込みます。
    *
    * @method withSharedScope
    * @chainable
    * @public
    * @return {Model_Icon}
    */
    Model_Icon.prototype.withSharedScope = function () {
        this._filterBy("Scope", EScope.shared);
        return this;
    };

    /**
    * プライベートアイコンに絞り込みます。
    *
    * @method withUserScope
    * @chainable
    * @public
    * @return {Model_Icon}
    */
    Model_Icon.prototype.withUserScope = function () {
        this._filterBy("Scope", EScope.user);
        return this;
    };
    return Model_Icon;
})(Model);
module.exports = Model_Icon;
