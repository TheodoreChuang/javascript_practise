const { Schema } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  eats: [
    {
      eatId: {
        type: Schema.Types.ObjectId,
        ref: "Eat",
        required: true
      },
      eatName: {
        type: String,
        ref: "Eat",
        required: true
      },
      locationId: {
        type: Schema.Types.ObjectId,
        ref: "Location",
        required: true
      },
      locationName: {
        type: String,
        ref: "Location",
        required: true
      },
      timestamps: [{ type: Date, default: Date.now, required: true }]
    }
  ]
});

UserSchema.plugin(require("mongoose-bcrypt"));

module.exports = UserSchema;
