// Import user model
const User = require("../models/userModel");

// Handle index actions
exports.index = function (req, res) {
  User.get(function (err, users) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Users retrieved successfully",
      data: users,
    });
  });
};

// Handle create user actions
exports.new = function (req, res) {
  var user = new User();
  user.name = req.body.name ? req.body.name : user.name;
  user.email = req.body.email;
  user.password = req.body.password;
  user.bio = req.body.bio;
  user.profile_pic = req.body.profile_pic;
  // save the user and check for errors
  user.save(function (err) {
    if (err) res.json(err);
    res.json({
      message: "New user created!",
      data: user,
    });
  });
};

// Handle view user info
exports.view = function (req, res) {
  User.findById(req.params.user_id, function (err, user) {
    if (err) res.send(err);
    res.json({
      message: "User details loading..",
      data: user,
    });
  });
};

// Handle update user info
exports.update = function (req, res) {
  User.findById(req.params.user_id, function (err, user) {
    if (err) res.send(err);
    user.name = req.body.name ? req.body.name : user.name;
    user.bio = req.body.bio ? req.body.bio : user.bio;
    user.profile_pic = req.body.profile_pic
      ? req.body.profile_pic
      : user.profile_pic;
    // save the user and check for errors
    user.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "User Info updated",
        data: user,
      });
    });
  });
};

// Handle delete user
exports.delete = function (req, res) {
  User.remove(
    {
      _id: req.params.user_id,
    },
    function (err, user) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "User deleted",
      });
    }
  );
};
