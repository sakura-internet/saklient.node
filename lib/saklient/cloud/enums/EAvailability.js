
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
* @module saklient.cloud.enums.EAvailability
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
    /**
     * @static
     * @property selectable
     * @default "selectable"
     * @type string
     * @public
     */
    /**
     * @static
     * @property migrating
     * @default "migrating"
     * @type string
     * @public
     */
    /**
     * @static
     * @property precreate
     * @default "precreate"
     * @type string
     * @public
     */
    /**
     * @static
     * @property replicating
     * @default "replicating"
     * @type string
     * @public
     */
    /**
     * @static
     * @property transfering
     * @default "transfering"
     * @type string
     * @public
     */
    /**
     * @static
     * @property stopped
     * @default "stopped"
     * @type string
     * @public
     */
    /**
     * @static
     * @property failed
     * @default "failed"
     * @type string
     * @public
     */
    /**
     * @static
     * @property charged
     * @default "charged"
     * @type string
     * @public
     */
    /**
     * @static
     * @property uploading
     * @default "uploading"
     * @type string
     * @public
     */
    /**
     * @static
     * @property available
     * @default "available"
     * @type string
     * @public
     */
    return EAvailability;
})();
module.exports = EAvailability;
