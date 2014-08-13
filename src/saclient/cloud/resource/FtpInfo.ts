/// <reference path="../../../node.d.ts" />

export = FtpInfo;

import Util = require('../../Util');

'use strict';

/**
 * FTPサーバのアカウント情報
 * 
 * @class FtpInfo
 * @constructor
 */
class FtpInfo {
	
	/**
	 * @private
	 * @member saclient.cloud.resource.FtpInfo#_hostName
	 * @type string
	 * @protected
	 */
	_hostName : string;
	
	/**
	 * @method get_hostName
	 * @public
	 * @return {string}
	 */
	get_hostName() : string {
		return this._hostName;
	}
	
	/**
	 * ホスト名
	 * 
	 * @property hostName
	 * @type string
	 * @readOnly
	 * @public
	 */
	get hostName() : string { return this.get_hostName(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.resource.FtpInfo#_user
	 * @type string
	 * @protected
	 */
	_user : string;
	
	/**
	 * @method get_user
	 * @public
	 * @return {string}
	 */
	get_user() : string {
		return this._user;
	}
	
	/**
	 * ユーザ名
	 * 
	 * @property user
	 * @type string
	 * @readOnly
	 * @public
	 */
	get user() : string { return this.get_user(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.resource.FtpInfo#_password
	 * @type string
	 * @protected
	 */
	_password : string;
	
	/**
	 * @method get_password
	 * @public
	 * @return {string}
	 */
	get_password() : string {
		return this._password;
	}
	
	/**
	 * パスワード
	 * 
	 * @property password
	 * @type string
	 * @readOnly
	 * @public
	 */
	get password() : string { return this.get_password(); }
	
	
	/**
	 * @private
	 * @constructor
	 * @public
	 * @param {any} obj
	 */
	constructor(obj:any) {
		Util.validateArgCount(arguments.length, 1);
		this._hostName = obj["HostName"];
		this._user = obj["User"];
		this._password = obj["Password"];
	}
	
}

