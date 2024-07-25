import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({ 
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pwd: {
    type: String,
    required: true
  },
  role: {
        User: { 
            type: Number,
            default: 1
        },
        Admin: Number
        
  }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
