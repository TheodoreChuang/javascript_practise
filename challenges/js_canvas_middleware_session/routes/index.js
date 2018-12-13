const express = require("express");
const router = express.Router();
const PageController = require("./../controllers/page_controller");
const AuthenticateController = require("./../controllers/authenticate_controller");

// GET /	Should display 'Hello world!'
router.get("/", PageController.index);

// Registration
router.get("/auth/register", AuthenticateController.registerNew);
router.post("/auth/register", AuthenticateController.registerCreate);

// GET /auth/login	Should log the user in and display 'You've logged in'

// GET /auth/logout	Should log the user out and display 'You've logged out'

// GET /secure/welcome	Should display 'Secure page!' if the user is logged in, otherwise return a 401

// GET /secure/dog	Should display a dog photo if the user is logged in, otherwise return a 401

module.exports = router;
