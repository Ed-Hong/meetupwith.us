'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDescription = exports.updateAvailability = exports.findOneAndUpdate = exports.findById = exports.create = undefined;

var _bluebird = require('bluebird');

/**
 * Creates a Status Object
 * @param {String} descrip: the status's description
 * @param {Boolean} bool: the availbility of the status
 * @returns {Promise}: the created Status object
 */
let create = exports.create = (() => {
  var _ref = (0, _bluebird.coroutine)(function* (descrip, bool) {
    return yield Status.create({ description: descrip, availability: bool });
  });

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

/**
 * Finds a status from the obectId
 * @param {ObjectId}_id : the objectId to find the status from
 * @returns {Promise}: the found Status
 */


let findById = exports.findById = (() => {
  var _ref2 = (0, _bluebird.coroutine)(function* (_id) {
    return yield Status.findOne(_id);
  });

  return function findById(_x3) {
    return _ref2.apply(this, arguments);
  };
})();

/**
 * Finds a Status and updates the fields of it
 * @param {ObjectId} _id: the ObjectId to query with
 * @param {String} description: the Status's description to set
 * @param {Boolean} availability: the availability to set
 * @returns {Promise}: the updated Status object
 */


let findOneAndUpdate = exports.findOneAndUpdate = (() => {
  var _ref3 = (0, _bluebird.coroutine)(function* (_id, description, availability) {
    return yield Status.findOneAndUpdate(_id, { description, availability }, { new: true });
  });

  return function findOneAndUpdate(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
})();

/**
 * Finds a Status object and availability of it
 * @param {ObjectId} _id: the ObjectId to query with
 * @param {Boolean} availability: the updated availability
 * @returns {Promise}: the updated Status object
 */


let updateAvailability = exports.updateAvailability = (() => {
  var _ref4 = (0, _bluebird.coroutine)(function* (_id, availability) {
    return yield Status.findOneAndUpdate(_id, { availability }, { new: true });
  });

  return function updateAvailability(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
})();

/**
 * Finds a Status object and updates the description of it
 * @param {ObjectId} _id: the ObjectId to query with
 * @param {String} description: the description to update it with
 * @returns {Promise}: the updated Status object
 */


let updateDescription = exports.updateDescription = (() => {
  var _ref5 = (0, _bluebird.coroutine)(function* (_id, description) {
    return yield Status.findOneAndUpdate({ _id }, { description }, { new: true });
  });

  return function updateDescription(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
})();

var _status = require('../db/status.compiled.js');

var Status = _interopRequireWildcard(_status);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//# sourceMappingURL=status.compiled.js.map