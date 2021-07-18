const router = require("express").Router();
const { body } = require("express-validator");
const multer = require("multer");

const AdminController = require("../Controllers/AdminController");
const isAuth = require("../middleware/isAuth");

const storage = multer.memoryStorage();

const parser = multer({ storage: storage });

router.post(
    "/edit-post",
    isAuth,
    // [
    //     body("title")
    //         .trim()
    //         .isLength({ min: 10 })
    //         .withMessage("Title Should Be at least 10 characters"),
    //     body("content")
    //         .trim()
    //         .isLength({ min: 50 })
    //         .withMessage("Content Should Be at least 50 characters long"),
    // ],
    parser.single("img"),
    AdminController.postEditPost
);

router.get("/", isAuth, AdminController.getAdmin);

router.get("/profile", isAuth, AdminController.getProfile);

router.delete("/delete-account", isAuth, AdminController.deleteAccount);

router.post("/delete-post", isAuth, AdminController.deletePost);

router.post("/forgot-password", AdminController.postForgotPassword);

router.get("/reset-password/:token", AdminController.getResetPassword);

router.post("/reset-password/:token", AdminController.postResetPassword);

module.exports = router;
