var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var Util = require('../../Util');

var Activity = require('./Activity');
var DiskActivitySample = require('./DiskActivitySample');

'use strict';

/**
* @module saklient.cloud.resources.DiskActivity
* @class DiskActivity
* @constructor
* @extends Activity
*/
var DiskActivity = (function (_super) {
    __extends(DiskActivity, _super);
    /**
    * @private
    * @constructor
    * @param {Client} client
    */
    function DiskActivity(client) {
        _super.call(this, client);
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(client, "saklient.cloud.Client");
    }
    /**
    * @method get_samples
    * @protected
    * @private
    * @return {DiskActivitySample[]}
    */
    DiskActivity.prototype.get_samples = function () {
        return this._samples;
    };

    Object.defineProperty(DiskActivity.prototype, "samples", {
        /**
        * サンプル列
        *
        * @property samples
        * @type DiskActivitySample[]
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
    DiskActivity.prototype._apiPathPrefix = function () {
        return "/disk";
    };

    /**
    * @private
    * @method _addSample
    * @protected
    * @param {string} atStr
    * @param {any} data
    * @return {void}
    */
    DiskActivity.prototype._addSample = function (atStr, data) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(atStr, "string");
        this._samples.push(new DiskActivitySample(atStr, data));
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
    * @return {DiskActivity}
    */
    DiskActivity.prototype.fetch = function (startDate, endDate) {
        if (typeof startDate === "undefined") { startDate = null; }
        if (typeof endDate === "undefined") { endDate = null; }
        Util.validateType(startDate, "Date");
        Util.validateType(endDate, "Date");
        this._samples = [];
        return (this._fetch(startDate, endDate));
    };
    return DiskActivity;
})(Activity);
module.exports = DiskActivity;
