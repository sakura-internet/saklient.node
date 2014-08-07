
var _map_EScope = {
    "user": 100,
    "shared": 200
};

'use strict';

/**
* @class EScope
*/
var EScope = (function () {
    function EScope() {
    }
    EScope.compare = function (lhs, rhs) {
        var l = _map_EScope[lhs];
        var r = _map_EScope[rhs];
        if (l == null || r == null)
            return null;
        var ret = l - r;
        return 0 < ret ? 1 : (ret < 0 ? -1 : 0);
    };
    EScope.user = "user";

    EScope.shared = "shared";
    return EScope;
})();
module.exports = EScope;
