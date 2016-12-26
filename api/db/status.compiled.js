'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = undefined;

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
// /**
//  *Returns a Status object given a query
//  *@param {Object} attributes: key value pairs of the attributes we want to query by
//  *@returns {Promise}: returns a SocketToken object
//  */
// export async function findOne(attributes) {
//   return await Status.findOne(attributes).exec();
// }
//
//
// export async function findOneAndUpdate(conditions, updates, options = null) {
//   const status = await Status.findOneAndUpdate(conditions, updates, options).exec();
//   if ((status ==  null)) { //todo utils doesnt exist here
//     throw new Error(`Could not find and update status with attributes: ${conditions} with updates ${updates}`);
//   }
//   return status;
// }


var _index = require('../../models/mongo/index.compiled.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Status = _index2.default.Status;

//# sourceMappingURL=status.compiled.js.map