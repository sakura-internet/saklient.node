var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');

var Appliance = require('./Appliance');

'use strict';

/**
* ロードバランサの実体1つに対応し、属性の取得や操作を行うためのクラス。
*
* @module saklient.cloud.resources.LoadBalancer
* @class LoadBalancer
* @constructor
* @extends Appliance
*/
var LoadBalancer = (function (_super) {
    __extends(LoadBalancer, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    * @param {any} obj
    * @param {boolean} wrapped=false
    */
    function LoadBalancer(client, obj, wrapped) {
        if (typeof wrapped === "undefined") { wrapped = false; }
        _super.call(this, client, obj, wrapped);
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(client, "saklient.cloud.Client");
        Util.validateType(wrapped, "boolean");
    }
    return LoadBalancer;
})(Appliance);
module.exports = LoadBalancer;
