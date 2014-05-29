var saclient;
(function (saclient) {
    /**
    * @module saclient.cloud
    */
    (function (cloud) {
        /**
        * @class Util
        * @constructor
        */
        var Util = (function () {
            function Util() {
            }
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
                var p = classPath.split(".");
                if (p.shift() != "saclient")
                    return null;
                ;
                var proto = saclient;
                p.forEach(function (s) {
                     {
                        proto = proto[s];
                    }
                });
                var clazz = function () {
                    return proto.apply(this, args);
                };
                clazz.prototype = proto.prototype;
                return new clazz();
                if (ret == null)
                    throw "Could not create class instance of " + classPath;
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
                if (s == null)
                    return null;
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
                if (d == null)
                    return null;
                ;
                return "" + d;
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
            return Util;
        })();
        cloud.Util = Util;
    })(saclient.cloud || (saclient.cloud = {}));
    var cloud = saclient.cloud;
})(saclient || (saclient = {}));
