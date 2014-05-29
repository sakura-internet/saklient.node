/// <reference path="../../node.d.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        // https://github.com/dhruvbird/http-sync
        var httpSync = require('http-sync');

        var Client = (function () {
            function Client(token, secret) {
                this.config = {};
                this.setApiRoot('https://secure.sakura.ad.jp/cloud/');
                this.setApiRootSuffix(null);
                this.setAccessKey(token, secret);
            }
            Client.prototype.cloneInstance = function () {
                var c = new Client(this.config.token, this.config.secret);
                c.setApiRoot(this.config.apiRoot);
                c.setApiRootSuffix(this.config.apiRootSuffix);
                return c;
            };

            Client.prototype.setApiRoot = function (url) {
                this.config.apiRoot = url;
            };

            Client.prototype.setApiRootSuffix = function (suffix) {
                this.config.apiRootSuffix = suffix;
            };

            Client.prototype.setAccessKey = function (token, secret) {
                this.config.token = token;
                this.config.secret = secret;
                this.config.authorization = 'Basic ' + (new Buffer(token + ':' + secret, 'utf8')).toString('base64');
            };

            Client.prototype.request = function (method, path, params) {
                method = method.toUpperCase();
                path = path.replace(/^\/?/, '/');
                var json = params != null ? JSON.stringify(params) : null;
                if (method == 'GET') {
                    if (json != null)
                        path += '?' + encodeURIComponent(json);
                    json = null;
                }
                if (!path.match(/^http/)) {
                    var urlRoot = this.config.apiRoot;
                    if (this.config.apiRootSuffix != null) {
                        if (this.config.apiRootSuffix.match(/is1[v-z]/)) {
                            urlRoot = urlRoot.replace(/\/cloud\/$/, '/cloud-test/');
                        }
                        urlRoot += this.config.apiRootSuffix;
                        urlRoot = urlRoot.replace(/\/?$/, '/');
                    }
                    path = urlRoot + 'api/cloud/1.1' + path;
                }

                //			console.log("// APIリクエスト中: "+method+" "+path);
                //			console.log(params);
                var pathSegs = path.match(/^(https?):\/\/([^\/]+)(.+)$/);

                var req = httpSync.request({
                    method: method == 'GET' ? 'GET' : 'POST',
                    headers: {
                        //'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': this.config.authorization,
                        'X-Requested-With': 'XMLHttpRequest',
                        'X-Sakura-No-Authenticate-Header': '1',
                        'X-Sakura-HTTP-Method': method,
                        'X-Sakura-Request-Format': 'json',
                        'X-Sakura-Response-Format': 'json',
                        'X-Sakura-Error-Level': 'warning'
                    },
                    body: json,
                    protocol: pathSegs[1],
                    port: pathSegs[1] == 'https' ? 443 : 80,
                    host: pathSegs[2],
                    path: pathSegs[3]
                });
                if (json != null) {
                    req.write(json);
                }
                var data = req.end();
                if (!(data && 200 <= data.statusCode && data.statusCode < 300)) {
                    throw new Error(data ? data.headers.Status : 'No response');
                }
                return JSON.parse(data.body);
            };
            return Client;
        })();
        cloud.Client = Client;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="../Client.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.resource
        */
        (function (resource) {
            /**
            * @ignore
            * @class Resource
            * @constructor
            */
            var Resource = (function () {
                /**
                * @private
                * @constructor
                * @public
                * @param {Client} client
                */
                function Resource(client) {
                    this._client = client;
                }
                /**
                * @method get_client
                * @protected
                * @return {Client}
                */
                Resource.prototype.get_client = function () {
                    return this._client;
                };

                Object.defineProperty(Resource.prototype, "client", {
                    /**
                    * @property client
                    * @type Client
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_client();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * @private
                * @method _apiPath
                * @protected
                * @return {string}
                */
                Resource.prototype._apiPath = function () {
                    return null;
                };

                /**
                * @private
                * @method _rootKey
                * @protected
                * @return {string}
                */
                Resource.prototype._rootKey = function () {
                    return null;
                };

                /**
                * @private
                * @method _rootKeyM
                * @protected
                * @return {string}
                */
                Resource.prototype._rootKeyM = function () {
                    return null;
                };

                /**
                * @private
                * @method _id
                * @public
                * @return {string}
                */
                Resource.prototype._id = function () {
                    return null;
                };

                /**
                * @method apiDeserialize
                * @public
                * @param {any} r
                * @return {void}
                */
                Resource.prototype.apiDeserialize = function (r) {
                };

                /**
                * @method apiSerialize
                * @public
                * @param {boolean} withClean=false
                * @return {any}
                */
                Resource.prototype.apiSerialize = function (withClean) {
                    if (typeof withClean === "undefined") { withClean = false; }
                    return null;
                };

                /**
                * @method apiSerializeID
                * @protected
                * @return {any}
                */
                Resource.prototype.apiSerializeID = function () {
                    var id = this._id();
                    if (id == null)
                        return null;
                    ;
                    var r = {};
                    r["ID"] = id;
                    return r;
                };

                /**
                * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新しいインスタンスを作成します。
                *
                * @private
                * @method _create
                * @chainable
                * @protected
                * @return {Resource} this
                */
                Resource.prototype._create = function () {
                    return this;
                };

                /**
                * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
                *
                * @private
                * @method _save
                * @chainable
                * @protected
                * @return {Resource} this
                */
                Resource.prototype._save = function () {
                    var r = {};
                    r[this._rootKey()] = this.apiSerialize();
                    var result = this._client.request("PUT", this._apiPath() + "/" + cloud.Util.urlEncode(this._id()), r);
                    this.apiDeserialize(result[this._rootKey()]);
                    return this;
                };

                /**
                * 最新のリソース情報を再取得します。
                *
                * @private
                * @method _reload
                * @chainable
                * @protected
                * @return {Resource} this
                */
                Resource.prototype._reload = function () {
                    var result = this._client.request("GET", this._apiPath() + "/" + cloud.Util.urlEncode(this._id()));
                    this.apiDeserialize(result[this._rootKey()]);
                    return this;
                };

                /**
                * @method dump
                * @public
                * @return {any}
                */
                Resource.prototype.dump = function () {
                    return this.apiSerialize();
                };
                return Resource;
            })();
            resource.Resource = Resource;
        })(cloud.resource || (cloud.resource = {}));
        var resource = cloud.resource;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="../Client.ts" />
/// <reference path="../resource/Resource.ts" />
/// <reference path="TQueryParams.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.model
        */
        (function (model) {
            /**
            * @ignore
            * @class Model
            * @constructor
            */
            var Model = (function () {
                /**
                * @constructor
                * @public
                * @param {Client} client
                */
                function Model(client) {
                    this._client = client;
                    this._params = {};
                    this._total = null;
                    this._count = null;
                }
                /**
                * @method get_client
                * @protected
                * @return {Client}
                */
                Model.prototype.get_client = function () {
                    return this._client;
                };

                Object.defineProperty(Model.prototype, "client", {
                    /**
                    * @property client
                    * @type Client
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_client();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * @method get_params
                * @protected
                * @return {TQueryParams}
                */
                Model.prototype.get_params = function () {
                    return this._params;
                };

                Object.defineProperty(Model.prototype, "params", {
                    /**
                    * @property params
                    * @type TQueryParams
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_params();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * @method get_total
                * @protected
                * @return {number}
                */
                Model.prototype.get_total = function () {
                    return this._total;
                };

                Object.defineProperty(Model.prototype, "total", {
                    /**
                    * @property total
                    * @type number
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_total();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * @method get_count
                * @protected
                * @return {number}
                */
                Model.prototype.get_count = function () {
                    return this._count;
                };

                Object.defineProperty(Model.prototype, "count", {
                    /**
                    * @property count
                    * @type number
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_count();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * @private
                * @method _apiPath
                * @protected
                * @return {string}
                */
                Model.prototype._apiPath = function () {
                    return null;
                };

                /**
                * @private
                * @method _rootKey
                * @protected
                * @return {string}
                */
                Model.prototype._rootKey = function () {
                    return null;
                };

                /**
                * @private
                * @method _rootKeyM
                * @protected
                * @return {string}
                */
                Model.prototype._rootKeyM = function () {
                    return null;
                };

                /**
                * 次に取得するリストの開始オフセットを指定します。
                *
                * @private
                * @method _offset
                * @chainable
                * @protected
                * @param {number} offset オフセット
                * @return {Model} this
                */
                Model.prototype._offset = function (offset) {
                    this._params.Begin = offset;
                    return (this);
                };

                /**
                * 次に取得するリストの上限レコード数を指定します。
                *
                * @private
                * @method _limit
                * @chainable
                * @protected
                * @param {number} count 上限レコード数
                * @return {Model} this
                */
                Model.prototype._limit = function (count) {
                    this._params.Count = count;
                    return (this);
                };

                /**
                * 次のリクエストのために設定されているステートをすべて破棄します。
                *
                * @private
                * @method _reset
                * @chainable
                * @protected
                * @return {Model} this
                */
                Model.prototype._reset = function () {
                    this._params = {};
                    this._total = 0;
                    this._count = 0;
                    return (this);
                };

                /**
                * 指定したIDを持つ唯一のリソースを取得します。
                *
                * @private
                * @method _get
                * @protected
                * @param {string} id
                * @return {Resource} リソースオブジェクト
                */
                Model.prototype._get = function (id) {
                    var params = this._params;
                    this._reset();
                    var result = this._client.request("GET", this._apiPath() + "/" + cloud.Util.urlEncode(id), params);
                    this._total = 1;
                    this._count = 1;
                    var record = result[this._rootKey()];
                    return (cloud.Util.createClassInstance("saclient.cloud.resource." + this._rootKey(), [this._client, record]));
                };

                /**
                * リソースの検索リクエストを実行し、結果をリストで取得します。
                *
                * @private
                * @method _find
                * @protected
                * @return {Resource[]} リソースオブジェクトの配列
                */
                Model.prototype._find = function () {
                    var _this = this;
                    var params = this._params;
                    this._reset();
                    var result = this._client.request("GET", this._apiPath(), params);
                    this._total = (result["Total"]);
                    this._count = (result["Count"]);
                    var records = (result[this._rootKeyM()]);
                    var data = [];
                    records.forEach(function (record) {
                         {
                            var i = cloud.Util.createClassInstance("saclient.cloud.resource." + _this._rootKey(), [_this._client, record]);
                            data.push(i);
                        }
                    });
                    return (data);
                };

                /**
                * リソースの検索リクエストを実行し、唯一のリソースを取得します。
                *
                * @private
                * @method _findOne
                * @protected
                * @return {Resource} リソースオブジェクト
                */
                Model.prototype._findOne = function () {
                    var params = this._params;
                    this._reset();
                    var result = this._client.request("GET", this._apiPath(), params);
                    this._total = (result["Total"]);
                    this._count = (result["Count"]);
                    if (this._total == 0)
                        return null;
                    ;
                    var records = (result[this._rootKeyM()]);
                    return (cloud.Util.createClassInstance("saclient.cloud.resource." + this._rootKey(), [this._client, records[0]]));
                };

                /**
                * @private
                * @method _filterBy
                * @protected
                * @param {any} value
                * @param {string} key
                * @param {boolean} multiple=false
                * @return {void}
                */
                Model.prototype._filterBy = function (key, value, multiple) {
                    if (typeof multiple === "undefined") { multiple = false; }
                    if (!("Filter" in this._params)) {
                        this._params["Filter"] = {};
                    }
                    ;
                    var filter = this._params["Filter"];
                    if (multiple) {
                        if (!(key in filter)) {
                            filter[key] = [];
                        }
                        ;
                        var values = filter[key];
                        values.push(value);
                    } else {
                        filter[key] = value;
                    }
                    ;
                };
                return Model;
            })();
            model.Model = Model;
        })(cloud.model || (cloud.model = {}));
        var model = cloud.model;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
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
            * サーバのプラン情報へのアクセス機能を備えたクラス。
            *
            * @class ServerPlan
            * @constructor
            * @extends Resource
            */
            var ServerPlan = (function (_super) {
                __extends(ServerPlan, _super);
                /**
                * @private
                * @constructor
                * @public
                * @param {Client} client
                * @param {any} r
                */
                function ServerPlan(client, r) {
                    _super.call(this, client);
                    /**
                    * @member saclient.cloud.resource.ServerPlan#n_id
                    * @type boolean
                    * @private
                    */
                    this.n_id = false;
                    /**
                    * @member saclient.cloud.resource.ServerPlan#n_name
                    * @type boolean
                    * @private
                    */
                    this.n_name = false;
                    /**
                    * @member saclient.cloud.resource.ServerPlan#n_cpu
                    * @type boolean
                    * @private
                    */
                    this.n_cpu = false;
                    /**
                    * @member saclient.cloud.resource.ServerPlan#n_memoryMib
                    * @type boolean
                    * @private
                    */
                    this.n_memoryMib = false;
                    /**
                    * @member saclient.cloud.resource.ServerPlan#n_serviceClass
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
                ServerPlan.prototype._id = function () {
                    return this.get_id();
                };

                /**
                * @method get_memoryGib
                * @protected
                * @return {number}
                */
                ServerPlan.prototype.get_memoryGib = function () {
                    return this.get_memoryMib() >> 10;
                };

                Object.defineProperty(ServerPlan.prototype, "memoryGib", {
                    /**
                    * @property memoryGib
                    * @type number
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_memoryGib();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_id
                * @private
                * @return {string}
                */
                ServerPlan.prototype.get_id = function () {
                    return this.m_id;
                };

                Object.defineProperty(ServerPlan.prototype, "id", {
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
                ServerPlan.prototype.get_name = function () {
                    return this.m_name;
                };

                Object.defineProperty(ServerPlan.prototype, "name", {
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
                * @method get_cpu
                * @private
                * @return {number}
                */
                ServerPlan.prototype.get_cpu = function () {
                    return this.m_cpu;
                };

                Object.defineProperty(ServerPlan.prototype, "cpu", {
                    /**
                    * @property cpu
                    * @type number
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_cpu();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_memoryMib
                * @private
                * @return {number}
                */
                ServerPlan.prototype.get_memoryMib = function () {
                    return this.m_memoryMib;
                };

                Object.defineProperty(ServerPlan.prototype, "memoryMib", {
                    /**
                    * @property memoryMib
                    * @type number
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_memoryMib();
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
                ServerPlan.prototype.get_serviceClass = function () {
                    return this.m_serviceClass;
                };

                Object.defineProperty(ServerPlan.prototype, "serviceClass", {
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
                ServerPlan.prototype.apiDeserialize = function (r) {
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
                    if (("CPU" in r)) {
                        this.m_cpu = r["CPU"] == null ? null : parseInt("" + r["CPU"], 10);
                        this.n_cpu = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("MemoryMB" in r)) {
                        this.m_memoryMib = r["MemoryMB"] == null ? null : parseInt("" + r["MemoryMB"], 10);
                        this.n_memoryMib = false;
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
                ServerPlan.prototype.apiSerialize = function (withClean) {
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
                    if (withClean || this.n_cpu) {
                        ret["CPU"] = this.m_cpu;
                    }
                    ;
                    if (withClean || this.n_memoryMib) {
                        ret["MemoryMB"] = this.m_memoryMib;
                    }
                    ;
                    if (withClean || this.n_serviceClass) {
                        ret["ServiceClass"] = this.m_serviceClass;
                    }
                    ;
                    return ret;
                };
                return ServerPlan;
            })(saclient.cloud.resource.Resource);
            resource.ServerPlan = ServerPlan;
        })(cloud.resource || (cloud.resource = {}));
        var resource = cloud.resource;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="Model.ts" />
/// <reference path="../resource/ServerPlan.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.model
        */
        (function (model) {
            /**
            * サーバのプランを検索するための機能を備えたクラス。
            *
            * @class Model_ServerPlan
            * @constructor
            * @extends Model
            */
            var Model_ServerPlan = (function (_super) {
                __extends(Model_ServerPlan, _super);
                function Model_ServerPlan() {
                    _super.apply(this, arguments);
                }
                /**
                * @private
                * @method _apiPath
                * @protected
                * @return {string}
                */
                Model_ServerPlan.prototype._apiPath = function () {
                    return "/product/server";
                };

                /**
                * @private
                * @method _rootKey
                * @protected
                * @return {string}
                */
                Model_ServerPlan.prototype._rootKey = function () {
                    return "ServerPlan";
                };

                /**
                * @private
                * @method _rootKeyM
                * @protected
                * @return {string}
                */
                Model_ServerPlan.prototype._rootKeyM = function () {
                    return "ServerPlans";
                };

                /**
                * 次に取得するリストの開始オフセットを指定します。
                *
                * @method offset
                * @chainable
                * @public
                * @param {number} offset オフセット
                * @return {Model_ServerPlan} this
                */
                Model_ServerPlan.prototype.offset = function (offset) {
                    return (this._offset(offset));
                };

                /**
                * 次に取得するリストの上限レコード数を指定します。
                *
                * @method limit
                * @chainable
                * @public
                * @param {number} count 上限レコード数
                * @return {Model_ServerPlan} this
                */
                Model_ServerPlan.prototype.limit = function (count) {
                    return (this._limit(count));
                };

                /**
                * 次のリクエストのために設定されているステートをすべて破棄します。
                *
                * @method reset
                * @chainable
                * @public
                * @return {Model_ServerPlan} this
                */
                Model_ServerPlan.prototype.reset = function () {
                    return (this._reset());
                };

                /**
                * 指定したIDを持つ唯一のリソースを取得します。
                *
                * @method get
                * @public
                * @param {string} id
                * @return {ServerPlan} リソースオブジェクト
                */
                Model_ServerPlan.prototype.get = function (id) {
                    return (this._get(id));
                };

                /**
                * リソースの検索リクエストを実行し、結果をリストで取得します。
                *
                * @method find
                * @public
                * @return {ServerPlan[]} リソースオブジェクトの配列
                */
                Model_ServerPlan.prototype.find = function () {
                    return cloud.Util.castArray(this._find(), (null));
                };

                /**
                * 指定したスペックのプランを取得します。
                *
                * @method getBySpec
                * @public
                * @param {number} cores
                * @param {number} memoryGib
                * @return {ServerPlan}
                */
                Model_ServerPlan.prototype.getBySpec = function (cores, memoryGib) {
                    this._filterBy("CPU", cores, true);
                    this._filterBy("MemoryMB", memoryGib * 1024, true);
                    return (this._findOne());
                };
                return Model_ServerPlan;
            })(saclient.cloud.model.Model);
            model.Model_ServerPlan = Model_ServerPlan;
        })(cloud.model || (cloud.model = {}));
        var model = cloud.model;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="../Client.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.resource
        */
        (function (resource) {
            /**
            * ディスクのプラン情報へのアクセス機能を備えたクラス。
            *
            * @class DiskPlan
            * @constructor
            * @extends Resource
            */
            var DiskPlan = (function (_super) {
                __extends(DiskPlan, _super);
                /**
                * @private
                * @constructor
                * @public
                * @param {Client} client
                * @param {any} r
                */
                function DiskPlan(client, r) {
                    _super.call(this, client);
                    /**
                    * @member saclient.cloud.resource.DiskPlan#n_id
                    * @type boolean
                    * @private
                    */
                    this.n_id = false;
                    /**
                    * @member saclient.cloud.resource.DiskPlan#n_name
                    * @type boolean
                    * @private
                    */
                    this.n_name = false;
                    /**
                    * @member saclient.cloud.resource.DiskPlan#n_storageClass
                    * @type boolean
                    * @private
                    */
                    this.n_storageClass = false;
                    this.apiDeserialize(r);
                }
                /**
                * @private
                * @method _id
                * @public
                * @return {string}
                */
                DiskPlan.prototype._id = function () {
                    return this.get_id();
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_id
                * @private
                * @return {string}
                */
                DiskPlan.prototype.get_id = function () {
                    return this.m_id;
                };

                Object.defineProperty(DiskPlan.prototype, "id", {
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
                DiskPlan.prototype.get_name = function () {
                    return this.m_name;
                };

                Object.defineProperty(DiskPlan.prototype, "name", {
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
                * @method get_storageClass
                * @private
                * @return {string}
                */
                DiskPlan.prototype.get_storageClass = function () {
                    return this.m_storageClass;
                };

                Object.defineProperty(DiskPlan.prototype, "storageClass", {
                    /**
                    * @property storageClass
                    * @type string
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_storageClass();
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
                DiskPlan.prototype.apiDeserialize = function (r) {
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
                    if (("StorageClass" in r)) {
                        this.m_storageClass = r["StorageClass"] == null ? null : "" + r["StorageClass"];
                        this.n_storageClass = false;
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
                DiskPlan.prototype.apiSerialize = function (withClean) {
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
                    if (withClean || this.n_storageClass) {
                        ret["StorageClass"] = this.m_storageClass;
                    }
                    ;
                    return ret;
                };
                return DiskPlan;
            })(saclient.cloud.resource.Resource);
            resource.DiskPlan = DiskPlan;
        })(cloud.resource || (cloud.resource = {}));
        var resource = cloud.resource;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="Model.ts" />
/// <reference path="../resource/DiskPlan.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.model
        */
        (function (model) {
            /**
            * ディスクのプランを検索するための機能を備えたクラス。
            *
            * @class Model_DiskPlan
            * @constructor
            * @extends Model
            */
            var Model_DiskPlan = (function (_super) {
                __extends(Model_DiskPlan, _super);
                function Model_DiskPlan() {
                    _super.apply(this, arguments);
                }
                /**
                * @private
                * @method _apiPath
                * @protected
                * @return {string}
                */
                Model_DiskPlan.prototype._apiPath = function () {
                    return "/product/disk";
                };

                /**
                * @private
                * @method _rootKey
                * @protected
                * @return {string}
                */
                Model_DiskPlan.prototype._rootKey = function () {
                    return "DiskPlan";
                };

                /**
                * @private
                * @method _rootKeyM
                * @protected
                * @return {string}
                */
                Model_DiskPlan.prototype._rootKeyM = function () {
                    return "DiskPlans";
                };

                /**
                * 次に取得するリストの開始オフセットを指定します。
                *
                * @method offset
                * @chainable
                * @public
                * @param {number} offset オフセット
                * @return {Model_DiskPlan} this
                */
                Model_DiskPlan.prototype.offset = function (offset) {
                    return (this._offset(offset));
                };

                /**
                * 次に取得するリストの上限レコード数を指定します。
                *
                * @method limit
                * @chainable
                * @public
                * @param {number} count 上限レコード数
                * @return {Model_DiskPlan} this
                */
                Model_DiskPlan.prototype.limit = function (count) {
                    return (this._limit(count));
                };

                /**
                * 次のリクエストのために設定されているステートをすべて破棄します。
                *
                * @method reset
                * @chainable
                * @public
                * @return {Model_DiskPlan} this
                */
                Model_DiskPlan.prototype.reset = function () {
                    return (this._reset());
                };

                /**
                * 指定したIDを持つ唯一のリソースを取得します。
                *
                * @method get
                * @public
                * @param {string} id
                * @return {DiskPlan} リソースオブジェクト
                */
                Model_DiskPlan.prototype.get = function (id) {
                    return (this._get(id));
                };

                /**
                * リソースの検索リクエストを実行し、結果をリストで取得します。
                *
                * @method find
                * @public
                * @return {DiskPlan[]} リソースオブジェクトの配列
                */
                Model_DiskPlan.prototype.find = function () {
                    return cloud.Util.castArray(this._find(), (null));
                };
                return Model_DiskPlan;
            })(saclient.cloud.model.Model);
            model.Model_DiskPlan = Model_DiskPlan;
        })(cloud.model || (cloud.model = {}));
        var model = cloud.model;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="../Client.ts" />
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
/// <reference path="Model.ts" />
/// <reference path="../resource/InternetPlan.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.model
        */
        (function (model) {
            /**
            * ルータのプランを検索するための機能を備えたクラス。
            *
            * @class Model_InternetPlan
            * @constructor
            * @extends Model
            */
            var Model_InternetPlan = (function (_super) {
                __extends(Model_InternetPlan, _super);
                function Model_InternetPlan() {
                    _super.apply(this, arguments);
                }
                /**
                * @private
                * @method _apiPath
                * @protected
                * @return {string}
                */
                Model_InternetPlan.prototype._apiPath = function () {
                    return "/product/internet";
                };

                /**
                * @private
                * @method _rootKey
                * @protected
                * @return {string}
                */
                Model_InternetPlan.prototype._rootKey = function () {
                    return "InternetPlan";
                };

                /**
                * @private
                * @method _rootKeyM
                * @protected
                * @return {string}
                */
                Model_InternetPlan.prototype._rootKeyM = function () {
                    return "InternetPlans";
                };

                /**
                * 次に取得するリストの開始オフセットを指定します。
                *
                * @method offset
                * @chainable
                * @public
                * @param {number} offset オフセット
                * @return {Model_InternetPlan} this
                */
                Model_InternetPlan.prototype.offset = function (offset) {
                    return (this._offset(offset));
                };

                /**
                * 次に取得するリストの上限レコード数を指定します。
                *
                * @method limit
                * @chainable
                * @public
                * @param {number} count 上限レコード数
                * @return {Model_InternetPlan} this
                */
                Model_InternetPlan.prototype.limit = function (count) {
                    return (this._limit(count));
                };

                /**
                * 次のリクエストのために設定されているステートをすべて破棄します。
                *
                * @method reset
                * @chainable
                * @public
                * @return {Model_InternetPlan} this
                */
                Model_InternetPlan.prototype.reset = function () {
                    return (this._reset());
                };

                /**
                * 指定したIDを持つ唯一のリソースを取得します。
                *
                * @method get
                * @public
                * @param {string} id
                * @return {InternetPlan} リソースオブジェクト
                */
                Model_InternetPlan.prototype.get = function (id) {
                    return (this._get(id));
                };

                /**
                * リソースの検索リクエストを実行し、結果をリストで取得します。
                *
                * @method find
                * @public
                * @return {InternetPlan[]} リソースオブジェクトの配列
                */
                Model_InternetPlan.prototype.find = function () {
                    return cloud.Util.castArray(this._find(), (null));
                };
                return Model_InternetPlan;
            })(saclient.cloud.model.Model);
            model.Model_InternetPlan = Model_InternetPlan;
        })(cloud.model || (cloud.model = {}));
        var model = cloud.model;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="model/Model_ServerPlan.ts" />
/// <reference path="model/Model_DiskPlan.ts" />
/// <reference path="model/Model_InternetPlan.ts" />
/// <reference path="Client.ts" />
var saclient;
(function (saclient) {
    /**
    * @module saclient.cloud
    */
    (function (cloud) {
        var Model_ServerPlan = saclient.cloud.model.Model_ServerPlan;
        var Model_DiskPlan = saclient.cloud.model.Model_DiskPlan;
        var Model_InternetPlan = saclient.cloud.model.Model_InternetPlan;

        /**
        * @class Product
        * @constructor
        */
        var Product = (function () {
            /**
            * @constructor
            * @public
            * @param {Client} client
            */
            function Product(client) {
                this._server = new Model_ServerPlan(client);
                this._disk = new Model_DiskPlan(client);
                this._internet = new Model_InternetPlan(client);
            }
            /**
            * @method get_server
            * @protected
            * @return {Model_ServerPlan}
            */
            Product.prototype.get_server = function () {
                return this._server;
            };

            Object.defineProperty(Product.prototype, "server", {
                /**
                * @property server
                * @type Model_ServerPlan
                * @readOnly
                * @public
                */
                get: function () {
                    return this.get_server();
                },
                enumerable: true,
                configurable: true
            });

            /**
            * @method get_disk
            * @protected
            * @return {Model_DiskPlan}
            */
            Product.prototype.get_disk = function () {
                return this._disk;
            };

            Object.defineProperty(Product.prototype, "disk", {
                /**
                * @property disk
                * @type Model_DiskPlan
                * @readOnly
                * @public
                */
                get: function () {
                    return this.get_disk();
                },
                enumerable: true,
                configurable: true
            });

            /**
            * @method get_internet
            * @protected
            * @return {Model_InternetPlan}
            */
            Product.prototype.get_internet = function () {
                return this._internet;
            };

            Object.defineProperty(Product.prototype, "internet", {
                /**
                * @property internet
                * @type Model_InternetPlan
                * @readOnly
                * @public
                */
                get: function () {
                    return this.get_internet();
                },
                enumerable: true,
                configurable: true
            });
            return Product;
        })();
        cloud.Product = Product;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="../Client.ts" />
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
/// <reference path="Model.ts" />
/// <reference path="../resource/Icon.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.model
        */
        (function (model) {
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
                * 次に取得するリストの開始オフセットを指定します。
                *
                * @method offset
                * @chainable
                * @public
                * @param {number} offset オフセット
                * @return {Model_Icon} this
                */
                Model_Icon.prototype.offset = function (offset) {
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
                    return (this._limit(count));
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
                * @method get
                * @public
                * @param {string} id
                * @return {Icon} リソースオブジェクト
                */
                Model_Icon.prototype.get = function (id) {
                    return (this._get(id));
                };

                /**
                * リソースの検索リクエストを実行し、結果をリストで取得します。
                *
                * @method find
                * @public
                * @return {Icon[]} リソースオブジェクトの配列
                */
                Model_Icon.prototype.find = function () {
                    return cloud.Util.castArray(this._find(), (null));
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
                    this._filterBy("Tags.Name", tag, true);
                    return this;
                };
                return Model_Icon;
            })(saclient.cloud.model.Model);
            model.Model_Icon = Model_Icon;
        })(cloud.model || (cloud.model = {}));
        var model = cloud.model;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="../Client.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.resource
        */
        (function (resource) {
            /**
            * インタフェースのリソース情報へのアクセス機能や操作機能を備えたクラス。
            *
            * @class Iface
            * @constructor
            * @extends Resource
            */
            var Iface = (function (_super) {
                __extends(Iface, _super);
                /**
                * @private
                * @constructor
                * @public
                * @param {Client} client
                * @param {any} r
                */
                function Iface(client, r) {
                    _super.call(this, client);
                    /**
                    * @member saclient.cloud.resource.Iface#n_id
                    * @type boolean
                    * @private
                    */
                    this.n_id = false;
                    /**
                    * @member saclient.cloud.resource.Iface#n_macAddress
                    * @type boolean
                    * @private
                    */
                    this.n_macAddress = false;
                    /**
                    * @member saclient.cloud.resource.Iface#n_ipAddress
                    * @type boolean
                    * @private
                    */
                    this.n_ipAddress = false;
                    /**
                    * @member saclient.cloud.resource.Iface#n_userIpAddress
                    * @type boolean
                    * @private
                    */
                    this.n_userIpAddress = false;
                    this.apiDeserialize(r);
                }
                /**
                * @private
                * @method _apiPath
                * @protected
                * @return {string}
                */
                Iface.prototype._apiPath = function () {
                    return "/interface";
                };

                /**
                * @private
                * @method _rootKey
                * @protected
                * @return {string}
                */
                Iface.prototype._rootKey = function () {
                    return "Interface";
                };

                /**
                * @private
                * @method _rootKeyM
                * @protected
                * @return {string}
                */
                Iface.prototype._rootKeyM = function () {
                    return "Interfaces";
                };

                /**
                * @private
                * @method _id
                * @public
                * @return {string}
                */
                Iface.prototype._id = function () {
                    return this.get_id();
                };

                /**
                * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新しいインスタンスを作成します。
                *
                * @method create
                * @chainable
                * @public
                * @return {Iface} this
                */
                Iface.prototype.create = function () {
                    return (this._create());
                };

                /**
                * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
                *
                * @method save
                * @chainable
                * @public
                * @return {Iface} this
                */
                Iface.prototype.save = function () {
                    return (this._save());
                };

                /**
                * 最新のリソース情報を再取得します。
                *
                * @method reload
                * @chainable
                * @public
                * @return {Iface} this
                */
                Iface.prototype.reload = function () {
                    return (this._reload());
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_id
                * @private
                * @return {string}
                */
                Iface.prototype.get_id = function () {
                    return this.m_id;
                };

                Object.defineProperty(Iface.prototype, "id", {
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
                * @method get_macAddress
                * @private
                * @return {string}
                */
                Iface.prototype.get_macAddress = function () {
                    return this.m_macAddress;
                };

                Object.defineProperty(Iface.prototype, "macAddress", {
                    /**
                    * @property macAddress
                    * @type string
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_macAddress();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_ipAddress
                * @private
                * @return {string}
                */
                Iface.prototype.get_ipAddress = function () {
                    return this.m_ipAddress;
                };

                Object.defineProperty(Iface.prototype, "ipAddress", {
                    /**
                    * @property ipAddress
                    * @type string
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_ipAddress();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_userIpAddress
                * @private
                * @return {string}
                */
                Iface.prototype.get_userIpAddress = function () {
                    return this.m_userIpAddress;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_userIpAddress
                * @private
                * @param {string} v
                * @return {string}
                */
                Iface.prototype.set_userIpAddress = function (v) {
                    this.m_userIpAddress = v;
                    this.n_userIpAddress = true;
                    return this.m_userIpAddress;
                };

                Object.defineProperty(Iface.prototype, "userIpAddress", {
                    /**
                    * @property userIpAddress
                    * @type string
                    * @public
                    */
                    get: function () {
                        return this.get_userIpAddress();
                    },
                    set: function (v) {
                        this.set_userIpAddress(v);
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
                Iface.prototype.apiDeserialize = function (r) {
                    this.isIncomplete = true;
                    if (("ID" in r)) {
                        this.m_id = r["ID"] == null ? null : "" + r["ID"];
                        this.n_id = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("MACAddress" in r)) {
                        this.m_macAddress = r["MACAddress"] == null ? null : "" + r["MACAddress"];
                        this.n_macAddress = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("IPAddress" in r)) {
                        this.m_ipAddress = r["IPAddress"] == null ? null : "" + r["IPAddress"];
                        this.n_ipAddress = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("UserIPAddress" in r)) {
                        this.m_userIpAddress = r["UserIPAddress"] == null ? null : "" + r["UserIPAddress"];
                        this.n_userIpAddress = false;
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
                Iface.prototype.apiSerialize = function (withClean) {
                    if (typeof withClean === "undefined") { withClean = false; }
                    var ret = {};
                    if (withClean || this.n_id) {
                        ret["ID"] = this.m_id;
                    }
                    ;
                    if (withClean || this.n_macAddress) {
                        ret["MACAddress"] = this.m_macAddress;
                    }
                    ;
                    if (withClean || this.n_ipAddress) {
                        ret["IPAddress"] = this.m_ipAddress;
                    }
                    ;
                    if (withClean || this.n_userIpAddress) {
                        ret["UserIPAddress"] = this.m_userIpAddress;
                    }
                    ;
                    return ret;
                };
                return Iface;
            })(saclient.cloud.resource.Resource);
            resource.Iface = Iface;
        })(cloud.resource || (cloud.resource = {}));
        var resource = cloud.resource;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
var saclient;
(function (saclient) {
    /**
    * @module saclient.cloud
    */
    (function (cloud) {
        /**
        * @class Util
        * @constructor
        */
        var Util = (function () {
            function Util() {
            }
            /**
            * @static
            * @method createClassInstance
            * @public
            * @param {string} classPath
            * @param {Array} args
            * @return {any}
            */
            Util.createClassInstance = function (classPath, args) {
                var ret = null;
                var p = classPath.split(".");
                if (p.shift() != "saclient")
                    return null;
                ;
                var proto = saclient;
                p.forEach(function (s) {
                     {
                        proto = proto[s];
                    }
                });
                var clazz = function () {
                    return proto.apply(this, args);
                };
                clazz.prototype = proto.prototype;
                return new clazz();
                if (ret == null)
                    throw "Could not create class instance of " + classPath;
                return ret;
            };

            /**
            * @static
            * @method str2date
            * @public
            * @param {string} s
            * @return {Date}
            */
            Util.str2date = function (s) {
                if (s == null)
                    return null;
                ;
                return new Date(Date.parse(s));
            };

            /**
            * @static
            * @method date2str
            * @public
            * @param {Date} d
            * @return {string}
            */
            Util.date2str = function (d) {
                if (d == null)
                    return null;
                ;
                return "" + d;
            };

            /**
            * @static
            * @method urlEncode
            * @public
            * @param {string} s
            * @return {string}
            */
            Util.urlEncode = function (s) {
                return encodeURIComponent(s);
            };

            /**
            * @static
            * @method castArray
            * @public
            * @param {U} clazz
            * @param {T[]} a
            * @return {U[]}
            */
            Util.castArray = function (a, clazz) {
                return (a);
            };
            return Util;
        })();
        cloud.Util = Util;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="../Client.ts" />
/// <reference path="../Util.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.resource
        */
        (function (resource) {
            var Util = saclient.cloud.Util;

            /**
            * サーバインスタンスのリソース情報へのアクセス機能や操作機能を備えたクラス。
            *
            * @class ServerInstance
            * @constructor
            * @extends Resource
            */
            var ServerInstance = (function (_super) {
                __extends(ServerInstance, _super);
                /**
                * @private
                * @constructor
                * @public
                * @param {Client} client
                * @param {any} r
                */
                function ServerInstance(client, r) {
                    _super.call(this, client);
                    /**
                    * @member saclient.cloud.resource.ServerInstance#n_status
                    * @type boolean
                    * @private
                    */
                    this.n_status = false;
                    /**
                    * @member saclient.cloud.resource.ServerInstance#n_beforeStatus
                    * @type boolean
                    * @private
                    */
                    this.n_beforeStatus = false;
                    /**
                    * @member saclient.cloud.resource.ServerInstance#n_statusChangedAt
                    * @type boolean
                    * @private
                    */
                    this.n_statusChangedAt = false;
                    this.apiDeserialize(r);
                }
                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_status
                * @private
                * @return {string}
                */
                ServerInstance.prototype.get_status = function () {
                    return this.m_status;
                };

                Object.defineProperty(ServerInstance.prototype, "status", {
                    /**
                    * @property status
                    * @type string
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_status();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_beforeStatus
                * @private
                * @return {string}
                */
                ServerInstance.prototype.get_beforeStatus = function () {
                    return this.m_beforeStatus;
                };

                Object.defineProperty(ServerInstance.prototype, "beforeStatus", {
                    /**
                    * @property beforeStatus
                    * @type string
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_beforeStatus();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_statusChangedAt
                * @private
                * @return {Date}
                */
                ServerInstance.prototype.get_statusChangedAt = function () {
                    return this.m_statusChangedAt;
                };

                Object.defineProperty(ServerInstance.prototype, "statusChangedAt", {
                    /**
                    * @property statusChangedAt
                    * @type Date
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_statusChangedAt();
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
                ServerInstance.prototype.apiDeserialize = function (r) {
                    this.isIncomplete = true;
                    if (("Status" in r)) {
                        this.m_status = r["Status"] == null ? null : "" + r["Status"];
                        this.n_status = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("BeforeStatus" in r)) {
                        this.m_beforeStatus = r["BeforeStatus"] == null ? null : "" + r["BeforeStatus"];
                        this.n_beforeStatus = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("StatusChangedAt" in r)) {
                        this.m_statusChangedAt = r["StatusChangedAt"] == null ? null : Util.str2date("" + r["StatusChangedAt"]);
                        this.n_statusChangedAt = false;
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
                ServerInstance.prototype.apiSerialize = function (withClean) {
                    if (typeof withClean === "undefined") { withClean = false; }
                    var ret = {};
                    if (withClean || this.n_status) {
                        ret["Status"] = this.m_status;
                    }
                    ;
                    if (withClean || this.n_beforeStatus) {
                        ret["BeforeStatus"] = this.m_beforeStatus;
                    }
                    ;
                    if (withClean || this.n_statusChangedAt) {
                        ret["StatusChangedAt"] = this.m_statusChangedAt == null ? null : Util.date2str(this.m_statusChangedAt);
                    }
                    ;
                    return ret;
                };
                return ServerInstance;
            })(saclient.cloud.resource.Resource);
            resource.ServerInstance = ServerInstance;
        })(cloud.resource || (cloud.resource = {}));
        var resource = cloud.resource;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="../Client.ts" />
/// <reference path="Icon.ts" />
/// <reference path="Iface.ts" />
/// <reference path="ServerPlan.ts" />
/// <reference path="ServerInstance.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.resource
        */
        (function (resource) {
            var Icon = saclient.cloud.resource.Icon;
            var Iface = saclient.cloud.resource.Iface;
            var ServerPlan = saclient.cloud.resource.ServerPlan;
            var ServerInstance = saclient.cloud.resource.ServerInstance;

            /**
            * サーバのリソース情報へのアクセス機能や操作機能を備えたクラス。
            *
            * @class Server
            * @constructor
            * @extends Resource
            */
            var Server = (function (_super) {
                __extends(Server, _super);
                /**
                * @private
                * @constructor
                * @public
                * @param {Client} client
                * @param {any} r
                */
                function Server(client, r) {
                    _super.call(this, client);
                    /**
                    * @member saclient.cloud.resource.Server#n_id
                    * @type boolean
                    * @private
                    */
                    this.n_id = false;
                    /**
                    * @member saclient.cloud.resource.Server#n_name
                    * @type boolean
                    * @private
                    */
                    this.n_name = false;
                    /**
                    * @member saclient.cloud.resource.Server#n_description
                    * @type boolean
                    * @private
                    */
                    this.n_description = false;
                    /**
                    * @member saclient.cloud.resource.Server#n_tags
                    * @type boolean
                    * @private
                    */
                    this.n_tags = false;
                    /**
                    * @member saclient.cloud.resource.Server#n_icon
                    * @type boolean
                    * @private
                    */
                    this.n_icon = false;
                    /**
                    * @member saclient.cloud.resource.Server#n_plan
                    * @type boolean
                    * @private
                    */
                    this.n_plan = false;
                    /**
                    * @member saclient.cloud.resource.Server#n_ifaces
                    * @type boolean
                    * @private
                    */
                    this.n_ifaces = false;
                    /**
                    * @member saclient.cloud.resource.Server#n_instance
                    * @type boolean
                    * @private
                    */
                    this.n_instance = false;
                    this.apiDeserialize(r);
                }
                /**
                * @private
                * @method _apiPath
                * @protected
                * @return {string}
                */
                Server.prototype._apiPath = function () {
                    return "/server";
                };

                /**
                * @private
                * @method _rootKey
                * @protected
                * @return {string}
                */
                Server.prototype._rootKey = function () {
                    return "Server";
                };

                /**
                * @private
                * @method _rootKeyM
                * @protected
                * @return {string}
                */
                Server.prototype._rootKeyM = function () {
                    return "Servers";
                };

                /**
                * @private
                * @method _id
                * @public
                * @return {string}
                */
                Server.prototype._id = function () {
                    return this.get_id();
                };

                /**
                * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新しいインスタンスを作成します。
                *
                * @method create
                * @chainable
                * @public
                * @return {Server} this
                */
                Server.prototype.create = function () {
                    return (this._create());
                };

                /**
                * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
                *
                * @method save
                * @chainable
                * @public
                * @return {Server} this
                */
                Server.prototype.save = function () {
                    return (this._save());
                };

                /**
                * 最新のリソース情報を再取得します。
                *
                * @method reload
                * @chainable
                * @public
                * @return {Server} this
                */
                Server.prototype.reload = function () {
                    return (this._reload());
                };

                /**
                * サーバを起動します。
                *
                * @method boot
                * @chainable
                * @public
                * @return {Server}
                */
                Server.prototype.boot = function () {
                    this._client.request("PUT", this._apiPath() + "/" + cloud.Util.urlEncode(this._id()) + "/power");
                    return this;
                };

                /**
                * サーバをシャットダウンします。
                *
                * @method shutdown
                * @chainable
                * @public
                * @return {Server}
                */
                Server.prototype.shutdown = function () {
                    this._client.request("DELETE", this._apiPath() + "/" + cloud.Util.urlEncode(this._id()) + "/power");
                    return this;
                };

                /**
                * サーバを強制停止します。
                *
                * @method stop
                * @chainable
                * @public
                * @return {Server}
                */
                Server.prototype.stop = function () {
                    this._client.request("DELETE", this._apiPath() + "/" + cloud.Util.urlEncode(this._id()) + "/power", { Force: true });
                    return this;
                };

                /**
                * サーバを強制再起動します。
                *
                * @method reboot
                * @chainable
                * @public
                * @return {Server}
                */
                Server.prototype.reboot = function () {
                    this._client.request("PUT", this._apiPath() + "/" + cloud.Util.urlEncode(this._id()) + "/reset");
                    return this;
                };

                /**
                * サーバのプランを変更します。
                *
                * @method changePlan
                * @chainable
                * @public
                * @param {ServerPlan} planTo
                * @return {Server}
                */
                Server.prototype.changePlan = function (planTo) {
                    var path = this._apiPath() + "/" + cloud.Util.urlEncode(this._id()) + "/to/plan/" + cloud.Util.urlEncode(planTo._id());
                    var result = this._client.request("PUT", path);
                    this.apiDeserialize(result[this._rootKey()]);
                    return this;
                };

                /**
                * サーバに接続されているディスクのリストを取得します。
                *
                * @method findDisks
                * @public
                * @return {Disk[]}
                */
                Server.prototype.findDisks = function () {
                    var model = cloud.Util.createClassInstance("saclient.cloud.model.Model_Disk", [this._client]);
                    return model.withServerId(this._id()).find();
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_id
                * @private
                * @return {string}
                */
                Server.prototype.get_id = function () {
                    return this.m_id;
                };

                Object.defineProperty(Server.prototype, "id", {
                    /**
                    * ID
                    *
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
                Server.prototype.get_name = function () {
                    return this.m_name;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_name
                * @private
                * @param {string} v
                * @return {string}
                */
                Server.prototype.set_name = function (v) {
                    this.m_name = v;
                    this.n_name = true;
                    return this.m_name;
                };

                Object.defineProperty(Server.prototype, "name", {
                    /**
                    * 名前
                    *
                    * @property name
                    * @type string
                    * @public
                    */
                    get: function () {
                        return this.get_name();
                    },
                    set: function (v) {
                        this.set_name(v);
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_description
                * @private
                * @return {string}
                */
                Server.prototype.get_description = function () {
                    return this.m_description;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_description
                * @private
                * @param {string} v
                * @return {string}
                */
                Server.prototype.set_description = function (v) {
                    this.m_description = v;
                    this.n_description = true;
                    return this.m_description;
                };

                Object.defineProperty(Server.prototype, "description", {
                    /**
                    * 説明
                    *
                    * @property description
                    * @type string
                    * @public
                    */
                    get: function () {
                        return this.get_description();
                    },
                    set: function (v) {
                        this.set_description(v);
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_tags
                * @private
                * @return {string[]}
                */
                Server.prototype.get_tags = function () {
                    return this.m_tags;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_tags
                * @private
                * @param {string[]} v
                * @return {string[]}
                */
                Server.prototype.set_tags = function (v) {
                    this.m_tags = v;
                    this.n_tags = true;
                    return this.m_tags;
                };

                Object.defineProperty(Server.prototype, "tags", {
                    /**
                    * タグ
                    *
                    * @property tags
                    * @type string[]
                    * @public
                    */
                    get: function () {
                        return this.get_tags();
                    },
                    set: function (v) {
                        this.set_tags(v);
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_icon
                * @private
                * @return {Icon}
                */
                Server.prototype.get_icon = function () {
                    return this.m_icon;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_icon
                * @private
                * @param {Icon} v
                * @return {Icon}
                */
                Server.prototype.set_icon = function (v) {
                    this.m_icon = v;
                    this.n_icon = true;
                    return this.m_icon;
                };

                Object.defineProperty(Server.prototype, "icon", {
                    /**
                    * アイコン
                    *
                    * @property icon
                    * @type Icon
                    * @public
                    */
                    get: function () {
                        return this.get_icon();
                    },
                    set: function (v) {
                        this.set_icon(v);
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_plan
                * @private
                * @return {ServerPlan}
                */
                Server.prototype.get_plan = function () {
                    return this.m_plan;
                };

                Object.defineProperty(Server.prototype, "plan", {
                    /**
                    * プラン
                    *
                    * @property plan
                    * @type ServerPlan
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_plan();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_ifaces
                * @private
                * @return {Iface[]}
                */
                Server.prototype.get_ifaces = function () {
                    return this.m_ifaces;
                };

                Object.defineProperty(Server.prototype, "ifaces", {
                    /**
                    * インタフェース
                    *
                    * @property ifaces
                    * @type Iface[]
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_ifaces();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_instance
                * @private
                * @return {ServerInstance}
                */
                Server.prototype.get_instance = function () {
                    return this.m_instance;
                };

                Object.defineProperty(Server.prototype, "instance", {
                    /**
                    * インスタンス情報
                    *
                    * @property instance
                    * @type ServerInstance
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_instance();
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
                Server.prototype.apiDeserialize = function (r) {
                    var _this = this;
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
                    if (("Description" in r)) {
                        this.m_description = r["Description"] == null ? null : "" + r["Description"];
                        this.n_description = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("Tags" in r)) {
                        if (r["Tags"] == null) {
                            this.m_tags = [];
                        } else {
                            this.m_tags = [];
                            (r["Tags"]).forEach(function (t) {
                                 {
                                    var v = null;
                                    v = t == null ? null : "" + t;
                                    _this.m_tags.push(v);
                                }
                            });
                        }
                        ;
                        this.n_tags = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("Icon" in r)) {
                        this.m_icon = r["Icon"] == null ? null : new Icon(this._client, r["Icon"]);
                        this.n_icon = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("ServerPlan" in r)) {
                        this.m_plan = r["ServerPlan"] == null ? null : new ServerPlan(this._client, r["ServerPlan"]);
                        this.n_plan = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("Interfaces" in r)) {
                        if (r["Interfaces"] == null) {
                            this.m_ifaces = [];
                        } else {
                            this.m_ifaces = [];
                            (r["Interfaces"]).forEach(function (t) {
                                 {
                                    var v = null;
                                    v = t == null ? null : new Iface(_this._client, t);
                                    _this.m_ifaces.push(v);
                                }
                            });
                        }
                        ;
                        this.n_ifaces = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("Instance" in r)) {
                        this.m_instance = r["Instance"] == null ? null : new ServerInstance(this._client, r["Instance"]);
                        this.n_instance = false;
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
                Server.prototype.apiSerialize = function (withClean) {
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
                    if (withClean || this.n_description) {
                        ret["Description"] = this.m_description;
                    }
                    ;
                    if (withClean || this.n_tags) {
                        ret["Tags"] = [];
                        this.m_tags.forEach(function (r) {
                             {
                                var v = null;
                                v = r;
                                ret["Tags"].push(v);
                            }
                        });
                    }
                    ;
                    if (withClean || this.n_icon) {
                        ret["Icon"] = withClean ? (this.m_icon == null ? null : this.m_icon.apiSerialize(withClean)) : (this.m_icon == null ? { ID: "0" } : this.m_icon.apiSerializeID());
                    }
                    ;
                    if (withClean || this.n_plan) {
                        ret["ServerPlan"] = withClean ? (this.m_plan == null ? null : this.m_plan.apiSerialize(withClean)) : (this.m_plan == null ? { ID: "0" } : this.m_plan.apiSerializeID());
                    }
                    ;
                    if (withClean || this.n_ifaces) {
                        ret["Interfaces"] = [];
                        this.m_ifaces.forEach(function (r) {
                             {
                                var v = null;
                                v = withClean ? (r == null ? null : r.apiSerialize(withClean)) : (r == null ? { ID: "0" } : r.apiSerializeID());
                                ret["Interfaces"].push(v);
                            }
                        });
                    }
                    ;
                    if (withClean || this.n_instance) {
                        ret["Instance"] = withClean ? (this.m_instance == null ? null : this.m_instance.apiSerialize(withClean)) : (this.m_instance == null ? { ID: "0" } : this.m_instance.apiSerializeID());
                    }
                    ;
                    return ret;
                };
                return Server;
            })(saclient.cloud.resource.Resource);
            resource.Server = Server;
        })(cloud.resource || (cloud.resource = {}));
        var resource = cloud.resource;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="Model.ts" />
/// <reference path="../resource/Server.ts" />
/// <reference path="../resource/ServerPlan.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.model
        */
        (function (model) {
            /**
            * サーバを検索するための機能を備えたクラス。
            *
            * @class Model_Server
            * @constructor
            * @extends Model
            */
            var Model_Server = (function (_super) {
                __extends(Model_Server, _super);
                function Model_Server() {
                    _super.apply(this, arguments);
                }
                /**
                * @private
                * @method _apiPath
                * @protected
                * @return {string}
                */
                Model_Server.prototype._apiPath = function () {
                    return "/server";
                };

                /**
                * @private
                * @method _rootKey
                * @protected
                * @return {string}
                */
                Model_Server.prototype._rootKey = function () {
                    return "Server";
                };

                /**
                * @private
                * @method _rootKeyM
                * @protected
                * @return {string}
                */
                Model_Server.prototype._rootKeyM = function () {
                    return "Servers";
                };

                /**
                * 次に取得するリストの開始オフセットを指定します。
                *
                * @method offset
                * @chainable
                * @public
                * @param {number} offset オフセット
                * @return {Model_Server} this
                */
                Model_Server.prototype.offset = function (offset) {
                    return (this._offset(offset));
                };

                /**
                * 次に取得するリストの上限レコード数を指定します。
                *
                * @method limit
                * @chainable
                * @public
                * @param {number} count 上限レコード数
                * @return {Model_Server} this
                */
                Model_Server.prototype.limit = function (count) {
                    return (this._limit(count));
                };

                /**
                * 次のリクエストのために設定されているステートをすべて破棄します。
                *
                * @method reset
                * @chainable
                * @public
                * @return {Model_Server} this
                */
                Model_Server.prototype.reset = function () {
                    return (this._reset());
                };

                /**
                * 指定したIDを持つ唯一のリソースを取得します。
                *
                * @method get
                * @public
                * @param {string} id
                * @return {Server} リソースオブジェクト
                */
                Model_Server.prototype.get = function (id) {
                    return (this._get(id));
                };

                /**
                * リソースの検索リクエストを実行し、結果をリストで取得します。
                *
                * @method find
                * @public
                * @return {Server[]} リソースオブジェクトの配列
                */
                Model_Server.prototype.find = function () {
                    return cloud.Util.castArray(this._find(), (null));
                };

                /**
                * 指定した文字列を名前に含むサーバに絞り込みます。
                *
                * @method withNameLike
                * @chainable
                * @public
                * @param {string} name
                * @return {Model_Server}
                */
                Model_Server.prototype.withNameLike = function (name) {
                    this._filterBy("Name", name);
                    return this;
                };

                /**
                * 指定したタグを持つサーバに絞り込みます。
                *
                * @method withTag
                * @chainable
                * @public
                * @param {string} tag
                * @return {Model_Server}
                */
                Model_Server.prototype.withTag = function (tag) {
                    this._filterBy("Tags.Name", tag, true);
                    return this;
                };

                /**
                * 指定したタグを持つサーバに絞り込みます。
                *
                * @method withPlan
                * @chainable
                * @public
                * @param {ServerPlan} plan
                * @return {Model_Server}
                */
                Model_Server.prototype.withPlan = function (plan) {
                    this._filterBy("ServerPlan.ID", plan._id(), true);
                    return this;
                };

                /**
                * インスタンスが指定した状態にあるサーバに絞り込みます。
                *
                * @method withInstanceStatus
                * @chainable
                * @public
                * @param {string} status
                * @return {Model_Server}
                */
                Model_Server.prototype.withInstanceStatus = function (status) {
                    this._filterBy("Instance.Status", status, true);
                    return this;
                };
                return Model_Server;
            })(saclient.cloud.model.Model);
            model.Model_Server = Model_Server;
        })(cloud.model || (cloud.model = {}));
        var model = cloud.model;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="../Client.ts" />
/// <reference path="Resource.ts" />
/// <reference path="DiskPlan.ts" />
/// <reference path="Server.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.resource
        */
        (function (resource) {
            var DiskPlan = saclient.cloud.resource.DiskPlan;
            var Server = saclient.cloud.resource.Server;

            /**
            * ディスクのリソース情報へのアクセス機能や操作機能を備えたクラス。
            *
            * @class Disk
            * @constructor
            * @extends Resource
            */
            var Disk = (function (_super) {
                __extends(Disk, _super);
                /**
                * @private
                * @constructor
                * @public
                * @param {Client} client
                * @param {any} r
                */
                function Disk(client, r) {
                    _super.call(this, client);
                    /**
                    * @member saclient.cloud.resource.Disk#n_id
                    * @type boolean
                    * @private
                    */
                    this.n_id = false;
                    /**
                    * @member saclient.cloud.resource.Disk#n_name
                    * @type boolean
                    * @private
                    */
                    this.n_name = false;
                    /**
                    * @member saclient.cloud.resource.Disk#n_description
                    * @type boolean
                    * @private
                    */
                    this.n_description = false;
                    /**
                    * @member saclient.cloud.resource.Disk#n_tags
                    * @type boolean
                    * @private
                    */
                    this.n_tags = false;
                    /**
                    * @member saclient.cloud.resource.Disk#n_icon
                    * @type boolean
                    * @private
                    */
                    this.n_icon = false;
                    /**
                    * @member saclient.cloud.resource.Disk#n_sizeMib
                    * @type boolean
                    * @private
                    */
                    this.n_sizeMib = false;
                    /**
                    * @member saclient.cloud.resource.Disk#n_serviceClass
                    * @type boolean
                    * @private
                    */
                    this.n_serviceClass = false;
                    /**
                    * @member saclient.cloud.resource.Disk#n_plan
                    * @type boolean
                    * @private
                    */
                    this.n_plan = false;
                    /**
                    * @member saclient.cloud.resource.Disk#n_server
                    * @type boolean
                    * @private
                    */
                    this.n_server = false;
                    this.apiDeserialize(r);
                }
                /**
                * @private
                * @method _apiPath
                * @protected
                * @return {string}
                */
                Disk.prototype._apiPath = function () {
                    return "/disk";
                };

                /**
                * @private
                * @method _rootKey
                * @protected
                * @return {string}
                */
                Disk.prototype._rootKey = function () {
                    return "Disk";
                };

                /**
                * @private
                * @method _rootKeyM
                * @protected
                * @return {string}
                */
                Disk.prototype._rootKeyM = function () {
                    return "Disks";
                };

                /**
                * @private
                * @method _id
                * @public
                * @return {string}
                */
                Disk.prototype._id = function () {
                    return this.get_id();
                };

                /**
                * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新しいインスタンスを作成します。
                *
                * @method create
                * @chainable
                * @public
                * @return {Disk} this
                */
                Disk.prototype.create = function () {
                    return (this._create());
                };

                /**
                * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
                *
                * @method save
                * @chainable
                * @public
                * @return {Disk} this
                */
                Disk.prototype.save = function () {
                    return (this._save());
                };

                /**
                * 最新のリソース情報を再取得します。
                *
                * @method reload
                * @chainable
                * @public
                * @return {Disk} this
                */
                Disk.prototype.reload = function () {
                    return (this._reload());
                };

                /**
                * @method get_sizeGib
                * @protected
                * @return {number}
                */
                Disk.prototype.get_sizeGib = function () {
                    return this.get_sizeMib() >> 10;
                };

                Object.defineProperty(Disk.prototype, "sizeGib", {
                    /**
                    * サイズ[GiB]
                    *
                    * @property sizeGib
                    * @type number
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_sizeGib();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * ディスクをサーバに取り付けます。
                *
                * @method attachTo
                * @chainable
                * @public
                * @param {string} serverId
                * @return {Disk}
                */
                Disk.prototype.attachTo = function (serverId) {
                    this._client.request("PUT", "/disk/" + this._id() + "/to/server/" + serverId);
                    return this;
                };

                /**
                * ディスクをサーバから取り外します。
                *
                * @method detach
                * @chainable
                * @public
                * @return {Disk}
                */
                Disk.prototype.detach = function () {
                    this._client.request("DELETE", "/disk/" + this._id() + "/to/server");
                    return this;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_id
                * @private
                * @return {string}
                */
                Disk.prototype.get_id = function () {
                    return this.m_id;
                };

                Object.defineProperty(Disk.prototype, "id", {
                    /**
                    * ID
                    *
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
                Disk.prototype.get_name = function () {
                    return this.m_name;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_name
                * @private
                * @param {string} v
                * @return {string}
                */
                Disk.prototype.set_name = function (v) {
                    this.m_name = v;
                    this.n_name = true;
                    return this.m_name;
                };

                Object.defineProperty(Disk.prototype, "name", {
                    /**
                    * 名前
                    *
                    * @property name
                    * @type string
                    * @public
                    */
                    get: function () {
                        return this.get_name();
                    },
                    set: function (v) {
                        this.set_name(v);
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_description
                * @private
                * @return {string}
                */
                Disk.prototype.get_description = function () {
                    return this.m_description;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_description
                * @private
                * @param {string} v
                * @return {string}
                */
                Disk.prototype.set_description = function (v) {
                    this.m_description = v;
                    this.n_description = true;
                    return this.m_description;
                };

                Object.defineProperty(Disk.prototype, "description", {
                    /**
                    * 説明
                    *
                    * @property description
                    * @type string
                    * @public
                    */
                    get: function () {
                        return this.get_description();
                    },
                    set: function (v) {
                        this.set_description(v);
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_tags
                * @private
                * @return {string[]}
                */
                Disk.prototype.get_tags = function () {
                    return this.m_tags;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_tags
                * @private
                * @param {string[]} v
                * @return {string[]}
                */
                Disk.prototype.set_tags = function (v) {
                    this.m_tags = v;
                    this.n_tags = true;
                    return this.m_tags;
                };

                Object.defineProperty(Disk.prototype, "tags", {
                    /**
                    * タグ
                    *
                    * @property tags
                    * @type string[]
                    * @public
                    */
                    get: function () {
                        return this.get_tags();
                    },
                    set: function (v) {
                        this.set_tags(v);
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_icon
                * @private
                * @return {Icon}
                */
                Disk.prototype.get_icon = function () {
                    return this.m_icon;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_icon
                * @private
                * @param {Icon} v
                * @return {Icon}
                */
                Disk.prototype.set_icon = function (v) {
                    this.m_icon = v;
                    this.n_icon = true;
                    return this.m_icon;
                };

                Object.defineProperty(Disk.prototype, "icon", {
                    /**
                    * アイコン
                    *
                    * @property icon
                    * @type Icon
                    * @public
                    */
                    get: function () {
                        return this.get_icon();
                    },
                    set: function (v) {
                        this.set_icon(v);
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_sizeMib
                * @private
                * @return {number}
                */
                Disk.prototype.get_sizeMib = function () {
                    return this.m_sizeMib;
                };

                Object.defineProperty(Disk.prototype, "sizeMib", {
                    /**
                    * サイズ[MiB]
                    *
                    * @property sizeMib
                    * @type number
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_sizeMib();
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
                Disk.prototype.get_serviceClass = function () {
                    return this.m_serviceClass;
                };

                Object.defineProperty(Disk.prototype, "serviceClass", {
                    /**
                    * サービスクラス
                    *
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
                * @method get_plan
                * @private
                * @return {DiskPlan}
                */
                Disk.prototype.get_plan = function () {
                    return this.m_plan;
                };

                Object.defineProperty(Disk.prototype, "plan", {
                    /**
                    * プラン
                    *
                    * @property plan
                    * @type DiskPlan
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_plan();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_server
                * @private
                * @return {Server}
                */
                Disk.prototype.get_server = function () {
                    return this.m_server;
                };

                Object.defineProperty(Disk.prototype, "server", {
                    /**
                    * 接続先のサーバ
                    *
                    * @property server
                    * @type Server
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_server();
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
                Disk.prototype.apiDeserialize = function (r) {
                    var _this = this;
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
                    if (("Description" in r)) {
                        this.m_description = r["Description"] == null ? null : "" + r["Description"];
                        this.n_description = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("Tags" in r)) {
                        if (r["Tags"] == null) {
                            this.m_tags = [];
                        } else {
                            this.m_tags = [];
                            (r["Tags"]).forEach(function (t) {
                                 {
                                    var v = null;
                                    v = t == null ? null : "" + t;
                                    _this.m_tags.push(v);
                                }
                            });
                        }
                        ;
                        this.n_tags = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("Icon" in r)) {
                        this.m_icon = r["Icon"] == null ? null : new resource.Icon(this._client, r["Icon"]);
                        this.n_icon = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("SizeMB" in r)) {
                        this.m_sizeMib = r["SizeMB"] == null ? null : parseInt("" + r["SizeMB"], 10);
                        this.n_sizeMib = false;
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
                    if (("Plan" in r)) {
                        this.m_plan = r["Plan"] == null ? null : new DiskPlan(this._client, r["Plan"]);
                        this.n_plan = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("Server" in r)) {
                        this.m_server = r["Server"] == null ? null : new Server(this._client, r["Server"]);
                        this.n_server = false;
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
                Disk.prototype.apiSerialize = function (withClean) {
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
                    if (withClean || this.n_description) {
                        ret["Description"] = this.m_description;
                    }
                    ;
                    if (withClean || this.n_tags) {
                        ret["Tags"] = [];
                        this.m_tags.forEach(function (r) {
                             {
                                var v = null;
                                v = r;
                                ret["Tags"].push(v);
                            }
                        });
                    }
                    ;
                    if (withClean || this.n_icon) {
                        ret["Icon"] = withClean ? (this.m_icon == null ? null : this.m_icon.apiSerialize(withClean)) : (this.m_icon == null ? { ID: "0" } : this.m_icon.apiSerializeID());
                    }
                    ;
                    if (withClean || this.n_sizeMib) {
                        ret["SizeMB"] = this.m_sizeMib;
                    }
                    ;
                    if (withClean || this.n_serviceClass) {
                        ret["ServiceClass"] = this.m_serviceClass;
                    }
                    ;
                    if (withClean || this.n_plan) {
                        ret["Plan"] = withClean ? (this.m_plan == null ? null : this.m_plan.apiSerialize(withClean)) : (this.m_plan == null ? { ID: "0" } : this.m_plan.apiSerializeID());
                    }
                    ;
                    if (withClean || this.n_server) {
                        ret["Server"] = withClean ? (this.m_server == null ? null : this.m_server.apiSerialize(withClean)) : (this.m_server == null ? { ID: "0" } : this.m_server.apiSerializeID());
                    }
                    ;
                    return ret;
                };
                return Disk;
            })(saclient.cloud.resource.Resource);
            resource.Disk = Disk;
        })(cloud.resource || (cloud.resource = {}));
        var resource = cloud.resource;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="Model.ts" />
/// <reference path="../resource/Disk.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.model
        */
        (function (model) {
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
                * 指定したIDを持つ唯一のリソースを取得します。
                *
                * @method get
                * @public
                * @param {string} id
                * @return {Disk} リソースオブジェクト
                */
                Model_Disk.prototype.get = function (id) {
                    return (this._get(id));
                };

                /**
                * リソースの検索リクエストを実行し、結果をリストで取得します。
                *
                * @method find
                * @public
                * @return {Disk[]} リソースオブジェクトの配列
                */
                Model_Disk.prototype.find = function () {
                    return cloud.Util.castArray(this._find(), (null));
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
            })(saclient.cloud.model.Model);
            model.Model_Disk = Model_Disk;
        })(cloud.model || (cloud.model = {}));
        var model = cloud.model;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="../Client.ts" />
/// <reference path="Icon.ts" />
/// <reference path="Iface.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.resource
        */
        (function (resource) {
            var Icon = saclient.cloud.resource.Icon;
            var Iface = saclient.cloud.resource.Iface;

            /**
            * アプライアンスのリソース情報へのアクセス機能や操作機能を備えたクラス。
            *
            * @class Appliance
            * @constructor
            * @extends Resource
            */
            var Appliance = (function (_super) {
                __extends(Appliance, _super);
                /**
                * @private
                * @constructor
                * @public
                * @param {Client} client
                * @param {any} r
                */
                function Appliance(client, r) {
                    _super.call(this, client);
                    /**
                    * @member saclient.cloud.resource.Appliance#n_id
                    * @type boolean
                    * @private
                    */
                    this.n_id = false;
                    /**
                    * @member saclient.cloud.resource.Appliance#n_clazz
                    * @type boolean
                    * @private
                    */
                    this.n_clazz = false;
                    /**
                    * @member saclient.cloud.resource.Appliance#n_name
                    * @type boolean
                    * @private
                    */
                    this.n_name = false;
                    /**
                    * @member saclient.cloud.resource.Appliance#n_description
                    * @type boolean
                    * @private
                    */
                    this.n_description = false;
                    /**
                    * @member saclient.cloud.resource.Appliance#n_tags
                    * @type boolean
                    * @private
                    */
                    this.n_tags = false;
                    /**
                    * @member saclient.cloud.resource.Appliance#n_icon
                    * @type boolean
                    * @private
                    */
                    this.n_icon = false;
                    /**
                    * @member saclient.cloud.resource.Appliance#n_ifaces
                    * @type boolean
                    * @private
                    */
                    this.n_ifaces = false;
                    /**
                    * @member saclient.cloud.resource.Appliance#n_serviceClass
                    * @type boolean
                    * @private
                    */
                    this.n_serviceClass = false;
                    this.apiDeserialize(r);
                }
                /**
                * @private
                * @method _apiPath
                * @protected
                * @return {string}
                */
                Appliance.prototype._apiPath = function () {
                    return "/appliance";
                };

                /**
                * @private
                * @method _rootKey
                * @protected
                * @return {string}
                */
                Appliance.prototype._rootKey = function () {
                    return "Appliance";
                };

                /**
                * @private
                * @method _rootKeyM
                * @protected
                * @return {string}
                */
                Appliance.prototype._rootKeyM = function () {
                    return "Appliances";
                };

                /**
                * @private
                * @method _id
                * @public
                * @return {string}
                */
                Appliance.prototype._id = function () {
                    return this.get_id();
                };

                /**
                * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新しいインスタンスを作成します。
                *
                * @method create
                * @chainable
                * @public
                * @return {Appliance} this
                */
                Appliance.prototype.create = function () {
                    return (this._create());
                };

                /**
                * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
                *
                * @method save
                * @chainable
                * @public
                * @return {Appliance} this
                */
                Appliance.prototype.save = function () {
                    return (this._save());
                };

                /**
                * 最新のリソース情報を再取得します。
                *
                * @method reload
                * @chainable
                * @public
                * @return {Appliance} this
                */
                Appliance.prototype.reload = function () {
                    return (this._reload());
                };

                /**
                * アプライアンスを起動します。
                *
                * @method boot
                * @chainable
                * @public
                * @return {Appliance}
                */
                Appliance.prototype.boot = function () {
                    this._client.request("PUT", this._apiPath() + "/" + cloud.Util.urlEncode(this._id()) + "/power");
                    return this;
                };

                /**
                * アプライアンスをシャットダウンします。
                *
                * @method shutdown
                * @chainable
                * @public
                * @return {Appliance}
                */
                Appliance.prototype.shutdown = function () {
                    this._client.request("DELETE", this._apiPath() + "/" + cloud.Util.urlEncode(this._id()) + "/power");
                    return this;
                };

                /**
                * アプライアンスを強制停止します。
                *
                * @method stop
                * @chainable
                * @public
                * @return {Appliance}
                */
                Appliance.prototype.stop = function () {
                    this._client.request("DELETE", this._apiPath() + "/" + cloud.Util.urlEncode(this._id()) + "/power", { Force: true });
                    return this;
                };

                /**
                * アプライアンスを強制再起動します。
                *
                * @method reboot
                * @chainable
                * @public
                * @return {Appliance}
                */
                Appliance.prototype.reboot = function () {
                    this._client.request("PUT", this._apiPath() + "/" + cloud.Util.urlEncode(this._id()) + "/reset");
                    return this;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_id
                * @private
                * @return {string}
                */
                Appliance.prototype.get_id = function () {
                    return this.m_id;
                };

                Object.defineProperty(Appliance.prototype, "id", {
                    /**
                    * ID
                    *
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
                * @method get_clazz
                * @private
                * @return {string}
                */
                Appliance.prototype.get_clazz = function () {
                    return this.m_clazz;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_clazz
                * @private
                * @param {string} v
                * @return {string}
                */
                Appliance.prototype.set_clazz = function (v) {
                    this.m_clazz = v;
                    this.n_clazz = true;
                    return this.m_clazz;
                };

                Object.defineProperty(Appliance.prototype, "clazz", {
                    /**
                    * クラス
                    *
                    * @property clazz
                    * @type string
                    * @public
                    */
                    get: function () {
                        return this.get_clazz();
                    },
                    set: function (v) {
                        this.set_clazz(v);
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
                Appliance.prototype.get_name = function () {
                    return this.m_name;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_name
                * @private
                * @param {string} v
                * @return {string}
                */
                Appliance.prototype.set_name = function (v) {
                    this.m_name = v;
                    this.n_name = true;
                    return this.m_name;
                };

                Object.defineProperty(Appliance.prototype, "name", {
                    /**
                    * 名前
                    *
                    * @property name
                    * @type string
                    * @public
                    */
                    get: function () {
                        return this.get_name();
                    },
                    set: function (v) {
                        this.set_name(v);
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_description
                * @private
                * @return {string}
                */
                Appliance.prototype.get_description = function () {
                    return this.m_description;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_description
                * @private
                * @param {string} v
                * @return {string}
                */
                Appliance.prototype.set_description = function (v) {
                    this.m_description = v;
                    this.n_description = true;
                    return this.m_description;
                };

                Object.defineProperty(Appliance.prototype, "description", {
                    /**
                    * 説明
                    *
                    * @property description
                    * @type string
                    * @public
                    */
                    get: function () {
                        return this.get_description();
                    },
                    set: function (v) {
                        this.set_description(v);
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_tags
                * @private
                * @return {string[]}
                */
                Appliance.prototype.get_tags = function () {
                    return this.m_tags;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_tags
                * @private
                * @param {string[]} v
                * @return {string[]}
                */
                Appliance.prototype.set_tags = function (v) {
                    this.m_tags = v;
                    this.n_tags = true;
                    return this.m_tags;
                };

                Object.defineProperty(Appliance.prototype, "tags", {
                    /**
                    * タグ
                    *
                    * @property tags
                    * @type string[]
                    * @public
                    */
                    get: function () {
                        return this.get_tags();
                    },
                    set: function (v) {
                        this.set_tags(v);
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_icon
                * @private
                * @return {Icon}
                */
                Appliance.prototype.get_icon = function () {
                    return this.m_icon;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_icon
                * @private
                * @param {Icon} v
                * @return {Icon}
                */
                Appliance.prototype.set_icon = function (v) {
                    this.m_icon = v;
                    this.n_icon = true;
                    return this.m_icon;
                };

                Object.defineProperty(Appliance.prototype, "icon", {
                    /**
                    * アイコン
                    *
                    * @property icon
                    * @type Icon
                    * @public
                    */
                    get: function () {
                        return this.get_icon();
                    },
                    set: function (v) {
                        this.set_icon(v);
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_ifaces
                * @private
                * @return {Iface[]}
                */
                Appliance.prototype.get_ifaces = function () {
                    return this.m_ifaces;
                };

                Object.defineProperty(Appliance.prototype, "ifaces", {
                    /**
                    * プラン
                    *
                    * @property ifaces
                    * @type Iface[]
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_ifaces();
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
                Appliance.prototype.get_serviceClass = function () {
                    return this.m_serviceClass;
                };

                Object.defineProperty(Appliance.prototype, "serviceClass", {
                    /**
                    * サービスクラス
                    *
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
                Appliance.prototype.apiDeserialize = function (r) {
                    var _this = this;
                    this.isIncomplete = true;
                    if (("ID" in r)) {
                        this.m_id = r["ID"] == null ? null : "" + r["ID"];
                        this.n_id = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("Class" in r)) {
                        this.m_clazz = r["Class"] == null ? null : "" + r["Class"];
                        this.n_clazz = false;
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
                    if (("Description" in r)) {
                        this.m_description = r["Description"] == null ? null : "" + r["Description"];
                        this.n_description = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("Tags" in r)) {
                        if (r["Tags"] == null) {
                            this.m_tags = [];
                        } else {
                            this.m_tags = [];
                            (r["Tags"]).forEach(function (t) {
                                 {
                                    var v = null;
                                    v = t == null ? null : "" + t;
                                    _this.m_tags.push(v);
                                }
                            });
                        }
                        ;
                        this.n_tags = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("Icon" in r)) {
                        this.m_icon = r["Icon"] == null ? null : new Icon(this._client, r["Icon"]);
                        this.n_icon = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("Interfaces" in r)) {
                        if (r["Interfaces"] == null) {
                            this.m_ifaces = [];
                        } else {
                            this.m_ifaces = [];
                            (r["Interfaces"]).forEach(function (t) {
                                 {
                                    var v = null;
                                    v = t == null ? null : new Iface(_this._client, t);
                                    _this.m_ifaces.push(v);
                                }
                            });
                        }
                        ;
                        this.n_ifaces = false;
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
                Appliance.prototype.apiSerialize = function (withClean) {
                    if (typeof withClean === "undefined") { withClean = false; }
                    var ret = {};
                    if (withClean || this.n_id) {
                        ret["ID"] = this.m_id;
                    }
                    ;
                    if (withClean || this.n_clazz) {
                        ret["Class"] = this.m_clazz;
                    }
                    ;
                    if (withClean || this.n_name) {
                        ret["Name"] = this.m_name;
                    }
                    ;
                    if (withClean || this.n_description) {
                        ret["Description"] = this.m_description;
                    }
                    ;
                    if (withClean || this.n_tags) {
                        ret["Tags"] = [];
                        this.m_tags.forEach(function (r) {
                             {
                                var v = null;
                                v = r;
                                ret["Tags"].push(v);
                            }
                        });
                    }
                    ;
                    if (withClean || this.n_icon) {
                        ret["Icon"] = withClean ? (this.m_icon == null ? null : this.m_icon.apiSerialize(withClean)) : (this.m_icon == null ? { ID: "0" } : this.m_icon.apiSerializeID());
                    }
                    ;
                    if (withClean || this.n_ifaces) {
                        ret["Interfaces"] = [];
                        this.m_ifaces.forEach(function (r) {
                             {
                                var v = null;
                                v = withClean ? (r == null ? null : r.apiSerialize(withClean)) : (r == null ? { ID: "0" } : r.apiSerializeID());
                                ret["Interfaces"].push(v);
                            }
                        });
                    }
                    ;
                    if (withClean || this.n_serviceClass) {
                        ret["ServiceClass"] = this.m_serviceClass;
                    }
                    ;
                    return ret;
                };
                return Appliance;
            })(saclient.cloud.resource.Resource);
            resource.Appliance = Appliance;
        })(cloud.resource || (cloud.resource = {}));
        var resource = cloud.resource;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="Model.ts" />
/// <reference path="../resource/Appliance.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.model
        */
        (function (model) {
            /**
            * アプライアンスを検索するための機能を備えたクラス。
            *
            * @class Model_Appliance
            * @constructor
            * @extends Model
            */
            var Model_Appliance = (function (_super) {
                __extends(Model_Appliance, _super);
                function Model_Appliance() {
                    _super.apply(this, arguments);
                }
                /**
                * @private
                * @method _apiPath
                * @protected
                * @return {string}
                */
                Model_Appliance.prototype._apiPath = function () {
                    return "/appliance";
                };

                /**
                * @private
                * @method _rootKey
                * @protected
                * @return {string}
                */
                Model_Appliance.prototype._rootKey = function () {
                    return "Appliance";
                };

                /**
                * @private
                * @method _rootKeyM
                * @protected
                * @return {string}
                */
                Model_Appliance.prototype._rootKeyM = function () {
                    return "Appliances";
                };

                /**
                * 次に取得するリストの開始オフセットを指定します。
                *
                * @method offset
                * @chainable
                * @public
                * @param {number} offset オフセット
                * @return {Model_Appliance} this
                */
                Model_Appliance.prototype.offset = function (offset) {
                    return (this._offset(offset));
                };

                /**
                * 次に取得するリストの上限レコード数を指定します。
                *
                * @method limit
                * @chainable
                * @public
                * @param {number} count 上限レコード数
                * @return {Model_Appliance} this
                */
                Model_Appliance.prototype.limit = function (count) {
                    return (this._limit(count));
                };

                /**
                * 次のリクエストのために設定されているステートをすべて破棄します。
                *
                * @method reset
                * @chainable
                * @public
                * @return {Model_Appliance} this
                */
                Model_Appliance.prototype.reset = function () {
                    return (this._reset());
                };

                /**
                * 指定したIDを持つ唯一のリソースを取得します。
                *
                * @method get
                * @public
                * @param {string} id
                * @return {Appliance} リソースオブジェクト
                */
                Model_Appliance.prototype.get = function (id) {
                    return (this._get(id));
                };

                /**
                * リソースの検索リクエストを実行し、結果をリストで取得します。
                *
                * @method find
                * @public
                * @return {Appliance[]} リソースオブジェクトの配列
                */
                Model_Appliance.prototype.find = function () {
                    return cloud.Util.castArray(this._find(), (null));
                };

                /**
                * 指定した文字列を名前に含むアプライアンスに絞り込みます。
                *
                * @method withNameLike
                * @chainable
                * @public
                * @param {string} name
                * @return {Model_Appliance}
                */
                Model_Appliance.prototype.withNameLike = function (name) {
                    this._filterBy("Name", name);
                    return this;
                };

                /**
                * 指定したタグを持つアプライアンスに絞り込みます。
                *
                * @method withTag
                * @chainable
                * @public
                * @param {string} tag
                * @return {Model_Appliance}
                */
                Model_Appliance.prototype.withTag = function (tag) {
                    this._filterBy("Tags.Name", tag, true);
                    return this;
                };
                return Model_Appliance;
            })(saclient.cloud.model.Model);
            model.Model_Appliance = Model_Appliance;
        })(cloud.model || (cloud.model = {}));
        var model = cloud.model;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="../Client.ts" />
/// <reference path="Resource.ts" />
/// <reference path="DiskPlan.ts" />
/// <reference path="Server.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.resource
        */
        (function (resource) {
            var DiskPlan = saclient.cloud.resource.DiskPlan;

            /**
            * アーカイブのリソース情報へのアクセス機能や操作機能を備えたクラス。
            *
            * @class Archive
            * @constructor
            * @extends Resource
            */
            var Archive = (function (_super) {
                __extends(Archive, _super);
                /**
                * @private
                * @constructor
                * @public
                * @param {Client} client
                * @param {any} r
                */
                function Archive(client, r) {
                    _super.call(this, client);
                    /**
                    * @member saclient.cloud.resource.Archive#n_id
                    * @type boolean
                    * @private
                    */
                    this.n_id = false;
                    /**
                    * @member saclient.cloud.resource.Archive#n_scope
                    * @type boolean
                    * @private
                    */
                    this.n_scope = false;
                    /**
                    * @member saclient.cloud.resource.Archive#n_name
                    * @type boolean
                    * @private
                    */
                    this.n_name = false;
                    /**
                    * @member saclient.cloud.resource.Archive#n_description
                    * @type boolean
                    * @private
                    */
                    this.n_description = false;
                    /**
                    * @member saclient.cloud.resource.Archive#n_tags
                    * @type boolean
                    * @private
                    */
                    this.n_tags = false;
                    /**
                    * @member saclient.cloud.resource.Archive#n_icon
                    * @type boolean
                    * @private
                    */
                    this.n_icon = false;
                    /**
                    * @member saclient.cloud.resource.Archive#n_sizeMib
                    * @type boolean
                    * @private
                    */
                    this.n_sizeMib = false;
                    /**
                    * @member saclient.cloud.resource.Archive#n_serviceClass
                    * @type boolean
                    * @private
                    */
                    this.n_serviceClass = false;
                    /**
                    * @member saclient.cloud.resource.Archive#n_plan
                    * @type boolean
                    * @private
                    */
                    this.n_plan = false;
                    this.apiDeserialize(r);
                }
                /**
                * @private
                * @method _apiPath
                * @protected
                * @return {string}
                */
                Archive.prototype._apiPath = function () {
                    return "/archive";
                };

                /**
                * @private
                * @method _rootKey
                * @protected
                * @return {string}
                */
                Archive.prototype._rootKey = function () {
                    return "Archive";
                };

                /**
                * @private
                * @method _rootKeyM
                * @protected
                * @return {string}
                */
                Archive.prototype._rootKeyM = function () {
                    return "Archives";
                };

                /**
                * @private
                * @method _id
                * @public
                * @return {string}
                */
                Archive.prototype._id = function () {
                    return this.get_id();
                };

                /**
                * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、新しいインスタンスを作成します。
                *
                * @method create
                * @chainable
                * @public
                * @return {Archive} this
                */
                Archive.prototype.create = function () {
                    return (this._create());
                };

                /**
                * このローカルオブジェクトに現在設定されているリソース情報をAPIに送信し、上書き保存します。
                *
                * @method save
                * @chainable
                * @public
                * @return {Archive} this
                */
                Archive.prototype.save = function () {
                    return (this._save());
                };

                /**
                * 最新のリソース情報を再取得します。
                *
                * @method reload
                * @chainable
                * @public
                * @return {Archive} this
                */
                Archive.prototype.reload = function () {
                    return (this._reload());
                };

                /**
                * @method get_sizeGib
                * @protected
                * @return {number}
                */
                Archive.prototype.get_sizeGib = function () {
                    return this.get_sizeMib() >> 10;
                };

                Object.defineProperty(Archive.prototype, "sizeGib", {
                    /**
                    * サイズ[GiB]
                    *
                    * @property sizeGib
                    * @type number
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_sizeGib();
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_id
                * @private
                * @return {string}
                */
                Archive.prototype.get_id = function () {
                    return this.m_id;
                };

                Object.defineProperty(Archive.prototype, "id", {
                    /**
                    * ID
                    *
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
                * @method get_scope
                * @private
                * @return {string}
                */
                Archive.prototype.get_scope = function () {
                    return this.m_scope;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_scope
                * @private
                * @param {string} v
                * @return {string}
                */
                Archive.prototype.set_scope = function (v) {
                    this.m_scope = v;
                    this.n_scope = true;
                    return this.m_scope;
                };

                Object.defineProperty(Archive.prototype, "scope", {
                    /**
                    * スコープ
                    *
                    * @property scope
                    * @type string
                    * @public
                    */
                    get: function () {
                        return this.get_scope();
                    },
                    set: function (v) {
                        this.set_scope(v);
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
                Archive.prototype.get_name = function () {
                    return this.m_name;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_name
                * @private
                * @param {string} v
                * @return {string}
                */
                Archive.prototype.set_name = function (v) {
                    this.m_name = v;
                    this.n_name = true;
                    return this.m_name;
                };

                Object.defineProperty(Archive.prototype, "name", {
                    /**
                    * 名前
                    *
                    * @property name
                    * @type string
                    * @public
                    */
                    get: function () {
                        return this.get_name();
                    },
                    set: function (v) {
                        this.set_name(v);
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_description
                * @private
                * @return {string}
                */
                Archive.prototype.get_description = function () {
                    return this.m_description;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_description
                * @private
                * @param {string} v
                * @return {string}
                */
                Archive.prototype.set_description = function (v) {
                    this.m_description = v;
                    this.n_description = true;
                    return this.m_description;
                };

                Object.defineProperty(Archive.prototype, "description", {
                    /**
                    * 説明
                    *
                    * @property description
                    * @type string
                    * @public
                    */
                    get: function () {
                        return this.get_description();
                    },
                    set: function (v) {
                        this.set_description(v);
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_tags
                * @private
                * @return {string[]}
                */
                Archive.prototype.get_tags = function () {
                    return this.m_tags;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_tags
                * @private
                * @param {string[]} v
                * @return {string[]}
                */
                Archive.prototype.set_tags = function (v) {
                    this.m_tags = v;
                    this.n_tags = true;
                    return this.m_tags;
                };

                Object.defineProperty(Archive.prototype, "tags", {
                    /**
                    * タグ
                    *
                    * @property tags
                    * @type string[]
                    * @public
                    */
                    get: function () {
                        return this.get_tags();
                    },
                    set: function (v) {
                        this.set_tags(v);
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_icon
                * @private
                * @return {Icon}
                */
                Archive.prototype.get_icon = function () {
                    return this.m_icon;
                };

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method set_icon
                * @private
                * @param {Icon} v
                * @return {Icon}
                */
                Archive.prototype.set_icon = function (v) {
                    this.m_icon = v;
                    this.n_icon = true;
                    return this.m_icon;
                };

                Object.defineProperty(Archive.prototype, "icon", {
                    /**
                    * アイコン
                    *
                    * @property icon
                    * @type Icon
                    * @public
                    */
                    get: function () {
                        return this.get_icon();
                    },
                    set: function (v) {
                        this.set_icon(v);
                    },
                    enumerable: true,
                    configurable: true
                });

                /**
                * (This method is generated in Translator_default#buildImpl)
                *
                * @method get_sizeMib
                * @private
                * @return {number}
                */
                Archive.prototype.get_sizeMib = function () {
                    return this.m_sizeMib;
                };

                Object.defineProperty(Archive.prototype, "sizeMib", {
                    /**
                    * サイズ[MiB]
                    *
                    * @property sizeMib
                    * @type number
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_sizeMib();
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
                Archive.prototype.get_serviceClass = function () {
                    return this.m_serviceClass;
                };

                Object.defineProperty(Archive.prototype, "serviceClass", {
                    /**
                    * サービスクラス
                    *
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
                * @method get_plan
                * @private
                * @return {DiskPlan}
                */
                Archive.prototype.get_plan = function () {
                    return this.m_plan;
                };

                Object.defineProperty(Archive.prototype, "plan", {
                    /**
                    * プラン
                    *
                    * @property plan
                    * @type DiskPlan
                    * @readOnly
                    * @public
                    */
                    get: function () {
                        return this.get_plan();
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
                Archive.prototype.apiDeserialize = function (r) {
                    var _this = this;
                    this.isIncomplete = true;
                    if (("ID" in r)) {
                        this.m_id = r["ID"] == null ? null : "" + r["ID"];
                        this.n_id = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("Scope" in r)) {
                        this.m_scope = r["Scope"] == null ? null : "" + r["Scope"];
                        this.n_scope = false;
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
                    if (("Description" in r)) {
                        this.m_description = r["Description"] == null ? null : "" + r["Description"];
                        this.n_description = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("Tags" in r)) {
                        if (r["Tags"] == null) {
                            this.m_tags = [];
                        } else {
                            this.m_tags = [];
                            (r["Tags"]).forEach(function (t) {
                                 {
                                    var v = null;
                                    v = t == null ? null : "" + t;
                                    _this.m_tags.push(v);
                                }
                            });
                        }
                        ;
                        this.n_tags = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("Icon" in r)) {
                        this.m_icon = r["Icon"] == null ? null : new resource.Icon(this._client, r["Icon"]);
                        this.n_icon = false;
                    } else {
                        this.isIncomplete = false;
                    }
                    ;
                    if (("SizeMB" in r)) {
                        this.m_sizeMib = r["SizeMB"] == null ? null : parseInt("" + r["SizeMB"], 10);
                        this.n_sizeMib = false;
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
                    if (("Plan" in r)) {
                        this.m_plan = r["Plan"] == null ? null : new DiskPlan(this._client, r["Plan"]);
                        this.n_plan = false;
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
                Archive.prototype.apiSerialize = function (withClean) {
                    if (typeof withClean === "undefined") { withClean = false; }
                    var ret = {};
                    if (withClean || this.n_id) {
                        ret["ID"] = this.m_id;
                    }
                    ;
                    if (withClean || this.n_scope) {
                        ret["Scope"] = this.m_scope;
                    }
                    ;
                    if (withClean || this.n_name) {
                        ret["Name"] = this.m_name;
                    }
                    ;
                    if (withClean || this.n_description) {
                        ret["Description"] = this.m_description;
                    }
                    ;
                    if (withClean || this.n_tags) {
                        ret["Tags"] = [];
                        this.m_tags.forEach(function (r) {
                             {
                                var v = null;
                                v = r;
                                ret["Tags"].push(v);
                            }
                        });
                    }
                    ;
                    if (withClean || this.n_icon) {
                        ret["Icon"] = withClean ? (this.m_icon == null ? null : this.m_icon.apiSerialize(withClean)) : (this.m_icon == null ? { ID: "0" } : this.m_icon.apiSerializeID());
                    }
                    ;
                    if (withClean || this.n_sizeMib) {
                        ret["SizeMB"] = this.m_sizeMib;
                    }
                    ;
                    if (withClean || this.n_serviceClass) {
                        ret["ServiceClass"] = this.m_serviceClass;
                    }
                    ;
                    if (withClean || this.n_plan) {
                        ret["Plan"] = withClean ? (this.m_plan == null ? null : this.m_plan.apiSerialize(withClean)) : (this.m_plan == null ? { ID: "0" } : this.m_plan.apiSerializeID());
                    }
                    ;
                    return ret;
                };
                return Archive;
            })(saclient.cloud.resource.Resource);
            resource.Archive = Archive;
        })(cloud.resource || (cloud.resource = {}));
        var resource = cloud.resource;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="Model.ts" />
/// <reference path="../resource/Archive.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.model
        */
        (function (model) {
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
                * @method get
                * @public
                * @param {string} id
                * @return {Archive} リソースオブジェクト
                */
                Model_Archive.prototype.get = function (id) {
                    return (this._get(id));
                };

                /**
                * リソースの検索リクエストを実行し、結果をリストで取得します。
                *
                * @method find
                * @public
                * @return {Archive[]} リソースオブジェクトの配列
                */
                Model_Archive.prototype.find = function () {
                    return cloud.Util.castArray(this._find(), (null));
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
            })(saclient.cloud.model.Model);
            model.Model_Archive = Model_Archive;
        })(cloud.model || (cloud.model = {}));
        var model = cloud.model;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="../Client.ts" />
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
/// <reference path="Model.ts" />
/// <reference path="../resource/IPv6Net.ts" />
var saclient;
(function (saclient) {
    (function (cloud) {
        /**
        * @module saclient.cloud.model
        */
        (function (model) {
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
                * @method get
                * @public
                * @param {string} id
                * @return {IPv6Net} リソースオブジェクト
                */
                Model_IPv6Net.prototype.get = function (id) {
                    return (this._get(id));
                };

                /**
                * リソースの検索リクエストを実行し、結果をリストで取得します。
                *
                * @method find
                * @public
                * @return {IPv6Net[]} リソースオブジェクトの配列
                */
                Model_IPv6Net.prototype.find = function () {
                    return cloud.Util.castArray(this._find(), (null));
                };
                return Model_IPv6Net;
            })(saclient.cloud.model.Model);
            model.Model_IPv6Net = Model_IPv6Net;
        })(cloud.model || (cloud.model = {}));
        var model = cloud.model;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
/// <reference path="Client.ts" />
/// <reference path="Product.ts" />
/// <reference path="model/Model_Icon.ts" />
/// <reference path="model/Model_Server.ts" />
/// <reference path="model/Model_Disk.ts" />
/// <reference path="model/Model_Appliance.ts" />
/// <reference path="model/Model_Archive.ts" />
/// <reference path="model/Model_IPv6Net.ts" />
var saclient;
(function (saclient) {
    /**
    * @module saclient.cloud
    */
    (function (cloud) {
        var Client = saclient.cloud.Client;
        var Product = saclient.cloud.Product;
        var Model_Icon = saclient.cloud.model.Model_Icon;
        var Model_Server = saclient.cloud.model.Model_Server;
        var Model_Disk = saclient.cloud.model.Model_Disk;
        var Model_Appliance = saclient.cloud.model.Model_Appliance;
        var Model_Archive = saclient.cloud.model.Model_Archive;
        var Model_IPv6Net = saclient.cloud.model.Model_IPv6Net;

        /**
        * さくらのクラウドAPIクライアントを利用する際、最初にアクセスすべきルートとなるクラス。
        *
        * @see API.authorize
        * @class API
        * @constructor
        */
        var API = (function () {
            /**
            * @constructor
            * @protected
            * @param {Client} client
            */
            function API(client) {
                this._client = client;
                this._product = new Product(client);
                this._icon = new Model_Icon(client);
                this._server = new Model_Server(client);
                this._disk = new Model_Disk(client);
                this._appliance = new Model_Appliance(client);
                this._archive = new Model_Archive(client);
                this._ipv6net = new Model_IPv6Net(client);
            }
            /**
            * @method get_client
            * @protected
            * @return {Client}
            */
            API.prototype.get_client = function () {
                return this._client;
            };

            Object.defineProperty(API.prototype, "client", {
                /**
                * @property client
                * @type Client
                * @readOnly
                * @public
                */
                get: function () {
                    return this.get_client();
                },
                enumerable: true,
                configurable: true
            });

            /**
            * @method get_product
            * @protected
            * @return {Product}
            */
            API.prototype.get_product = function () {
                return this._product;
            };

            Object.defineProperty(API.prototype, "product", {
                /**
                * @property product
                * @type Product
                * @readOnly
                * @public
                */
                get: function () {
                    return this.get_product();
                },
                enumerable: true,
                configurable: true
            });

            /**
            * @method get_icon
            * @protected
            * @return {Model_Icon}
            */
            API.prototype.get_icon = function () {
                return this._icon;
            };

            Object.defineProperty(API.prototype, "icon", {
                /**
                * @property icon
                * @type Model_Icon
                * @readOnly
                * @public
                */
                get: function () {
                    return this.get_icon();
                },
                enumerable: true,
                configurable: true
            });

            /**
            * @method get_server
            * @protected
            * @return {Model_Server}
            */
            API.prototype.get_server = function () {
                return this._server;
            };

            Object.defineProperty(API.prototype, "server", {
                /**
                * @property server
                * @type Model_Server
                * @readOnly
                * @public
                */
                get: function () {
                    return this.get_server();
                },
                enumerable: true,
                configurable: true
            });

            /**
            * @method get_disk
            * @protected
            * @return {Model_Disk}
            */
            API.prototype.get_disk = function () {
                return this._disk;
            };

            Object.defineProperty(API.prototype, "disk", {
                /**
                * @property disk
                * @type Model_Disk
                * @readOnly
                * @public
                */
                get: function () {
                    return this.get_disk();
                },
                enumerable: true,
                configurable: true
            });

            /**
            * @method get_appliance
            * @protected
            * @return {Model_Appliance}
            */
            API.prototype.get_appliance = function () {
                return this._appliance;
            };

            Object.defineProperty(API.prototype, "appliance", {
                /**
                * @property appliance
                * @type Model_Appliance
                * @readOnly
                * @public
                */
                get: function () {
                    return this.get_appliance();
                },
                enumerable: true,
                configurable: true
            });

            /**
            * @method get_archive
            * @protected
            * @return {Model_Archive}
            */
            API.prototype.get_archive = function () {
                return this._archive;
            };

            Object.defineProperty(API.prototype, "archive", {
                /**
                * @property archive
                * @type Model_Archive
                * @readOnly
                * @public
                */
                get: function () {
                    return this.get_archive();
                },
                enumerable: true,
                configurable: true
            });

            /**
            * @method get_ipv6net
            * @protected
            * @return {Model_IPv6Net}
            */
            API.prototype.get_ipv6net = function () {
                return this._ipv6net;
            };

            Object.defineProperty(API.prototype, "ipv6net", {
                /**
                * @property ipv6net
                * @type Model_IPv6Net
                * @readOnly
                * @public
                */
                get: function () {
                    return this.get_ipv6net();
                },
                enumerable: true,
                configurable: true
            });

            /**
            * 指定した認証情報を用いてアクセスを行うAPIクライアントを作成します。
            * 必要な認証情報は、コントロールパネル右上にあるアカウントのプルダウンから
            * 「設定」を選択し、「APIキー」のページにて作成できます。
            *
            * @static
            * @method authorize
            * @chainable
            * @public
            * @param {string} token ACCESS TOKEN
            * @param {string} secret ACCESS TOKEN SECRET
            * @return {API} APIクライアント
            */
            API.authorize = function (token, secret) {
                var c = new Client(token, secret);
                return new API(c);
            };

            /**
            * 認証情報を引き継ぎ、指定したゾーンへのアクセスを行うAPIクライアントを作成します。
            *
            * @method inZone
            * @chainable
            * @public
            * @param {string} name ゾーン名
            * @return {API} APIクライアント
            */
            API.prototype.inZone = function (name) {
                var ret = new API(this._client.cloneInstance());
                ret._client.setApiRootSuffix("zone/" + name);
                return ret;
            };
            return API;
        })();
        cloud.API = API;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
module.exports = saclient;
