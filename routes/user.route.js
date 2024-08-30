import express from "express";
import { login, logout, register } from "../controller/user.controller.js";
import { singleUpload } from "../middleware/multer.js";

const router=express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);

export default router;
