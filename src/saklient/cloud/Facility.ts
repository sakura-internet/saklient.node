/// <reference path="../../node.d.ts" />

export = Facility;

import Util = require('../Util');
import Model_Region = require('./models/Model_Region');
import Client = require('./Client');

'use strict';

/**
 * 設備情報にアクセスするためのモデルを集めたクラス。
 * 
 * @module saklient.cloud.Facility
 * @class Facility
 * @constructor
 */
class Facility {
	
	/**
	 * @private
	 * @member saklient.cloud.Facility#_region
	 * @type Model_Region
	 * @protected
	 */
	_region : Model_Region;
	
	/**
	 * @method get_region
	 * @protected
	 * @private
	 * @return {Model_Region}
	 */
	get_region() : Model_Region {
		return this._region;
	}
	
	/**
	 * リージョン情報。
	 * 
	 * @property region
	 * @type Model_Region
	 * @readOnly
	 * @public
	 */
	get region() : Model_Region { return this.get_region(); }
	
	
	/**
	 * @private
	 * @constructor
	 * @param {Client} client
	 */
	constructor(client:Client) {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(client, "saklient.cloud.Client");
		this._region = new Model_Region(client);
	}
	
}

