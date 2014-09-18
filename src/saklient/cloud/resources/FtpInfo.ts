/// <reference path="../../../node.d.ts" />

export = FtpInfo;

import Util = require('../../Util');

'use strict';

/**
 * FTPサーバのアカウント情報。
 * 
 * @module saklient.cloud.resources.FtpInfo
 * @class FtpInfo
 * @constructor
 */
class FtpInfo {
	
	/**
	 * @private
	 * @member saklient.cloud.resources.FtpInfo#_hostName
	 * @type string
	 * @protected
	 */
	_hostName : string;
	
	/**
	 * @method get_hostName
	 * @private
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
	 * @member saklient.cloud.resources.FtpInfo#_user
	 * @type string
	 * @protected
	 */
	_user : string;
	
	/**
	 * @method get_user
	 * @private
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
	 * @member saklient.cloud.resources.FtpInfo#_password
	 * @type string
	 * @protected
	 */
	_password : string;
	
	/**
	 * @method get_password
	 * @private
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
	 * @param {any} obj
	 */
	constructor(obj:any) {
		Util.validateArgCount(arguments.length, 1);
		this._hostName = (<string><any>(obj["HostName"]));
		this._user = (<string><any>(obj["User"]));
		this._password = (<string><any>(obj["Password"]));
	}
	
}

