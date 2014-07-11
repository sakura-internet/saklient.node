/// <reference path="../../../node.d.ts" />

export = EDiskConnection;

import Util = require('../Util');

var _map = {
	"ide": 100,
	"virtio": 300
};

/**
 * @class EDiskConnection
 */
class EDiskConnection {
	
	static ide : string = "ide";
	
	static virtio : string = "virtio";
	
	static compare(lhs:string, rhs:string) : number {
		var l = _map[lhs];
		var r = _map[rhs];
		if (l==null || r==null) return null;
		var ret = l - r;
		return 0 < ret ? 1 : (ret < 0 ? -1 : 0);
	}
	
}

