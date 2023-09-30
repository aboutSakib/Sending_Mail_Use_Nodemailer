const express = require("express");
const router = express.Router(); // Use express.Router() without parentheses
const userController = require("../controller/userController");

router.post("/mail", userController.sendMail);

// Export the router for use in other parts of your application
module.exports = router;
