import express from "express";
import { user } from "../models/users.js";
import { createNewUser, deleteUser, getAUserDynamically, getAllUsers, updateUser } from "../controllers/users.js";

const router = express.Router();
router.get("/all" , getAllUsers)
router.post("/new", createNewUser)
router.get("/userid/:id", getAUserDynamically)
router.put("/userid/:id", updateUser);
router.delete("/userid/:id",deleteUser);


export default router