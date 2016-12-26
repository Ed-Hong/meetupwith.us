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
    it('should failt to find an uncreated Status object', (0, _bluebird.coroutine)(function* () {
      try {
        yield status.findOne({ availability: true });
      } catch (e) {
        return;
      }
      (0, _assert2.default)(false);
    }));

    it('should failt to find a Status object when several exist', (0, _bluebird.coroutine)(function* () {
      yield status.create({ description: attributes.descrip,
        availability: attributes.available });
      yield status.create({ description: "studying",
        availability: false });
      try {
        yield findOne({ description: "goodbye world" });
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
    it('should failt to find and update a Status object that does not exist', (0, _bluebird.coroutine)(function* () {
      try {
        yield status.findOneAndUpdate({ availability: true }, { description: "studying",
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

      const stat = yield status.findOneAndUpdate({ _id }, { description: "studying",
        availability: false });
      _assert2.default.equal(stat.description, "studying");
      _assert2.default.equal(stat.availability, false);
    }));
  });
});

//# sourceMappingURL=status-test.compiled.js.map