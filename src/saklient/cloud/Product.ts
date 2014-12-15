/// <reference path="../../node.d.ts" />

export = Product;

import Util = require('../Util');
import Model_ServerPlan = require('./models/Model_ServerPlan');
import Model_DiskPlan = require('./models/Model_DiskPlan');
import Model_RouterPlan = require('./models/Model_RouterPlan');
import Model_LicenseInfo = require('./models/Model_LicenseInfo');
import Client = require('./Client');

'use strict';

/**
 * 商品情報にアクセスするためのモデルを集めたクラス。
 * 
 * @module saklient.cloud.Product
 * @class Product
 * @constructor
 */
class Product {
	
	/**
	 * @private
	 * @member saklient.cloud.Product#_server
	 * @type Model_ServerPlan
	 * @protected
	 */
	_server : Model_ServerPlan;
	
	/**
	 * @method get_server
	 * @protected
	 * @private
	 * @return {Model_ServerPlan}
	 */
	get_server() : Model_ServerPlan {
		return this._server;
	}
	
	/**
	 * サーバプラン情報。
	 * 
	 * @property server
	 * @type Model_ServerPlan
	 * @readOnly
	 * @public
	 */
	get server() : Model_ServerPlan { return this.get_server(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.Product#_disk
	 * @type Model_DiskPlan
	 * @protected
	 */
	_disk : Model_DiskPlan;
	
	/**
	 * @method get_disk
	 * @protected
	 * @private
	 * @return {Model_DiskPlan}
	 */
	get_disk() : Model_DiskPlan {
		return this._disk;
	}
	
	/**
	 * ディスクプラン情報。
	 * 
	 * @property disk
	 * @type Model_DiskPlan
	 * @readOnly
	 * @public
	 */
	get disk() : Model_DiskPlan { return this.get_disk(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.Product#_router
	 * @type Model_RouterPlan
	 * @protected
	 */
	_router : Model_RouterPlan;
	
	/**
	 * @method get_router
	 * @protected
	 * @private
	 * @return {Model_RouterPlan}
	 */
	get_router() : Model_RouterPlan {
		return this._router;
	}
	
	/**
	 * ルータ帯域プラン情報。
	 * 
	 * @property router
	 * @type Model_RouterPlan
	 * @readOnly
	 * @public
	 */
	get router() : Model_RouterPlan { return this.get_router(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.Product#_license
	 * @type Model_LicenseInfo
	 * @protected
	 */
	_license : Model_LicenseInfo;
	
	/**
	 * @method get_license
	 * @protected
	 * @private
	 * @return {Model_LicenseInfo}
	 */
	get_license() : Model_LicenseInfo {
		return this._license;
	}
	
	/**
	 * ライセンス種別情報。
	 * 
	 * @property license
	 * @type Model_LicenseInfo
	 * @readOnly
	 * @public
	 */
	get license() : Model_LicenseInfo { return this.get_license(); }
	
	
	/**
	 * @private
	 * @constructor
	 * @param {Client} client
	 */
	constructor(client:Client) {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(client, "saklient.cloud.Client");
		this._server = new Model_ServerPlan(client);
		this._disk = new Model_DiskPlan(client);
		this._router = new Model_RouterPlan(client);
		this._license = new Model_LicenseInfo(client);
	}
	
}

