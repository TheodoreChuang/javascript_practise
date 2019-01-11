const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const UserModel = require("./../database/models/user_model");

passport.use(UserModel.createStrategy());

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
    },
    async (jwtPayload, done) => {
      // console.log(jwtPayload);
      try {
        const user = await UserModel.findById(jwtPayload.sub);

        if (!user) {
          return done("User not found");
        }

        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

module.exports = passport;
