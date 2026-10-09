const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
    console.log("COOKIES:", req.cookies);
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "You are not logged in",
            success: false
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.TOKEN_KEY
        );

        req.userId = decoded.id;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token",
            success: false
        });
    }
};