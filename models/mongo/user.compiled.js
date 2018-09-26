'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _friend = require('./friend.compiled.js');

var _friend2 = _interopRequireDefault(_friend);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function friendCheck(friendList) {
  let ret = true;

  _lodash2.default.forEach(friendList, friend => {});
}

const userSchema = new _mongoose2.default.Schema({

  publicInfo: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'Friend'
  },
  friendList: {
    type: [_friend2.default.schema]
  },
  userName: {
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