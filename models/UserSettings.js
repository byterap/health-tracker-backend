const mongoose = require('mongoose');

const UserSettingsSchema = new mongoose.Schema({
  initialWeight: {
    type: Number,
    required: true,
  },
  targetWeight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('UserSettings', UserSettingsSchema); 