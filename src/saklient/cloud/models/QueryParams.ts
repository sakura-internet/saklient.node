/// <reference path="../../../node.d.ts" />

export = QueryParams;

import Util = require('../../Util');

'use strict';

/**
 * @private
 * @module saklient.cloud.models.QueryParams
 * @class QueryParams
 * @constructor
 */
class QueryParams {
	
	/**
	 * @member saklient.cloud.models.QueryParams#begin
	 * @type number
	 * @public
	 */
	begin : number;
	
	/**
	 * @member saklient.cloud.models.QueryParams#count
	 * @type number
	 * @public
	 */
	count : number;
	
	/**
	 * @member saklient.cloud.models.QueryParams#filter
	 * @type any
	 * @public
	 */
	filter : any;
	
	/**
	 * @member saklient.cloud.models.QueryParams#sort
	 * @type any[]
	 * @public
	 */
	sort : any[];
	
	/**
	 * @constructor
	 * @public
	 */
	constructor() {
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
	build() : any {
		return {
			From: this.begin,
			Count: this.count,
			Filter: this.filter,
			Sort: this.sort
		};
	}
	
}

