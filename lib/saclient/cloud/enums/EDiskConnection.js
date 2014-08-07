'use strict';

var _map_EDiskConnection = {
    "ide": 100,
    "virtio": 300
};

/**
* @class EDiskConnection
*/
var EDiskConnection = (function () {
    function EDiskConnection() {
    }
    EDiskConnection.compare = function (lhs, rhs) {
        var l = _map_EDiskConnection[lhs];
        var r = _map_EDiskConnection[rhs];
        if (l == null || r == null)
            return null;
        var ret = l - r;
        return 0 < ret ? 1 : (ret < 0 ? -1 : 0);
    };
    EDiskConnection.ide = "ide";

    EDiskConnection.virtio = "virtio";
    return EDiskConnection;
})();
module.exports = EDiskConnection;
