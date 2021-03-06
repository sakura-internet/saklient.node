
var _map_EServerInstanceStatus = {
    "down": 0,
    "cleaning": 5,
    "up": 100
};

'use strict';

/**
* サーバの起動状態を表す列挙子。
*
* @module saklient.cloud.enums.EServerInstanceStatus
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

    EServerInstanceStatus.up = "up";
    /**
     * @static
     * @property down
     * @default "down"
     * @type string
     * @public
     */
    /**
     * @static
     * @property cleaning
     * @default "cleaning"
     * @type string
     * @public
     */
    /**
     * @static
     * @property up
     * @default "up"
     * @type string
     * @public
     */
    return EServerInstanceStatus;
})();
module.exports = EServerInstanceStatus;
