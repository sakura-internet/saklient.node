/// <reference path="../../../node.d.ts" />

export = EStorageClass;

import Util = require('../../Util');

var _map_EStorageClass = {
	"iscsi1204": 110
};

'use strict';

/**
 * ストレージのクラスを表す列挙子。
 * 
 * @class EStorageClass
 */
class EStorageClass {
	
	static iscsi1204 : string = "iscsi1204";
	
	static compare(lhs:string, rhs:string) : number {
		var l = _map_EStorageClass[lhs];
		var r = _map_EStorageClass[rhs];
		if (l==null || r==null) return null;
		var ret = l - r;
		return 0 < ret ? 1 : (ret < 0 ? -1 : 0);
	}
	
}

