'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findOneAndUpdate = exports.findOne = exports.create = undefined;

var _bluebird = require('bluebird');

/**
 * Creates a Status object based off the schema
 * @param {*} attributes: the attributes to add to the hour of the producers
 * @returns {Promise} the created object
 */

let create = exports.create = (() => {
  var _ref = (0, _bluebird.coroutine)(function* (attributes) {
    return yield new Status(attributes).save();
  });

  return function create(_x) {
    return _ref.apply(this, arguments);
  };
})();
/**
 *Returns a Status object given a query
 *@param {Object} attributes: key value pairs of the attributes we want to query by
 *@returns {Promise}: returns a SocketToken object
 */


let findOne = exports.findOne = (() => {
  var _ref2 = (0, _bluebird.coroutine)(function* (attributes) {
    return yield Status.findOne(attributes).exec();
  });

  return function findOne(_x2) {
    return _ref2.apply(this, arguments);
  };
})();

let findOneAndUpdate = exports.findOneAndUpdate = (() => {
  var _ref3 = (0, _bluebird.coroutine)(function* (conditions, updates) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    const status = yield Status.findOneAndUpdate(conditions, updates, options).exec();
    if (Utils.isEmpty(status)) {
      throw new Error(`Could not find and update status with attributes: ${ conditions } with updates ${ updates }`);
    }
    return status;
  });

  return function findOneAndUpdate(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
})();

var _index = require('../../models/mongo/index.compiled.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Status = _index2.default.Status;

//# sourceMappingURL=status.compiled.js.map