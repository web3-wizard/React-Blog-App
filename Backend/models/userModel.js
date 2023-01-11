var mongoose = require("mongoose");

// Setup schema
var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: String,
  profile_pic: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: Date,
});

userSchema.pre("save", function (next) {
  this.updated_at = Date.now(); // update the date every time a user data is saved
  next();
});

// Export User model
var User = (module.exports = mongoose.model("user", userSchema));

module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
};
