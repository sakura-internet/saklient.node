'use strict';

/// <reference path="../../../node.d.ts" />

export = EServerInstanceStatus;

import Util = require('../../Util');

var _map_EServerInstanceStatus = {
	"down": 0,
	"cleaning": 5,
	"starting": 10,
	"alive": 49,
	"active": 89,
	"migrating": 90,
	"up": 100
};

/**
 * @class EServerInstanceStatus
 */
class EServerInstanceStatus {
	
	static down : string = "down";
	
	static cleaning : string = "cleaning";
	
	static starting : string = "starting";
	
	static alive : string = "alive";
	
	static active : string = "active";
	
	static migrating : string = "migrating";
	
	static up : string = "up";
	
	static compare(lhs:string, rhs:string) : number {
		var l = _map_EServerInstanceStatus[lhs];
		var r = _map_EServerInstanceStatus[rhs];
		if (l==null || r==null) return null;
		var ret = l - r;
		return 0 < ret ? 1 : (ret < 0 ? -1 : 0);
	}
	
}

