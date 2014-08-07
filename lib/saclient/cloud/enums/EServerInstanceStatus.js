
var _map_EServerInstanceStatus = {
    "down": 0,
    "cleaning": 5,
    "starting": 10,
    "alive": 49,
    "active": 89,
    "migrating": 90,
    "up": 100
};

'use strict';

/**
* @class EServerInstanceStatus
*/
var EServerInstanceStatus = (function () {
    function EServerInstanceStatus() {
    }
    EServerInstanceStatus.compare = function (lhs, rhs) {
        var l = _map_EServerInstanceStatus[lhs];
        var r = _map_EServerInstanceStatus[rhs];
        if (l == null || r == null)
            return null;
        var ret = l - r;
        return 0 < ret ? 1 : (ret < 0 ? -1 : 0);
    };
    EServerInstanceStatus.down = "down";

    EServerInstanceStatus.cleaning = "cleaning";

    EServerInstanceStatus.starting = "starting";

    EServerInstanceStatus.alive = "alive";

    EServerInstanceStatus.active = "active";

    EServerInstanceStatus.migrating = "migrating";

    EServerInstanceStatus.up = "up";
    return EServerInstanceStatus;
})();
module.exports = EServerInstanceStatus;
