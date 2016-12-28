'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = exports.close = undefined;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

/*
 * Closes the connection to mongodb
 */
let close = exports.close = (() => {
  var _ref = (0, _bluebird.coroutine)(function* () {
    _mongoose2.default.connection.close();
  });

  return function close() {
    return _ref.apply(this, arguments);
  };
})();

/*
 * Clears all collections in mongodb. Used for testing purposes
 */


let clear = exports.clear = (() => {
  var _ref2 = (0, _bluebird.coroutine)(function* () {
    const collections = _mongoose2.default.connection.collections;
    for (const col in collections) {
      //eslint-disable-line
      if (collections.hasOwnProperty(col)) {
        collections[col].remove();
      }
    }
  });

  return function clear() {
    return _ref2.apply(this, arguments);
  };
})();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mongoConfig = _config2.default.get('MongoDb');
_mongoose2.default.Promise = _bluebird2.default;
//mongodb://<dbuser>:<dbpassword>@ds145148.mlab.com:45148/heroku_ghm9fvzv
// mongoose.connect(`mongodb://${mongoConfig.user}:${mongoConfig.password}@${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.database}`);
_mongoose2.default.connect(`mongodb://apoovey:abc123@ds145148.mlab.com:45148/heroku_ghm9fvzv`);
console.log(`Mongo DB [host|port|database]: [${ mongoConfig.host }|${ mongoConfig.port }|${ mongoConfig.database }]`);

const basename = _path2.default.basename(module.filename);
const db = (0, _create2.default)(null);

/* This makes all of the mongodb models available through this single file by exporting all of
 * the individual models. We're importing each <model>.es6 file manually by scanning the directory
 * and then re-exporting the model*/

_fs2.default.readdirSync(__dirname).filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js').forEach(file => {
  const model = require(_path2.default.join(__dirname, file)).default;
  db[model.modelName] = model;
  exports[model.modelName] = model;
});

db.mongoose = _mongoose2.default;

exports.default = db;

//# sourceMappingURL=index.compiled.js.map