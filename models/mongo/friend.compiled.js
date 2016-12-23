'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const friendSchema = new _mongoose2.default.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: num => /^([0-9]{10})$/.test(num),
      message: 'Phone number must be 10 digits'
    },
    required: false
  },
  email: {
    type: String,
    required: false
  },
  profileImage: {
    type: String,
    required: false
  },
  enabled: {
    type: Boolean,
    default: false,
    required: true
  },
  availability: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'Status'
  }
}, {
  timestamps: true
});
exports.default = _mongoose2.default.model('Friend', friendSchema);

//# sourceMappingURL=friend.compiled.js.map