const passport = require("passport");
const LocalStrategy = require("passport-local");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

const UserModel = require("./../database/models/user_model");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.findOne({ email });

        if (!user || !user.verifyPasswordSync(password)) {
          return done(null, false);
        }

        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
    },
    async (jwtPayload, done) => {
      console.log(jwtPayload);
      try {
        const user = await UserModel.findById(jwtPayload.sub);

        if (!user) {
          return done(null, false);
        }

        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);
