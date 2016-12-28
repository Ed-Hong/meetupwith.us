'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userSchema = new _mongoose2.default.Schema({

  publicInfo: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'Friend'
  },
  friendList: [{
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'Friend'
  }],
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: false
  }
}, {
  timestamps: true
});
exports.default = _mongoose2.default.model('User', userSchema);

//# sourceMappingURL=user.compiled.js.map