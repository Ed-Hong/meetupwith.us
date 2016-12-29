'use strict';

var _bluebird = require('bluebird');

var _status = require('../../../api/db/status.compiled.js');

var status = _interopRequireWildcard(_status);

var _index = require('../../../models/mongo/index.compiled.js');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('Status DB API', () => {
  const attributes = {
    available: true,
    descrip: "Hello World!" // eslint-disable-line
  };
  beforeEach((0, _bluebird.coroutine)(function* () {
    yield (0, _index.clear)();
  }));

  describe('#create()', () => {
    it('should create a Status object with attributes successfully', (0, _bluebird.coroutine)(function* () {
      const stat = yield status.create({ description: attributes.descrip,
        availability: attributes.available });
      _assert2.default.equal(stat.description, attributes.descrip);
      _assert2.default.equal(stat.availability, attributes.available);
    }));
  });

  describe('#findOne()', () => {
    it('should fail to find an uncreated Status object', (0, _bluebird.coroutine)(function* () {
      try {
        yield status.findOne({ description: "Hello World!" });
      } catch (e) {
        return;
      }
      (0, _assert2.default)(false);
    }));

    it('should fail to find a Status object when several exist', (0, _bluebird.coroutine)(function* () {
      yield status.create({ description: attributes.descrip,
        availability: true });
      yield status.create({ description: "studying",
        availability: false });
      try {
        yield status.findOne({ description: "goodbye world" });
      } catch (e) {
        return;
      }(0, _assert2.default)(false);
    }));

    it('should find a created Status object successfully', (0, _bluebird.coroutine)(function* () {
      var _ref6 = yield status.create({ description: attributes.descrip,
        availability: attributes.available });

      const _id = _ref6._id;

      const stat = yield status.findOne(_id);
      _assert2.default.equal(stat.description, attributes.descrip);
      _assert2.default.equal(stat.availability, attributes.available);
    }));
  });

  describe('#findOneAndUpdate()', () => {
    it('should fail to find and update a Status object that does not exist', (0, _bluebird.coroutine)(function* () {
      try {
        yield status.findOneAndUpdate({ availability: true }, { description: "meowcats",
          availability: false });
      } catch (e) {
        return;
      }
      (0, _assert2.default)(false);
    }));

    it('should find and update a Status object successfully', (0, _bluebird.coroutine)(function* () {
      var _ref9 = yield status.create({ description: attributes.descrip,
        availability: attributes.available });

      const _id = _ref9._id;

      const stat = yield status.findOneAndUpdate(_id, { description: "hello youtube",
<<<<<<< HEAD
        availability: false });
=======
        availability: false }, { new: true });
>>>>>>> b0272e02655b850969665a215ae21d3d46562b5a
      _assert2.default.equal(stat.description, "hello youtube");
      _assert2.default.equal(stat.availability, false);
    }));
  });
}); // created by apoovey 12-26-16

//# sourceMappingURL=status-test.compiled.js.map