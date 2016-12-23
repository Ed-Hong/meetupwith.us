import mongoose from 'mongoose';


const friendSchema = new mongoose.Schema({
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Status'
  }
},
{
  timestamps: true
});
export default mongoose.model('Friend', friendSchema);
