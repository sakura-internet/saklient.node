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
* スクリプトを検索・作成するための機能を備えたクラス。
*
* @class Model_Script
* @constructor
* @extends Model
*/
var Model_Script = (function (_super) {
    __extends(Model_Script, _super);
    function Model_Script() {
        _super.apply(this, arguments);
    }
    /**
    * @private
    * @method _apiPath
    * @protected
    * @return {string}
    */
    Model_Script.prototype._apiPath = function () {
        return "/note";
    };

    /**
    * @private
    * @method _rootKey
    * @protected
    * @return {string}
    */
    Model_Script.prototype._rootKey = function () {
        return "Note";
    };

    /**
    * @private
    * @method _rootKeyM
    * @protected
    * @return {string}
    */
    Model_Script.prototype._rootKeyM = function () {
        return "Notes";
    };

    /**
    * @private
    * @method _className
    * @protected
    * @return {string}
    */
    Model_Script.prototype._className = function () {
        return "Script";
    };

    /**
    * 次に取得するリストの開始オフセットを指定します。
    *
    * @method offset
    * @chainable
    * @public
    * @param {number} offset オフセット
    * @return {Model_Script} this
    */
    Model_Script.prototype.offset = function (offset) {
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
    * @return {Model_Script} this
    */
    Model_Script.prototype.limit = function (count) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(count, "number");
        return (this._limit(count));
    };

    /**
    * Web APIのフィルタリング設定を直接指定します。
    *
    * @method filterBy
    * @chainable
    * @public
    * @param {string} key キー
    * @param {any} value 値
    * @param {boolean} multiple=false valueに配列を与え、OR条件で完全一致検索する場合にtrueを指定します。通常、valueはスカラ値であいまい検索されます。
    * @return {Model_Script}
    */
    Model_Script.prototype.filterBy = function (key, value, multiple) {
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
    * @return {Model_Script} this
    */
    Model_Script.prototype.reset = function () {
        return (this._reset());
    };

    /**
    * 指定したIDを持つ唯一のリソースを取得します。
    *
    * @method getById
    * @public
    * @param {string} id
    * @return {Script} リソースオブジェクト
    */
    Model_Script.prototype.getById = function (id) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(id, "string");
        return (this._getById(id));
    };

    /**
    * リソースの検索リクエストを実行し、結果をリストで取得します。
    *
    * @method find
    * @public
    * @return {Script[]} リソースオブジェクトの配列
    */
    Model_Script.prototype.find = function () {
        return Util.castArray(this._find(), (null));
    };

    /**
    * 指定した文字列を名前に含むリソースに絞り込みます。
    *
    * 大文字・小文字は区別されません。
    * 半角スペースで区切られた複数の文字列は、それらをすべて含むことが条件とみなされます。
    *
    * @method withNameLike
    * @chainable
    * @public
    * @param {string} name
    * @return {Model_Script}
    */
    Model_Script.prototype.withNameLike = function (name) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(name, "string");
        return (this._withNameLike(name));
    };

    /**
    * 指定したタグを持つリソースに絞り込みます。
    *
    * 複数のタグを指定する場合は withTags() を利用してください。
    *
    * @method withTag
    * @chainable
    * @public
    * @param {string} tag
    * @return {Model_Script}
    */
    Model_Script.prototype.withTag = function (tag) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(tag, "string");
        return (this._withTag(tag));
    };

    /**
    * 指定したすべてのタグを持つリソースに絞り込みます。
    *
    * @method withTags
    * @chainable
    * @public
    * @param {string[]} tags
    * @return {Model_Script}
    */
    Model_Script.prototype.withTags = function (tags) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(tags, "Array");
        return (this._withTags(tags));
    };

    /**
    * 名前でソートします。
    *
    * @method sortByName
    * @chainable
    * @public
    * @param {boolean} reverse=false
    * @return {Model_Script}
    */
    Model_Script.prototype.sortByName = function (reverse) {
        if (typeof reverse === "undefined") { reverse = false; }
        Util.validateType(reverse, "boolean");
        return (this._sortByName(reverse));
    };

    /**
    * パブリックスクリプトに絞り込みます。
    *
    * @method withSharedScope
    * @chainable
    * @public
    * @return {Model_Script}
    */
    Model_Script.prototype.withSharedScope = function () {
        this._filterBy("Scope", EScope.shared);
        return this;
    };

    /**
    * プライベートスクリプトに絞り込みます。
    *
    * @method withUserScope
    * @chainable
    * @public
    * @return {Model_Script}
    */
    Model_Script.prototype.withUserScope = function () {
        this._filterBy("Scope", EScope.user);
        return this;
    };
    return Model_Script;
})(Model);
module.exports = Model_Script;
