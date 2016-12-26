'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = undefined;

var _bluebird = require('bluebird');

let create = exports.create = (() => {
  var _ref = (0, _bluebird.coroutine)(function* (descrip, bool) {
    return yield Status.create({ description: descrip, availability: bool });
  });

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

var _status = require('../db/status.compiled.js');

var Status = _interopRequireWildcard(_status);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//# sourceMappingURL=status.compiled.js.map