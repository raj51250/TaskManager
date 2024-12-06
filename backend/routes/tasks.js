const express = require("express");
const {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
} = require("../controllers/tasks");
const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);

//we can add multiple paths in single line as well
// router.route('/').get(getAllTasks).post(createTask)
// router.route('/:id').put(updateTask).get(getTask).delete(deleteTask)

module.exports = router;