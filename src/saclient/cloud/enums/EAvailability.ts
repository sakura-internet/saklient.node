/// <reference path="../../../node.d.ts" />

export = EAvailability;

import Util = require('../../Util');

var _map_EAvailability = {
	"unavailable": 0,
	"creating": 10,
	"prepared": 20,
	"discontinued": 30,
	"visible": 49,
	"abnormal": 50,
	"recoverable": 59,
	"disabled": 60,
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
 * @class EAvailability
 */
class EAvailability {
	
	static unavailable : string = "unavailable";
	
	static creating : string = "creating";
	
	static prepared : string = "prepared";
	
	static discontinued : string = "discontinued";
	
	static visible : string = "visible";
	
	static abnormal : string = "abnormal";
	
	static recoverable : string = "recoverable";
	
	static disabled : string = "disabled";
	
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

