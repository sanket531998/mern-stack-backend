import { Router } from "express";
import {
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

export default userRoutes;
