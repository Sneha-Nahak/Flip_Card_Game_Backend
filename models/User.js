// models/User.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Hash password before saving the user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    console.log(`Hashing password for user: ${this.username}`);
    const hash = await bcrypt.hash(this.password, 12); // 12 salt rounds for good security
    this.password = hash;
    next();
  } catch (err) {
    console.error('Error during password hashing:', err);
    next(err); // Pass error to Mongoose
  }
});

// Method to compare password during login
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Enable automatic indexing (especially for unique fields)
userSchema.set('autoIndex', true);

// Optional: Explicit index creation for clarity
userSchema.index({ username: 1 });

module.exports = mongoose.model('User', userSchema);
