/// <reference path="../Client.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.resource
        */
        (function (resource) {
            /**
            * アイコンのリソース情報へのアクセス機能や操作機能を備えたクラス。
            *
            * @class Icon
            * @constructor
            * @extends Resource
            */
            var Icon = (function (_super) {
                __extends(Icon, _super);
                /**
                * @private
                * @constructor
                * @public
                * @param {Client} client
                * @param {any} r
                */
                function Icon(client, r) {
                    _super.call(this, client);
                    /**
                    * @member saclient.cloud.resource.Icon#n_id
                    * @type boolean
                    * @private
                    */
                    this.n_id = false;
                    /**
                    * @member saclient.cloud.resource.Icon#n_name
                    * @type boolean
                    * @private
                    */
                    this.n_name = false;
                    /**
                    * @member saclient.cloud.resource.Icon#n_url
                    * @type boolean
                    * @private
                    */
                    this.n_url = false;
                    this.apiDeserialize(r);
                }
                /**
                * @private
                * @method _apiPath
                * @protected
                * @return {string}
                */
                Icon.prototype._apiPath = function () {
                    return "/icon";
                };

                /**
                * @private
                * @method _rootKey
                * @protected
                * @return {string}
                */
                Icon.prototype._rootKey = function () {
                    return "Icon";
                };

                /**
                * @private
                * @method _rootKeyM
                * @protected
                * @return {string}
                */
                Icon.prototype._rootKeyM = function () {
                    return "Icons";
                };

                /**
                * @private
                * @method _id
                * @public
                * @return {string}
                */
                Icon.prototype._id = function () {
                    return this.get_id();
                };

                /**
                * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新しいインスタンスを作成します。
                *
                * @method create
                * @chainable
                * @public
                * @return {Icon} this
                */
                Icon.prototype.create = function () {
                    return (this._create());
                };

                /**
                * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
                *
                * @method save
                * @chainable
                * @public
                * @return {Icon} this
                */
                Icon.prototype.save = function () {
                    return (this._save());
                };

                /**
                * 最新のリソース情報を再取得します。
                *
                * @method reload
                * @chainable
                * @public
                * @return {Icon} this
                */
                Icon.prototype.reload = function () {
                    return (this._reload());
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_id
                * @private
                * @return {string}
                */
                Icon.prototype.get_id = function () {
                    return this.m_id;
                };

                Object.defineProperty(Icon.prototype, "id", {
                    /**
                    * @property id
                    * @type string
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_id();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_name
                * @private
                * @return {string}
                */
                Icon.prototype.get_name = function () {
                    return this.m_name;
                };

                Object.defineProperty(Icon.prototype, "name", {
                    /**
                    * @property name
                    * @type string
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_name();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_url
                * @private
                * @return {string}
                */
                Icon.prototype.get_url = function () {
                    return this.m_url;
                };

                Object.defineProperty(Icon.prototype, "url", {
                    /**
                    * @property url
                    * @type string
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_url();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method apiDeserialize
                * @public
                * @param {any} r
                */
                Icon.prototype.apiDeserialize = function (r) {
                    this.isIncomplete = true;
                    if (("ID" in r)) {
                        this.m_id = r["ID"] == null ? null : "" + r["ID"];
                        this.n_id = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("Name" in r)) {
                        this.m_name = r["Name"] == null ? null : "" + r["Name"];
                        this.n_name = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("URL" in r)) {
                        this.m_url = r["URL"] == null ? null : "" + r["URL"];
                        this.n_url = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method apiSerialize
                * @public
                * @param {boolean} withClean=false
                * @return {any}
                */
                Icon.prototype.apiSerialize = function (withClean) {
                    if (typeof withClean === "undefined") { withClean = false; }
                    var ret = {};
                    if (withClean || this.n_id) {
                        ret["ID"] = this.m_id;
                    }
                    ;
                    if (withClean || this.n_name) {
                        ret["Name"] = this.m_name;
                    }
                    ;
                    if (withClean || this.n_url) {
                        ret["URL"] = this.m_url;
                    }
                    ;
                    return ret;
                };
                return Icon;
            })(saclient.cloud.resource.Resource);
            resource.Icon = Icon;
        })(cloud.resource || (cloud.resource = {}));
        var resource = cloud.resource;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
