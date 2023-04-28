import express from "express";
import { user } from "../models/users.js";
import { getAllUsers, getMyProfile, login, logout, register } from "../controllers/users.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
router.get("/all" , getAllUsers)
router.post("/new", register)
router.post("/login",login);
router.get("/me" , getMyProfile)
router.get("/logout" ,logout);

export default router