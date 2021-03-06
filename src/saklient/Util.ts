/// <reference path="../node.d.ts" />

export = Util;

import SaklientException = require('./errors/SaklientException');

var execSync = require('child_process').execSync;
var saklient = require('../saklient');

/**
 * @ignore
 */
class Util {
	
	/**
	 * @static
	 * @method existsPath
	 * @public
	 * @param {any} obj
	 * @param {string} path
	 * @return {any}
	 */
	static existsPath(obj:any, path:string) : any {
		var aPath:string[] = path.split(".");
		for (var __it1:number=0; __it1<aPath.length; __it1++) {
			var seg = aPath[__it1];
			if (obj == null) {
				return false;
			};
			if (!(obj instanceof Object)) {
				return false;
			};
			if (seg == "") {
				continue;
			};
			if (!(seg in obj)) {
				return false;
			};
			obj = obj[seg];
		};
		return true;
	}
	
	/**
	 * @static
	 * @method getByPath
	 * @public
	 * @param {any} obj
	 * @param {string} path
	 * @return {any}
	 */
	static getByPath(obj:any, path:string) : any {
		var aPath:string[] = path.split(".");
		for (var __it1:number=0; __it1<aPath.length; __it1++) {
			var seg = aPath[__it1];
			if (obj == null) {
				return null;
			};
			if (!(obj instanceof Object)) {
				return null;
			};
			if (seg == "") {
				continue;
			};
			if (!(seg in obj)) {
				return null;
			};
			obj = obj[seg];
		};
		return obj;
	}
	
	static getByPathAny(objects:any[], pathes:string[]) : any {
		for (var i=0; i<objects.length; i++) {
			var obj:any = objects[i];
			for (var j=0; j<pathes.length; j++) {
				var path:string = pathes[j];
				var ret:any = Util.getByPath(obj, path);
				if (ret != null) return ret;
			}
		}
		return null;
	}
	
	/**
	 * @todo array support
	 * @todo overwriting
	 * @todo writing into children of non-object
	 * @static
	 * @method setByPath
	 * @public
	 * @param {any} obj
	 * @param {any} value
	 * @param {string} path
	 * @return {void}
	 */
	static setByPath(obj:any, path:string, value:any) : void {
		var aPath:string[] = path.split(".");
		var key:string = aPath.pop();
		for (var __it1:number=0; __it1<aPath.length; __it1++) {
			var seg = aPath[__it1];
			if (seg == "") {
				continue;
			};
			if (!(seg in obj)) {
				obj[seg] = {};
			};
			obj = obj[seg];
		};
		obj[key] = value;
	}
	
	/**
	 * @static
	 * @method createClassInstance
	 * @public
	 * @param {string} classPath
	 * @param {Array} args
	 * @return {any}
	 */
	static createClassInstance(classPath:string, args:any[]) : any {
		var ret:any = null;
		var proto = require(classPath.replace(/\./g, '/').replace(/^saklient\//, './'));
		var clazz:any = function(){ return proto.apply(this, args); };
		clazz.prototype = proto.prototype;
		return new clazz();
		if (ret == null) {
			throw "Could not create class instance of " + classPath;
		};
		return ret;
	}
	
	/**
	 * @static
	 * @method str2date
	 * @public
	 * @param {string} s
	 * @return {Date}
	 */
	static str2date(s:string) : Date {
		if (s == null) {
			return null;
		};
		return new Date(Date.parse(s));
	}
	
	/**
	 * @static
	 * @method date2str
	 * @public
	 * @param {Date} d
	 * @return {string}
	 */
	static date2str(d:Date) : string {
		if (d == null) {
			return null;
		};
		return ""+d;
	}
		
	/**
	 * @static
	 * @method ip2long
	 * @public
	 * @param {string} str
	 * @return {number}
	 */
	static ip2long(str:string) : number {
		if (str==null || !str.match || !str.match(/^\d+\.\d+\.\d+\.\d+$/)) return null;
		var octets:string[] = str.split(".");
		var ret:number = 0;
		octets.forEach(function(octet){
			var o:number = parseInt(octet, 10);
			if (o<0 || 255<o) ret = o = NaN;
			ret = ret * 256 + o;
		});
		return isNaN(ret) ? null : ret;
	}
	
	/**
	 * @static
	 * @method long2ip
	 * @public
	 * @param {number} val
	 * @return {string}
	 */
	static long2ip(val:number) : string {
		if (isNaN(val) || val < -2147483648 || 4294967296 <= val) return null;
		if (2147483648 <= val) val -= 4294967296;
		if (val != (val|0)) return null;
		val |= 0;
		var ret:string[] = [];
		for (var i=0; i<4; i++) {
			ret.unshift((val & 255).toString(10));
			val >>= 8;
		}
		return ret.join(".");
	}
	
	/**
	 * @static
	 * @method urlEncode
	 * @public
	 * @param {string} s
	 * @return {string}
	 */
	static urlEncode(s:string) : string {
		return encodeURIComponent(s);
	}
	
	/**
	* @static
	* @method castArray
	* @public
	* @param {U} clazz
	* @param {T[]} a
	* @return {U[]}
	*/
	static castArray<T,U>(a:T[], clazz:U) : U[] {
		return (<U[]><any>(a));
	}
	
	/**
	 * @static
	 * @method sortArray
	 * @public
	 * @param {T[]} src
	 * @return {T[]}
	 */
	static sortArray<T>(src:T[]) : T[] {
		var ret:T[] = [].concat(src);
		ret.sort();
		return ret;
	}
	
	
	
	/**
	 * @static
	 * @method sleep
	 * @public
	 * @param {number} sec
	 * @return {void}
	 */
	static sleep(sec:number) : void {
		var t:string = sec.toString(10);
		var t0:number = (new Date).getTime();
		if (process.platform.match(/^win/i)) {
			execSync('sleep ' + t + ' || TIMEOUT /T ' + t + ' /NOBREAK');
		}
		else {
			execSync('sleep ' + t);
		}
		var t1:number = (new Date).getTime();
		if (t1-t0 < sec*800) throw 'Could not sleep synchronously';
	}
	
	/**
	 * @static
	 * @method setTimeout
	 * @public
	 * @param {number} ms
	 * @param {any} fn
	 * @return {void}
	 */
	static setTimeout(fn:any, ms:number) : void {
		setTimeout(fn, ms);
	}
	
	/**
	 * @static
	 * @method validateArgCount
	 * @public
	 * @param {number} actual
	 * @param {number} expected
	 * @return {void}
	 */
	static validateArgCount(actual:number, expected:number) : void {
		if (actual < expected) throw new SaklientException("argument_count_mismatch", "Argument count mismatch");
	}
	
	/**
	 * @static
	 * @method validateType
	 * @public
	 * @param {any} value
	 * @param {string} typeName
	 * @return {void}
	 */
	static validateType(value:any, typeName:string, force:boolean=false) : void {
		var isOk:boolean = false;
		if (!force) {
			if (typeName=="any" || typeName=="void" || value==null) return;
			if (typeName.match(/^[a-z]+$/)) {
				isOk = typeof value == typeName;
			}
			else if (typeName.match(/^saklient\./)) {
				isOk = value instanceof require("../"+typeName.replace(/\./g, "/"));
			}
			else {
				isOk = value instanceof Util.getByPath(global, typeName);
			}
		}
		if (!isOk) throw new SaklientException("argument_type_mismatch", "Argument type mismatch (expected "+typeName+")");
	}
	
}

