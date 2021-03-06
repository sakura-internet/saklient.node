
var _map_EScriptClass = {
    "shell": 200,
    "ansible": 300
};

'use strict';

/**
* スクリプトのクラスを表す列挙子。
*
* @module saklient.cloud.enums.EScriptClass
* @class EScriptClass
*/
var EScriptClass = (function () {
    function EScriptClass() {
    }
    EScriptClass.compare = function (lhs, rhs) {
        var l = _map_EScriptClass[lhs];
        var r = _map_EScriptClass[rhs];
        if (l == null || r == null)
            return null;
        var ret = l - r;
        return 0 < ret ? 1 : (ret < 0 ? -1 : 0);
    };
    EScriptClass.shell = "shell";

    EScriptClass.ansible = "ansible";
    /**
     * @static
     * @property shell
     * @default "shell"
     * @type string
     * @public
     */
    /**
     * @static
     * @property ansible
     * @default "ansible"
     * @type string
     * @public
     */
    return EScriptClass;
})();
module.exports = EScriptClass;
