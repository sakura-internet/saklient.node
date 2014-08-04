/// <reference path="../../node.d.ts" />

export = HttpServiceUnavailableException;

import Util = require('../Util');
import HttpException = require('./HttpException');

/**
 * サービスが利用できません。対象は利用できない、またはサーバが混雑しています。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。
 * 
 * @class HttpServiceUnavailableException
 * @constructor
 * @extends HttpException
 */
class HttpServiceUnavailableException extends HttpException {
	
	/**
	 * @static
	 * @member saclient.errors.HttpServiceUnavailableException#defaultMessage
	 * @type string
	 * @public
	 */
	static defaultMessage : string = "サービスが利用できません。対象は利用できない、またはサーバが混雑しています。このエラーが繰り返し発生する場合は、メンテナンス情報、サポートサイトをご確認ください。";
	
}

