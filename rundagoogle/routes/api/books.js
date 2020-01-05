const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api/books"
router.route("/")
  // SEE activity 11-Stu_ReactRouter/Solved
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/books/:id"
router
  // SEE activity 11-Stu_ReactRouter/Solved
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;