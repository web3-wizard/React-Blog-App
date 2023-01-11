var mongoose = require("mongoose");

// Setup schema
var blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  slug: String,
  image: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: Date,
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  likes: [String],
  comments: [
    {
      user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      created_at: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

blogSchema.pre("save", function (next) {
  this.updated_at = Date.now(); // update the date every time a blog post is saved
  next();
});

// Export Blog model
var Blog = (module.exports = mongoose.model("blog", blogSchema));

module.exports.get = function (callback, limit) {
  Blog.find(callback).limit(limit);
};
