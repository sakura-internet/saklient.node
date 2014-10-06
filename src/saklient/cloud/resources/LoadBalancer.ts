/// <reference path="../../../node.d.ts" />

export = LoadBalancer;

import Util = require('../../Util');
import SaklientException = require('../../errors/SaklientException');
import Client = require('../Client');
import Appliance = require('./Appliance');

'use strict';

/**
 * ロードバランサの実体1つに対応し、属性の取得や操作を行うためのクラス。
 * 
 * @module saklient.cloud.resources.LoadBalancer
 * @class LoadBalancer
 * @constructor
 * @extends Appliance
 */
class LoadBalancer extends Appliance {
	
	/**
	 * @private
	 * @constructor
	 * @param {Client} client
	 * @param {any} obj
	 * @param {boolean} wrapped=false
	 */
	constructor(client:Client, obj:any, wrapped:boolean=false) {
		super(client, obj, wrapped);
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(client, "saklient.cloud.Client");
		Util.validateType(wrapped, "boolean");
	}
	
}

