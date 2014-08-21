/// <reference path="../../../node.d.ts" />

export = EAvailability;

import Util = require('../../Util');

var _map_EAvailability = {
	"selectable": 69,
	"migrating": 70,
	"precreate": 71,
	"replicating": 72,
	"transfering": 73,
	"stopped": 75,
	"failed": 78,
	"charged": 79,
	"uploading": 80,
	"available": 100
};

'use strict';

/**
 * リソースの有効性を表す列挙子。
 * 
 * @module saklient.cloud.enums.EAvailability
 * @class EAvailability
 */
class EAvailability {
	
	/**
	 * @static
	 * @property selectable
	 * @default "selectable"
	 * @type string
	 * @public
	 */
	static selectable : string = "selectable";
	
	/**
	 * @static
	 * @property migrating
	 * @default "migrating"
	 * @type string
	 * @public
	 */
	static migrating : string = "migrating";
	
	/**
	 * @static
	 * @property precreate
	 * @default "precreate"
	 * @type string
	 * @public
	 */
	static precreate : string = "precreate";
	
	/**
	 * @static
	 * @property replicating
	 * @default "replicating"
	 * @type string
	 * @public
	 */
	static replicating : string = "replicating";
	
	/**
	 * @static
	 * @property transfering
	 * @default "transfering"
	 * @type string
	 * @public
	 */
	static transfering : string = "transfering";
	
	/**
	 * @static
	 * @property stopped
	 * @default "stopped"
	 * @type string
	 * @public
	 */
	static stopped : string = "stopped";
	
	/**
	 * @static
	 * @property failed
	 * @default "failed"
	 * @type string
	 * @public
	 */
	static failed : string = "failed";
	
	/**
	 * @static
	 * @property charged
	 * @default "charged"
	 * @type string
	 * @public
	 */
	static charged : string = "charged";
	
	/**
	 * @static
	 * @property uploading
	 * @default "uploading"
	 * @type string
	 * @public
	 */
	static uploading : string = "uploading";
	
	/**
	 * @static
	 * @property available
	 * @default "available"
	 * @type string
	 * @public
	 */
	static available : string = "available";
	
	static compare(lhs:string, rhs:string) : number {
		var l = _map_EAvailability[lhs];
		var r = _map_EAvailability[rhs];
		if (l==null || r==null) return null;
		var ret = l - r;
		return 0 < ret ? 1 : (ret < 0 ? -1 : 0);
	}
	
}

