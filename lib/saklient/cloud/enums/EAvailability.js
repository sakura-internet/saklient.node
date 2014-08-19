
var _map_EAvailability = {
    "selectable": 69,
    "migrating": 70,
    "precreate": 71,
    "replicating": 72,
    "transfering": 73,
    "stopped": 75,
    "failed": 78,
    "charged": 79,
    "uploading": 80,
    "available": 100
};

'use strict';

/**
* リソースの有効性を表す列挙子。
*
* @class EAvailability
*/
var EAvailability = (function () {
    function EAvailability() {
    }
    EAvailability.compare = function (lhs, rhs) {
        var l = _map_EAvailability[lhs];
        var r = _map_EAvailability[rhs];
        if (l == null || r == null)
            return null;
        var ret = l - r;
        return 0 < ret ? 1 : (ret < 0 ? -1 : 0);
    };
    EAvailability.selectable = "selectable";

    EAvailability.migrating = "migrating";

    EAvailability.precreate = "precreate";

    EAvailability.replicating = "replicating";

    EAvailability.transfering = "transfering";

    EAvailability.stopped = "stopped";

    EAvailability.failed = "failed";

    EAvailability.charged = "charged";

    EAvailability.uploading = "uploading";

    EAvailability.available = "available";
    return EAvailability;
})();
module.exports = EAvailability;
