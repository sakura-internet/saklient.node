
var _map_EApplianceClass = {
    "loadbalancer": 10,
    "vpcrouter": 20
};

'use strict';

/**
* アプライアンスのクラスを表す列挙子。
*
* @module saklient.cloud.enums.EApplianceClass
* @class EApplianceClass
*/
var EApplianceClass = (function () {
    function EApplianceClass() {
    }
    EApplianceClass.compare = function (lhs, rhs) {
        var l = _map_EApplianceClass[lhs];
        var r = _map_EApplianceClass[rhs];
        if (l == null || r == null)
            return null;
        var ret = l - r;
        return 0 < ret ? 1 : (ret < 0 ? -1 : 0);
    };
    EApplianceClass.loadbalancer = "loadbalancer";

    EApplianceClass.vpcrouter = "vpcrouter";
    /**
     * @static
     * @property loadbalancer
     * @default "loadbalancer"
     * @type string
     * @public
     */
    /**
     * @static
     * @property vpcrouter
     * @default "vpcrouter"
     * @type string
     * @public
     */
    return EApplianceClass;
})();
module.exports = EApplianceClass;
