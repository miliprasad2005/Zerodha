const express = require("express");

const {
    Signup,
    Login,
    Logout,
    GetUser
} = require("../Controllers/AuthController");

const { checkUser } = require("../MiddleWares/AuthMiddleWares");
const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/logout", Logout);
router.get("/verify", checkUser, (req, res) => {
    return res.status(200).json({
        success: true,
        message: "User is authenticated",
        userId: req.userId
    });
});
router.get("/me", checkUser, GetUser);
module.exports = router;