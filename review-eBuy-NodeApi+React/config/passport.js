const passport = require("passport");
const UserModel = require("./../database/models/user_model");

passport.use(UserModel.createStrategy());

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

module.exports = passport;
