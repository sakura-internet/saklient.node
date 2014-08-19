
var _map_EStorageClass = {
    "iscsi1204": 110
};

'use strict';

/**
* ストレージのクラスを表す列挙子。
*
* @class EStorageClass
*/
var EStorageClass = (function () {
    function EStorageClass() {
    }
    EStorageClass.compare = function (lhs, rhs) {
        var l = _map_EStorageClass[lhs];
        var r = _map_EStorageClass[rhs];
        if (l == null || r == null)
            return null;
        var ret = l - r;
        return 0 < ret ? 1 : (ret < 0 ? -1 : 0);
    };
    EStorageClass.iscsi1204 = "iscsi1204";
    return EStorageClass;
})();
module.exports = EStorageClass;
