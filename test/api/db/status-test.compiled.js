'use strict';

var _bluebird = require('bluebird');

var _status = require('../../../api/db/status.compiled.js');

var _status2 = _interopRequireDefault(_status);

var _index = require('../../../models/mongo/index.compiled.js');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by kfu on 6/24/16.
 */
describe('Status DB API', () => {
  const attributes = {
    available: 'some action',
    descrip: "Hello World!" // eslint-disable-line
  };
  beforeEach((0, _bluebird.coroutine)(function* () {
    yield (0, _index.clear)();
  }));

  describe('#create()', () => {
    it('should create an empty Status object successfully', (0, _bluebird.coroutine)(function* () {
      const stat = yield _status2.default.create({});
      _assert2.default.equal(stat.description, undefined);
      _assert2.default.equal(stat.available, false);
    }));

    it('should create a Status object with attributes successfully', (0, _bluebird.coroutine)(function* () {
      const stat = yield _status2.default.create({ description: attributes.descrip,
        availability: true });
      _assert2.default.equal(stat.description, attributes.descrip);
      _assert2.default.equal(stat.availability, true);
    }));
  });
});

//# sourceMappingURL=status-test.compiled.js.map