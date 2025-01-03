import { Router } from "express";
import {
  changePasswordHandler,
  getUserDetailsHandler,
  loginHandler,
  logoutHandler,
  refreshAccessTokenHandler,
  registerUser,
} from "../controller/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const userRoutes = Router();

userRoutes
  .route("/register")
  .post(
    upload.fields([{ name: "avatar" }, { name: "coverImage" }]),
    registerUser
  );

userRoutes.route("/login").get(loginHandler);

//Secured Routes
userRoutes.route("/logout").post(verifyJWT, logoutHandler);
userRoutes.route("/refreshToken").post(refreshAccessTokenHandler);

userRoutes.route("/changePassword").get(verifyJWT, changePasswordHandler);
userRoutes.route("/getUserDetails").get(verifyJWT, getUserDetailsHandler);

export default userRoutes;
