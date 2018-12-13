const UserModel = require("./../database/models/user_model");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const { Strategy: FacebookStrategy } = require("passport-facebook");

// ***** Local Strategy: cookies

// runs on log in
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// ?constantly checks if there is a session?
passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

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

        return done(null, user); // then runs passport.serializeUser(),  creates req.user
      } catch (error) {
        done(error);
      }
    }
  )
);

// ***** JWT Strategy

passport.use(
  new JwtStrategy(
    {
      // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      jwtFromRequest: req => {
        if (req && req.cookies) {
          return req.cookies["jwt"];
        }

        return null;
      },
      secretOrKey: process.env.JWT_SECRET
    },
    async (jwtPayload, done) => {
      try {
        const user = await UserModel.findById(jwtPayload.sub);

        if (!user) {
          return done(null, false);
        }

        return done(null, user); // then runs passport.serializeUser()
      } catch (error) {
        done(error);
      }
    }
  )
);

// ***** OAuth Strategy: with Google+ API

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CLIENT_REDIRECT
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      if (profile.emails && profile.emails.length > 0) {
        try {
          const user = await UserModel.findOne({
            email: profile.emails[0].value
          });

          if (!user) {
            return done(null, false);
          }

          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    }
  )
);

// ***** OAuth Strategy: with Facebook

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: process.env.FACEBOOK_CLIENT_REDIRECT,
      profileFields: ["email"]
    },
    async (accessToken, refreshToken, profile, cb) => {
      console.log(profile.emails[0].value);
      if (profile.emails && profile.emails.length > 0) {
        try {
          const user = await UserModel.findOne({
            email: profile.emails[0].value
          });

          if (!user) {
            return cb(null, false);
          }

          return cb(null, user);
        } catch (error) {
          return cb(error);
        }
      }
    }
  )
);
