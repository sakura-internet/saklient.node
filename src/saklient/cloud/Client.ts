/// <reference path="../../node.d.ts" />
/// <reference path="../../node-fibers.d.ts" />

export = Client;

import ExceptionFactory = require('../errors/ExceptionFactory');

var httpSync:any = require('http-sync');

/**
 * @ignore
 */
class Client {
	
	config : {
		token?			: string;
		secret?			: string;
		authorization?	: string;
		apiRoot?		: string;
		apiRootSuffix?	: string;
	};
	
	constructor(token:string, secret:string) {
		this.config = {};
		this.setApiRoot('https://secure.sakura.ad.jp/cloud/');
		this.setApiRootSuffix(null);
		this.setAccessKey(token, secret);
	}
	
	cloneInstance() : Client {
		var c = new Client(this.config.token, this.config.secret);
		c.setApiRoot(this.config.apiRoot);
		c.setApiRootSuffix(this.config.apiRootSuffix);
		return c;
	}
	
	setApiRoot(url:string) {
		this.config.apiRoot = url;
	}
	
	setApiRootSuffix(suffix:string) {
		this.config.apiRootSuffix = suffix;
	}
	
	setAccessKey(token:string, secret:string) {
		this.config.token = token;
		this.config.secret = secret;
		this.config.authorization = 'Basic ' + (new Buffer(token+':'+secret, 'utf8')).toString('base64');
	}
	
	request(method:string, path:string, params?:any) : any {
		method = method.toUpperCase();
		path = path.replace(/^\/?/, '/');
		var json:string = params!=null ? JSON.stringify(params) : null;
		if (method=='GET') {
			if (json != null) path += '?' + encodeURIComponent(json);
			json = null;
		}
		if (!path.match(/^http/)) {
			var urlRoot = this.config.apiRoot;
			if (this.config.apiRootSuffix != null) {
				urlRoot += this.config.apiRootSuffix;
				urlRoot = urlRoot.replace(/\/?$/, '/');
			}
			path = urlRoot + 'api/cloud/1.1' + path;
		}
//			console.log("// APIリクエスト中: "+method+" "+path);
//			console.log(params);
		
		var pathSegs = path.match(/^(https?:)\/\/([^\/]+)(.+)$/);
		
		var opts = {
			method: method=='GET' ? 'GET' : 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': this.config.authorization,
				'User-Agent': 'saklient.node ver-0.0.4 rev-b2c9840359d57e5f1010a24599e87e52800f48b0',
				'X-Requested-With': 'XMLHttpRequest',
				'X-Sakura-No-Authenticate-Header': '1',
				'X-Sakura-HTTP-Method': method,
				'X-Sakura-Request-Format': 'json',
				'X-Sakura-Response-Format': 'json',
				'X-Sakura-Error-Level': 'warning'
			},
			protocol: pathSegs[1],
			port: pathSegs[1]=='https:' ? 443 : 80,
			host: pathSegs[2],
			path: pathSegs[3],
			body: json
		};
		opts.headers['Content-Length'] = json!=null ? json.length : 0;
		var req = httpSync.request(opts);
		var res = req.end();
		var ret:any = res.body ? JSON.parse(res.body.toString()) : null;
		if (!(res && 200<=res.statusCode && res.statusCode<300)) {
			throw ExceptionFactory.create(res.statusCode, ret ? ret.error_code : null, ret ? ret.error_msg : "");
		}
		return ret;
	}

}

