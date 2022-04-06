const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
} = require("../../controllers/thoughtController.js");

// /api/courses
router.route("/").get(getThoughts).post(createThought);

// /api/courses/:courseId
router.route("/:id").get(getSingleThought);

module.exports = router;
