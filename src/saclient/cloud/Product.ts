/// <reference path="../../node.d.ts" />

export = Product;

import Util = require('../Util');
import Model_ServerPlan = require('./model/Model_ServerPlan');
import Model_DiskPlan = require('./model/Model_DiskPlan');
import Model_RouterPlan = require('./model/Model_RouterPlan');
import Client = require('./Client');

/**
 * @class Product
 * @constructor
 */
class Product {
	
	/**
	 * @private
	 * @member saclient.cloud.Product#_server
	 * @type Model_ServerPlan
	 * @protected
	 */
	_server : Model_ServerPlan;
	
	/**
	 * @method get_server
	 * @protected
	 * @return {Model_ServerPlan}
	 */
	get_server() : Model_ServerPlan {
		return this._server;
	}
	
	/**
	 * @property server
	 * @type Model_ServerPlan
	 * @readOnly
	 * @public
	 */
	get server() : Model_ServerPlan { return this.get_server(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.Product#_disk
	 * @type Model_DiskPlan
	 * @protected
	 */
	_disk : Model_DiskPlan;
	
	/**
	 * @method get_disk
	 * @protected
	 * @return {Model_DiskPlan}
	 */
	get_disk() : Model_DiskPlan {
		return this._disk;
	}
	
	/**
	 * @property disk
	 * @type Model_DiskPlan
	 * @readOnly
	 * @public
	 */
	get disk() : Model_DiskPlan { return this.get_disk(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.Product#_router
	 * @type Model_RouterPlan
	 * @protected
	 */
	_router : Model_RouterPlan;
	
	/**
	 * @method get_router
	 * @protected
	 * @return {Model_RouterPlan}
	 */
	get_router() : Model_RouterPlan {
		return this._router;
	}
	
	/**
	 * @property router
	 * @type Model_RouterPlan
	 * @readOnly
	 * @public
	 */
	get router() : Model_RouterPlan { return this.get_router(); }
	
	
	/**
	 * @constructor
	 * @public
	 * @param {Client} client
	 */
	constructor(client:Client) {
		this._server = new Model_ServerPlan(client);
		this._disk = new Model_DiskPlan(client);
		this._router = new Model_RouterPlan(client);
	}
	
}

