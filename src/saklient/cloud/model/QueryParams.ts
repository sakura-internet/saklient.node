/// <reference path="../../../node.d.ts" />

export = QueryParams;

import Util = require('../../Util');

'use strict';

/**
 * @private
 * @module saklient.cloud.model.QueryParams
 * @class QueryParams
 * @constructor
 */
class QueryParams {
	
	/**
	 * @member saklient.cloud.model.QueryParams#begin
	 * @type number
	 * @public
	 */
	begin : number;
	
	/**
	 * @member saklient.cloud.model.QueryParams#count
	 * @type number
	 * @public
	 */
	count : number;
	
	/**
	 * @member saklient.cloud.model.QueryParams#filter
	 * @type any
	 * @public
	 */
	filter : any;
	
	/**
	 * @member saklient.cloud.model.QueryParams#sort
	 * @type string[]
	 * @public
	 */
	sort : string[];
	
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

