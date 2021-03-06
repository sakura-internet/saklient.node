/// <reference path="../../../node.d.ts" />

export = EApplianceClass;

import Util = require('../../Util');

var _map_EApplianceClass = {
	"loadbalancer": 10,
	"vpcrouter": 20
};

'use strict';

/**
 * アプライアンスのクラスを表す列挙子。
 * 
 * @module saklient.cloud.enums.EApplianceClass
 * @class EApplianceClass
 */
class EApplianceClass {
	
	/**
	 * @static
	 * @property loadbalancer
	 * @default "loadbalancer"
	 * @type string
	 * @public
	 */
	static loadbalancer : string = "loadbalancer";
	
	/**
	 * @static
	 * @property vpcrouter
	 * @default "vpcrouter"
	 * @type string
	 * @public
	 */
	static vpcrouter : string = "vpcrouter";
	
	static compare(lhs:string, rhs:string) : number {
		var l = _map_EApplianceClass[lhs];
		var r = _map_EApplianceClass[rhs];
		if (l==null || r==null) return null;
		var ret = l - r;
		return 0 < ret ? 1 : (ret < 0 ? -1 : 0);
	}
	
}

