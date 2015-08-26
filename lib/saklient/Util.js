
var SaklientException = require('./errors/SaklientException');

var execSync = require('child_process').execSync;
var saklient = require('../saklient');

/**
* @ignore
*/
var Util = (function () {
    function Util() {
    }
    /**
    * @static
    * @method existsPath
    * @public
    * @param {any} obj
    * @param {string} path
    * @return {any}
    */
    Util.existsPath = function (obj, path) {
        var aPath = path.split(".");
        for (var __it1 = 0; __it1 < aPath.length; __it1++) {
            var seg = aPath[__it1];
            if (obj == null) {
                return false;
            }
            ;
            if (!(obj instanceof Object)) {
                return false;
            }
            ;
            if (seg == "") {
                continue;
            }
            ;
            if (!(seg in obj)) {
                return false;
            }
            ;
            obj = obj[seg];
        }
        ;
        return true;
    };

    /**
    * @static
    * @method getByPath
    * @public
    * @param {any} obj
    * @param {string} path
    * @return {any}
    */
    Util.getByPath = function (obj, path) {
        var aPath = path.split(".");
        for (var __it1 = 0; __it1 < aPath.length; __it1++) {
            var seg = aPath[__it1];
            if (obj == null) {
                return null;
            }
            ;
            if (!(obj instanceof Object)) {
                return null;
            }
            ;
            if (seg == "") {
                continue;
            }
            ;
            if (!(seg in obj)) {
                return null;
            }
            ;
            obj = obj[seg];
        }
        ;
        return obj;
    };

    Util.getByPathAny = function (objects, pathes) {
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            for (var j = 0; j < pathes.length; j++) {
                var path = pathes[j];
                var ret = Util.getByPath(obj, path);
                if (ret != null)
                    return ret;
            }
        }
        return null;
    };

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
    Util.setByPath = function (obj, path, value) {
        var aPath = path.split(".");
        var key = aPath.pop();
        for (var __it1 = 0; __it1 < aPath.length; __it1++) {
            var seg = aPath[__it1];
            if (seg == "") {
                continue;
            }
            ;
            if (!(seg in obj)) {
                obj[seg] = {};
            }
            ;
            obj = obj[seg];
        }
        ;
        obj[key] = value;
    };

    /**
    * @static
    * @method createClassInstance
    * @public
    * @param {string} classPath
    * @param {Array} args
    * @return {any}
    */
    Util.createClassInstance = function (classPath, args) {
        var ret = null;
        var proto = require(classPath.replace(/\./g, '/').replace(/^saklient\//, './'));
        var clazz = function () {
            return proto.apply(this, args);
        };
        clazz.prototype = proto.prototype;
        return new clazz();
        if (ret == null) {
            throw "Could not create class instance of " + classPath;
        }
        ;
        return ret;
    };

    /**
    * @static
    * @method str2date
    * @public
    * @param {string} s
    * @return {Date}
    */
    Util.str2date = function (s) {
        if (s == null) {
            return null;
        }
        ;
        return new Date(Date.parse(s));
    };

    /**
    * @static
    * @method date2str
    * @public
    * @param {Date} d
    * @return {string}
    */
    Util.date2str = function (d) {
        if (d == null) {
            return null;
        }
        ;
        return "" + d;
    };

    /**
    * @static
    * @method ip2long
    * @public
    * @param {string} str
    * @return {number}
    */
    Util.ip2long = function (str) {
        if (str == null || !str.match || !str.match(/^\d+\.\d+\.\d+\.\d+$/))
            return null;
        var octets = str.split(".");
        var ret = 0;
        octets.forEach(function (octet) {
            var o = parseInt(octet, 10);
            if (o < 0 || 255 < o)
                ret = o = NaN;
            ret = ret * 256 + o;
        });
        return isNaN(ret) ? null : ret;
    };

    /**
    * @static
    * @method long2ip
    * @public
    * @param {number} val
    * @return {string}
    */
    Util.long2ip = function (val) {
        if (isNaN(val) || val < -2147483648 || 4294967296 <= val)
            return null;
        if (2147483648 <= val)
            val -= 4294967296;
        if (val != (val | 0))
            return null;
        val |= 0;
        var ret = [];
        for (var i = 0; i < 4; i++) {
            ret.unshift((val & 255).toString(10));
            val >>= 8;
        }
        return ret.join(".");
    };

    /**
    * @static
    * @method urlEncode
    * @public
    * @param {string} s
    * @return {string}
    */
    Util.urlEncode = function (s) {
        return encodeURIComponent(s);
    };

    /**
    * @static
    * @method castArray
    * @public
    * @param {U} clazz
    * @param {T[]} a
    * @return {U[]}
    */
    Util.castArray = function (a, clazz) {
        return (a);
    };

    /**
    * @static
    * @method sortArray
    * @public
    * @param {T[]} src
    * @return {T[]}
    */
    Util.sortArray = function (src) {
        var ret = [].concat(src);
        ret.sort();
        return ret;
    };

    /**
    * @static
    * @method sleep
    * @public
    * @param {number} sec
    * @return {void}
    */
    Util.sleep = function (sec) {
        var t = sec.toString(10);
        var t0 = (new Date).getTime();
        if (process.platform.match(/^win/i)) {
            execSync('sleep ' + t + ' || TIMEOUT /T ' + t + ' /NOBREAK');
        } else {
            execSync('sleep ' + t);
        }
        var t1 = (new Date).getTime();
        if (t1-t0 < t*800) throw "Could not sleep synchronously";
    };

    /**
    * @static
    * @method setTimeout
    * @public
    * @param {number} ms
    * @param {any} fn
    * @return {void}
    */
    Util.setTimeout = function (fn, ms) {
        setTimeout(fn, ms);
    };

    /**
    * @static
    * @method validateArgCount
    * @public
    * @param {number} actual
    * @param {number} expected
    * @return {void}
    */
    Util.validateArgCount = function (actual, expected) {
        if (actual < expected)
            throw new SaklientException("argument_count_mismatch", "Argument count mismatch");
    };

    /**
    * @static
    * @method validateType
    * @public
    * @param {any} value
    * @param {string} typeName
    * @return {void}
    */
    Util.validateType = function (value, typeName, force) {
        if (typeof force === "undefined") { force = false; }
        var isOk = false;
        if (!force) {
            if (typeName == "any" || typeName == "void" || value == null)
                return;
            if (typeName.match(/^[a-z]+$/)) {
                isOk = typeof value == typeName;
            } else if (typeName.match(/^saklient\./)) {
                isOk = value instanceof require("../" + typeName.replace(/\./g, "/"));
            } else {
                isOk = value instanceof Util.getByPath(global, typeName);
            }
        }
        if (!isOk)
            throw new SaklientException("argument_type_mismatch", "Argument type mismatch (expected " + typeName + ")");
    };
    return Util;
})();
module.exports = Util;
