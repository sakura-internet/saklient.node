/// <reference path="../../../node.d.ts" />

export = EScriptClass;

import Util = require('../../Util');

var _map_EScriptClass = {
	"shell": 200,
	"ansible": 300
};

'use strict';

/**
 * スクリプトのクラスを表す列挙子。
 * 
 * @module saklient.cloud.enums.EScriptClass
 * @class EScriptClass
 */
class EScriptClass {
	
	/**
	 * @static
	 * @property shell
	 * @default "shell"
	 * @type string
	 * @public
	 */
	static shell : string = "shell";
	
	/**
	 * @static
	 * @property ansible
	 * @default "ansible"
	 * @type string
	 * @public
	 */
	static ansible : string = "ansible";
	
	static compare(lhs:string, rhs:string) : number {
		var l = _map_EScriptClass[lhs];
		var r = _map_EScriptClass[rhs];
		if (l==null || r==null) return null;
		var ret = l - r;
		return 0 < ret ? 1 : (ret < 0 ? -1 : 0);
	}
	
}

