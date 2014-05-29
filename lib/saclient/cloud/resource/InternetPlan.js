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
            * ルータのプラン情報へのアクセス機能を備えたクラス。
            *
            * @class InternetPlan
            * @constructor
            * @extends Resource
            */
            var InternetPlan = (function (_super) {
                __extends(InternetPlan, _super);
                /**
                * @private
                * @constructor
                * @public
                * @param {Client} client
                * @param {any} r
                */
                function InternetPlan(client, r) {
                    _super.call(this, client);
                    /**
                    * @member saclient.cloud.resource.InternetPlan#n_id
                    * @type boolean
                    * @private
                    */
                    this.n_id = false;
                    /**
                    * @member saclient.cloud.resource.InternetPlan#n_name
                    * @type boolean
                    * @private
                    */
                    this.n_name = false;
                    /**
                    * @member saclient.cloud.resource.InternetPlan#n_bandWidthMbps
                    * @type boolean
                    * @private
                    */
                    this.n_bandWidthMbps = false;
                    /**
                    * @member saclient.cloud.resource.InternetPlan#n_serviceClass
                    * @type boolean
                    * @private
                    */
                    this.n_serviceClass = false;
                    this.apiDeserialize(r);
                }
                /**
                * @private
                * @method _id
                * @public
                * @return {string}
                */
                InternetPlan.prototype._id = function () {
                    return this.get_id();
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_id
                * @private
                * @return {string}
                */
                InternetPlan.prototype.get_id = function () {
                    return this.m_id;
                };

                Object.defineProperty(InternetPlan.prototype, "id", {
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
                InternetPlan.prototype.get_name = function () {
                    return this.m_name;
                };

                Object.defineProperty(InternetPlan.prototype, "name", {
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
                * @method get_bandWidthMbps
                * @private
                * @return {number}
                */
                InternetPlan.prototype.get_bandWidthMbps = function () {
                    return this.m_bandWidthMbps;
                };

                Object.defineProperty(InternetPlan.prototype, "bandWidthMbps", {
                    /**
                    * @property bandWidthMbps
                    * @type number
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_bandWidthMbps();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_serviceClass
                * @private
                * @return {string}
                */
                InternetPlan.prototype.get_serviceClass = function () {
                    return this.m_serviceClass;
                };

                Object.defineProperty(InternetPlan.prototype, "serviceClass", {
                    /**
                    * @property serviceClass
                    * @type string
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_serviceClass();
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
                InternetPlan.prototype.apiDeserialize = function (r) {
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
                    if (("BandWidthMbps" in r)) {
                        this.m_bandWidthMbps = r["BandWidthMbps"] == null ? null : parseInt("" + r["BandWidthMbps"], 10);
                        this.n_bandWidthMbps = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("ServiceClass" in r)) {
                        this.m_serviceClass = r["ServiceClass"] == null ? null : "" + r["ServiceClass"];
                        this.n_serviceClass = false;
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
                InternetPlan.prototype.apiSerialize = function (withClean) {
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
                    if (withClean || this.n_bandWidthMbps) {
                        ret["BandWidthMbps"] = this.m_bandWidthMbps;
                    }
                    ;
                    if (withClean || this.n_serviceClass) {
                        ret["ServiceClass"] = this.m_serviceClass;
                    }
                    ;
                    return ret;
                };
                return InternetPlan;
            })(saclient.cloud.resource.Resource);
            resource.InternetPlan = InternetPlan;
        })(cloud.resource || (cloud.resource = {}));
        var resource = cloud.resource;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
