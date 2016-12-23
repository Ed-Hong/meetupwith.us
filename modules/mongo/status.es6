import mongoose from 'mongoose';


const statusSchema = new mongoose.Schema({
    description: {
      type: String,
      required: false
    },
    availability: {
      type: boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  });
export default mongoose.model('Status', statusSchema);
