import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

  publicInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Friend',
    required: true
  },
  friendList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Friend'
  }],
  userName: {
    type: String,
    required: true,
    unique: true,
    sparse: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
export default mongoose.model('User', userSchema);
