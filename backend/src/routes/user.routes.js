import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { RegisterUser, LoginUser, UploadProfileImage, LogoutUser, deleteUser, RenewAccessToken } from '../controllers/user.controller.js';
import AuthUser from '../middlewares/AuthUser.middleware.js'

const router = Router();

router.route("/register").post(RegisterUser);
router.route("/login").post(LoginUser);

// File
router.route("/upload/profile-image").patch(AuthUser, upload.single("profile-image"), UploadProfileImage);

// Protected Route
router.route("/logout").get(AuthUser, LogoutUser);
router.route("/delete").delete(AuthUser, deleteUser);
router.route("/refresh-access-token").get(AuthUser, RenewAccessToken);

export default router