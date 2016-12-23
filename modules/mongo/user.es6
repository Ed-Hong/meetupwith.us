import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

  publicInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Friend'
  },
  friendList: [{
    type: mongoose.Schema.Types.ObjectId,
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
export default mongoose.model('User', userSchema);
