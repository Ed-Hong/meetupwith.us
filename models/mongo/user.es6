import mongoose from 'mongoose';
import friend from './friend.es6';
import _ from 'lodash';

function friendCheck(friendList) {
  let ret = true;

  _.forEach(friendList, friend => {

  })
}

const userSchema = new mongoose.Schema({

  publicInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Friend'
  },
  friendList: {
    type:[friend.schema]
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
export default mongoose.model('User', userSchema);

