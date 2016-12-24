import mongoose from 'mongoose';


const statusSchema = new mongoose.Schema({
    description: {
      type: String,
      required: false
    },
    availability: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  });
export default mongoose.model('Status', statusSchema);
