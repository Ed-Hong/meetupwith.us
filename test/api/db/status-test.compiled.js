'use strict';

var _bluebird = require('bluebird');

var _statusCompiled = require('../../../api/controller/status.compiled.js');

var _statusCompiled2 = _interopRequireDefault(_statusCompiled);

var _index = require('../../../models/mongo/index.compiled.js');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Status DB API', () => {
  const attributes = {
    available: 'some action',
    descrip: "Hello World!" // eslint-disable-line
  };
  beforeEach((0, _bluebird.coroutine)(function* () {
    yield (0, _index.clear)();
  }));

  describe('#create()', () => {
    it('should create a Status object with attributes successfully', (0, _bluebird.coroutine)(function* () {
      const stat = yield _statusCompiled2.default.create(attributes.descrip, true);
      _assert2.default.equal(stat.description, attributes.descrip);
      _assert2.default.equal(stat.availability, true);
    }));
  });
});

//# sourceMappingURL=status-test.compiled.js.map