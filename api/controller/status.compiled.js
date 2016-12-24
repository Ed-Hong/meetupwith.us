'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = undefined;

var _bluebird = require('bluebird');

let create = exports.create = (() => {
  var _ref = (0, _bluebird.coroutine)(function* (bool, descrip) {
    return yield _status2.default.create({ description: descrip, availability: bool });
  });

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

var _status = require('../db/status.compiled.js');

var _status2 = _interopRequireDefault(_status);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//# sourceMappingURL=status.compiled.js.map