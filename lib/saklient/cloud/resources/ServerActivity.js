var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');

var Activity = require('./Activity');
var ServerActivitySample = require('./ServerActivitySample');

'use strict';

/**
* @module saklient.cloud.resources.ServerActivity
* @class ServerActivity
* @constructor
* @extends Activity
*/
var ServerActivity = (function (_super) {
    __extends(ServerActivity, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    */
    function ServerActivity(client) {
        _super.call(this, client);
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(client, "saklient.cloud.Client");
    }
    /**
    * @method get_samples
    * @protected
    * @private
    * @return {ServerActivitySample[]}
    */
    ServerActivity.prototype.get_samples = function () {
        return this._samples;
    };

    Object.defineProperty(ServerActivity.prototype, "samples", {
        /**
        * サンプル列
        *
        * @property samples
        * @type ServerActivitySample[]
        * @readOnly
        * @public
        */
        get: function () {
            return this.get_samples();
        },
        enumerable: true,
        configurable: true
    });

    /**
    * @private
    * @method _apiPathPrefix
    * @protected
    * @return {string}
    */
    ServerActivity.prototype._apiPathPrefix = function () {
        return "/server";
    };

    /**
    * @private
    * @method _addSample
    * @protected
    * @param {string} atStr
    * @param {any} data
    * @return {void}
    */
    ServerActivity.prototype._addSample = function (atStr, data) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(atStr, "string");
        this._samples.push(new ServerActivitySample(atStr, data));
    };

    /**
    * 現在の最新のアクティビティ情報を取得し、samplesに格納します。
    *
    *  	 * @return this
    *
    * @method fetch
    * @chainable
    * @public
    * @param {Date} startDate=null
    * @param {Date} endDate=null
    * @return {ServerActivity}
    */
    ServerActivity.prototype.fetch = function (startDate, endDate) {
        if (typeof startDate === "undefined") { startDate = null; }
        if (typeof endDate === "undefined") { endDate = null; }
        Util.validateType(startDate, "Date");
        Util.validateType(endDate, "Date");
        this._samples = [];
        return (this._fetch(startDate, endDate));
    };
    return ServerActivity;
})(Activity);
module.exports = ServerActivity;
