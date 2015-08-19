
var Util = require('../../Util');

'use strict';

/**
* @module saklient.cloud.resources.Activity
* @class Activity
* @constructor
*/
var Activity = (function () {
    /**
    * @private
    * @constructor
    * @param {Client} client
    */
    function Activity(client) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(client, "saklient.cloud.Client");
        this._client = client;
    }
    /**
    * @private
    * @method _apiPathPrefix
    * @protected
    * @return {string}
    */
    Activity.prototype._apiPathPrefix = function () {
        return null;
    };

    /**
    * @private
    * @method _apiPathSuffix
    * @protected
    * @return {string}
    */
    Activity.prototype._apiPathSuffix = function () {
        return "/monitor";
    };

    /**
    * @private
    * @method _addSample
    * @protected
    * @param {string} atStr
    * @param {any} data
    * @return {void}
    */
    Activity.prototype._addSample = function (atStr, data) {
        Util.validateArgCount(arguments.length, 2);
        Util.validateType(atStr, "string");
    };

    /**
    * @private
    * @method setSourceId
    * @param {string} id
    * @return {void}
    */
    Activity.prototype.setSourceId = function (id) {
        Util.validateArgCount(arguments.length, 1);
        Util.validateType(id, "string");
        this._sourceId = id;
    };

    /**
    * 現在の最新のアクティビティ情報を取得し、samplesに格納します。
    *
    *  	 * @return this
    *
    * @private
    * @method _fetch
    * @chainable
    * @param {Date} startDate=null
    * @param {Date} endDate=null
    * @return {Activity}
    */
    Activity.prototype._fetch = function (startDate, endDate) {
        if (typeof startDate === "undefined") { startDate = null; }
        if (typeof endDate === "undefined") { endDate = null; }
        Util.validateType(startDate, "Date");
        Util.validateType(endDate, "Date");
        var query = {};
        if (startDate != null) {
            query["Start"] = Util.date2str(startDate);
        }
        ;
        if (endDate != null) {
            query["End"] = Util.date2str(endDate);
        }
        ;
        var path = this._apiPathPrefix() + "/" + Util.urlEncode(this._sourceId) + this._apiPathSuffix();
        var data = this._client.request("GET", path);
        if (data == null) {
            return null;
        }
        ;
        data = data["Data"];
        if (data == null) {
            return null;
        }
        ;
        var dates = Object.keys(data);
        dates = Util.sortArray(dates);
        for (var __it1 = 0; __it1 < dates.length; __it1++) {
            var date = dates[__it1];
            this._addSample(date, data[date]);
        }
        ;
        return this;
    };
    return Activity;
})();
module.exports = Activity;
