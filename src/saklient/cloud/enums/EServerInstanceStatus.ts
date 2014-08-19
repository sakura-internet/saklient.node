/// <reference path="../../../node.d.ts" />

export = EServerInstanceStatus;

import Util = require('../../Util');

var _map_EServerInstanceStatus = {
	"down": 0,
	"cleaning": 5,
	"up": 100
};

'use strict';

/**
 * サーバの起動状態を表す列挙子。
 * 
 * @class EServerInstanceStatus
 */
class EServerInstanceStatus {
	
	static down : string = "down";
	
	static cleaning : string = "cleaning";
	
	static up : string = "up";
	
	static compare(lhs:string, rhs:string) : number {
		var l = _map_EServerInstanceStatus[lhs];
		var r = _map_EServerInstanceStatus[rhs];
		if (l==null || r==null) return null;
		var ret = l - r;
		return 0 < ret ? 1 : (ret < 0 ? -1 : 0);
	}
	
}

