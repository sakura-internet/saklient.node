var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');

var Activity = require('./Activity');
var RouterActivitySample = require('./RouterActivitySample');

'use strict';

/**
* @module saklient.cloud.resources.RouterActivity
* @class RouterActivity
* @constructor
* @extends Activity
*/
var RouterActivity = (function (_super) {
    __extends(RouterActivity, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    */
    function RouterActivity(client) {
        _super.call(this, client);
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(client, "saklient.cloud.Client");
    }
    /**
    * @method get_samples
    * @protected
    * @private
    * @return {RouterActivitySample[]}
    */
    RouterActivity.prototype.get_samples = function () {
        return this._samples;
    };

    Object.defineProperty(RouterActivity.prototype, "samples", {
        /**
        * サンプル列
        *
        * @property samples
        * @type RouterActivitySample[]
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
    RouterActivity.prototype._apiPathPrefix = function () {
        return "/internet";
    };

    /**
    * @private
    * @method _addSample
    * @protected
    * @param {string} atStr
    * @param {any} data
    * @return {void}
    */
    RouterActivity.prototype._addSample = function (atStr, data) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(atStr, "string");
        this._samples.push(new RouterActivitySample(atStr, data));
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
    * @return {RouterActivity}
    */
    RouterActivity.prototype.fetch = function (startDate, endDate) {
        if (typeof startDate === "undefined") { startDate = null; }
        if (typeof endDate === "undefined") { endDate = null; }
        Util.validateType(startDate, "Date");
        Util.validateType(endDate, "Date");
        this._samples = [];
        return (this._fetch(startDate, endDate));
    };
    return RouterActivity;
})(Activity);
module.exports = RouterActivity;
