import mongoose from 'mongoose';


const statusSchema = new mongoose.Schema({
    description: {
      type: String
    },
    availability: {
      type: Boolean,
      required: true
    }
  },
  {
    timestamps: true
  });
export default mongoose.model('Status', statusSchema);
