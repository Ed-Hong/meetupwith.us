'use strict';

var _bluebird = require('bluebird');

var _status = require('../../../api/controller/status.compiled.js');

var status = _interopRequireWildcard(_status);

var _index = require('../../../models/mongo/index.compiled.js');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
      const stat = yield status.create(attributes.descrip, true);
      _assert2.default.equal(stat.description, attributes.descrip);
      _assert2.default.equal(stat.availability, true);
    }));
  });
}); /**
     * Created by kfu on 6/24/16.
     */

//# sourceMappingURL=status-test.compiled.js.map