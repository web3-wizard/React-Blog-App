// Initialize express router
let router = require("express").Router();
// Import User controller
var userController = require("../controllers/userController");
// Import Blog controller
var blogController = require("../controllers/blogController");

// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "API Is Working",
    message:
      "Welcome to REST API created with Express and MongoDb by Rahul Dey!",
  });
});

// User routes
router.route("/users").get(userController.index).post(userController.new);
router
  .route("/users/:user_id")
  .get(userController.view)
  .patch(userController.update)
  .put(userController.update)
  .delete(userController.delete);

// Blog routes
router.route("/blogs").get(blogController.index).post(blogController.new);
router
  .route("/blogs/:blog_id")
  .get(blogController.view)
  .patch(blogController.update)
  .put(blogController.update)
  .delete(blogController.delete);

// Export API routes
module.exports = router;
