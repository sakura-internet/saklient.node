/// <reference path="../../node.d.ts" />
/// <reference path="../../node-fibers.d.ts" />

export = Client;

import ExceptionFactory = require('../errors/ExceptionFactory');

var Fiber:any = require('fibers');
var https:any = require('https');

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
		var _fiber = Fiber.current;
		//
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
				'User-Agent': 'saklient.node ver-0.0.2.2 rev-4179ba7a290ed6a29a95a4c623506007fc444e84',
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
			path: pathSegs[3]
		};
		opts.headers['Content-Length'] = json!=null ? json.length : 0;
		var req = https.request(opts, (res)=>{
			var body:string = '';
			res.setEncoding('utf8');
			res.on('data', (chunk)=>{
				body += chunk;
			});
			res.on('end', ()=>{
				//console.log(body);
				var ret:any = body ? JSON.parse(body) : null;
				if (!(res && 200<=res.statusCode && res.statusCode<300)) {
					var ex = ExceptionFactory.create(res.statusCode, ret ? ret.error_code : null, ret ? ret.error_msg : "");
					var r = _fiber.throwInto(ex);
					_fiber = null;
					return r;
				}
				var r = _fiber.run(ret);
				_fiber = null;
				return r;
			});
		});
		req.on('error', (ex)=>{
			throw ExceptionFactory.create(null, null, ex.message);
		});
		if (json!=null) req.write(json);
		req.end();
		//
		return Fiber.yield();
	}

}

