/// <reference path="../../../node.d.ts" />

export = EDiskConnection;

import Util = require('../../Util');

var _map_EDiskConnection = {
	"ide": 100,
	"virtio": 300
};

'use strict';

/**
 * ディスクの接続方式を表す列挙子。
 * 
 * @class EDiskConnection
 */
class EDiskConnection {
	
	static ide : string = "ide";
	
	static virtio : string = "virtio";
	
	static compare(lhs:string, rhs:string) : number {
		var l = _map_EDiskConnection[lhs];
		var r = _map_EDiskConnection[rhs];
		if (l==null || r==null) return null;
		var ret = l - r;
		return 0 < ret ? 1 : (ret < 0 ? -1 : 0);
	}
	
}

