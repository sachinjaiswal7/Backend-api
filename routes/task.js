import express from "express";
import { allTask, createTask, deleteTask, updateTask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.post("/new", createTask)
router.get("/all", allTask)
router.route("/:id").put(updateTask).delete(deleteTask)

export default router;