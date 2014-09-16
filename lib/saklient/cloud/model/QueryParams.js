
'use strict';

/**
* @private
* @module saklient.cloud.model.QueryParams
* @class QueryParams
* @constructor
*/
var QueryParams = (function () {
    /**
    * @constructor
    * @public
    */
    function QueryParams() {
        this.begin = 0;
        this.count = 0;
        this.filter = {};
        this.sort = [];
    }
    /**
    * @method build
    * @public
    * @return {any}
    */
    QueryParams.prototype.build = function () {
        return {
            From: this.begin,
            Count: this.count,
            Filter: this.filter,
            Sort: this.sort
        };
    };
    return QueryParams;
})();
module.exports = QueryParams;
