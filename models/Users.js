const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});


// Password Hash Middleware

UserSchema.pre('save', async function save(next) {
    try {
      const user = this;
      if (!user.isModified('password')) { 
        return next(); 
      }
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
      next();
    } catch (err) {
      next(err);
    }
  });

  // Helper method for validating user password

  UserSchema.methods.comparePassword = async function comparePassword(candidatePassword) {
    try {
      const isMatch = await bcrypt.compare(candidatePassword, this.password);
      return isMatch;
    } catch (err) {
      throw err; 
    }
  };
  

  module.exports = mongoose.model('User', UserSchema)
  
  