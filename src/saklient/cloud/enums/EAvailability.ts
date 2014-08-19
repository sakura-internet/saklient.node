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
 * @class EAvailability
 */
class EAvailability {
	
	static selectable : string = "selectable";
	
	static migrating : string = "migrating";
	
	static precreate : string = "precreate";
	
	static replicating : string = "replicating";
	
	static transfering : string = "transfering";
	
	static stopped : string = "stopped";
	
	static failed : string = "failed";
	
	static charged : string = "charged";
	
	static uploading : string = "uploading";
	
	static available : string = "available";
	
	static compare(lhs:string, rhs:string) : number {
		var l = _map_EAvailability[lhs];
		var r = _map_EAvailability[rhs];
		if (l==null || r==null) return null;
		var ret = l - r;
		return 0 < ret ? 1 : (ret < 0 ? -1 : 0);
	}
	
}

