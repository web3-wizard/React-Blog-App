// Import Blog model
const Blog = require("../models/blogModel");

// Handle index actions
exports.index = function (req, res) {
  Blog.get(function (err, blogs) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Blogs retrieved successfully",
      data: blogs,
    });
  });
};

// Handle create blog actions
exports.new = function (req, res) {
  var blog = new Blog();
  blog.title = req.body.title ? req.body.title : blog.title;
  blog.content = req.body.content;
  blog.tags = req.body.tags;
  blog.slug = req.body.slug;
  blog.image = req.body.image;
  blog.author = req.body.author;
  // save the blog and check for errors
  blog.save(function (err) {
    if (err) res.json(err);
    res.json({
      message: "New blog created!",
      data: blog,
    });
  });
};

// Handle view blog info
exports.view = function (req, res) {
  Blog.findById(req.params.blog_id, function (err, blog) {
    if (err) res.send(err);
    res.json({
      message: "Blog details loading..",
      data: blog,
    });
  });
};

// Handle update blog info
exports.update = function (req, res) {
  Blog.findById(req.params.blog_id, function (err, blog) {
    if (err) res.send(err);
    blog.title = req.body.title ? req.body.title : blog.title;
    blog.content = req.body.content ? req.body.content : blog.content;
    blog.tags = req.body.tags ? req.body.tags : blog.tags;
    blog.slug = req.body.slug ? req.body.slug : blog.slug;
    blog.image = req.body.image ? req.body.image : blog.image;
    // save the blog and check for errors
    blog.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "Blog Info updated",
        data: blog,
      });
    });
  });
};

// Handle delete blog
exports.delete = function (req, res) {
  Blog.remove(
    {
      _id: req.params.blog_id,
    },
    function (err, blog) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Blog deleted",
      });
    }
  );
};
