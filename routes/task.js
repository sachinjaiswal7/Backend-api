import express from "express";
import { allTask, createTask, deleteTask, updateTask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.post("/new", isAuthenticated,createTask)
router.get("/all", isAuthenticated, allTask)
router.route("/:id").put(isAuthenticated , updateTask).delete(isAuthenticated , deleteTask)

export default router;