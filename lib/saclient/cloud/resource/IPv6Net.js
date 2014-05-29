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
            * IPv6ネットワークのリソース情報へのアクセス機能や操作機能を備えたクラス。
            *
            * @class IPv6Net
            * @constructor
            * @extends Resource
            */
            var IPv6Net = (function (_super) {
                __extends(IPv6Net, _super);
                /**
                * @private
                * @constructor
                * @public
                * @param {Client} client
                * @param {any} r
                */
                function IPv6Net(client, r) {
                    _super.call(this, client);
                    /**
                    * @member saclient.cloud.resource.IPv6Net#n_id
                    * @type boolean
                    * @private
                    */
                    this.n_id = false;
                    /**
                    * @member saclient.cloud.resource.IPv6Net#n_ipv6Prefix
                    * @type boolean
                    * @private
                    */
                    this.n_ipv6Prefix = false;
                    /**
                    * @member saclient.cloud.resource.IPv6Net#n_ipv6PrefixLen
                    * @type boolean
                    * @private
                    */
                    this.n_ipv6PrefixLen = false;
                    /**
                    * @member saclient.cloud.resource.IPv6Net#n_ipv6PrefixTail
                    * @type boolean
                    * @private
                    */
                    this.n_ipv6PrefixTail = false;
                    this.apiDeserialize(r);
                }
                /**
                * @private
                * @method _id
                * @public
                * @return {string}
                */
                IPv6Net.prototype._id = function () {
                    return this.get_id();
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_id
                * @private
                * @return {string}
                */
                IPv6Net.prototype.get_id = function () {
                    return this.m_id;
                };

                Object.defineProperty(IPv6Net.prototype, "id", {
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
                * @method get_ipv6Prefix
                * @private
                * @return {string}
                */
                IPv6Net.prototype.get_ipv6Prefix = function () {
                    return this.m_ipv6Prefix;
                };

                Object.defineProperty(IPv6Net.prototype, "ipv6Prefix", {
                    /**
                    * @property ipv6Prefix
                    * @type string
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_ipv6Prefix();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_ipv6PrefixLen
                * @private
                * @return {number}
                */
                IPv6Net.prototype.get_ipv6PrefixLen = function () {
                    return this.m_ipv6PrefixLen;
                };

                Object.defineProperty(IPv6Net.prototype, "ipv6PrefixLen", {
                    /**
                    * @property ipv6PrefixLen
                    * @type number
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_ipv6PrefixLen();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_ipv6PrefixTail
                * @private
                * @return {string}
                */
                IPv6Net.prototype.get_ipv6PrefixTail = function () {
                    return this.m_ipv6PrefixTail;
                };

                Object.defineProperty(IPv6Net.prototype, "ipv6PrefixTail", {
                    /**
                    * @property ipv6PrefixTail
                    * @type string
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_ipv6PrefixTail();
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
                IPv6Net.prototype.apiDeserialize = function (r) {
                    this.isIncomplete = true;
                    if (("ID" in r)) {
                        this.m_id = r["ID"] == null ? null : "" + r["ID"];
                        this.n_id = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("IPv6Prefix" in r)) {
                        this.m_ipv6Prefix = r["IPv6Prefix"] == null ? null : "" + r["IPv6Prefix"];
                        this.n_ipv6Prefix = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("IPv6PrefixLen" in r)) {
                        this.m_ipv6PrefixLen = r["IPv6PrefixLen"] == null ? null : parseInt("" + r["IPv6PrefixLen"], 10);
                        this.n_ipv6PrefixLen = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("IPv6PrefixTail" in r)) {
                        this.m_ipv6PrefixTail = r["IPv6PrefixTail"] == null ? null : "" + r["IPv6PrefixTail"];
                        this.n_ipv6PrefixTail = false;
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
                IPv6Net.prototype.apiSerialize = function (withClean) {
                    if (typeof withClean === "undefined") { withClean = false; }
                    var ret = {};
                    if (withClean || this.n_id) {
                        ret["ID"] = this.m_id;
                    }
                    ;
                    if (withClean || this.n_ipv6Prefix) {
                        ret["IPv6Prefix"] = this.m_ipv6Prefix;
                    }
                    ;
                    if (withClean || this.n_ipv6PrefixLen) {
                        ret["IPv6PrefixLen"] = this.m_ipv6PrefixLen;
                    }
                    ;
                    if (withClean || this.n_ipv6PrefixTail) {
                        ret["IPv6PrefixTail"] = this.m_ipv6PrefixTail;
                    }
                    ;
                    return ret;
                };
                return IPv6Net;
            })(saclient.cloud.resource.Resource);
            resource.IPv6Net = IPv6Net;
        })(cloud.resource || (cloud.resource = {}));
        var resource = cloud.resource;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
