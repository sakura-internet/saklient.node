/// <reference path="../../../node.d.ts" />

export = EScope;

import Util = require('../Util');

var _map_EScope = {
	"user": 100,
	"shared": 200
};

/**
 * @class EScope
 */
class EScope {
	
	static user : string = "user";
	
	static shared : string = "shared";
	
	static compare(lhs:string, rhs:string) : number {
		var l = _map_EScope[lhs];
		var r = _map_EScope[rhs];
		if (l==null || r==null) return null;
		var ret = l - r;
		return 0 < ret ? 1 : (ret < 0 ? -1 : 0);
	}
	
}
