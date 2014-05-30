/// <reference path="../../node.d.ts" />

export = Util;


/**
 * @class Util
 * @constructor
 */
class Util {
	
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
		var proto = require(classPath.replace(/\./g, '/').replace(/^saclient\/cloud/, './'));
		var clazz:any = function(){ return proto.apply(this, args); };
		clazz.prototype = proto.prototype;
		return new clazz();
		if (ret == null) throw "Could not create class instance of " + classPath;
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
		if (s == null) return null;
		;
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
		if (d == null) return null;
		;
		return ""+d;
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
	
}

