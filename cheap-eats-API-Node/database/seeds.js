const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/cheap_eats_api_test",
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
mongoose.connection.on("error", console.log);

const UserModel = require("./../database/models/user_model");
const EatModel = require("./../database/models/eat_model");
const LocationModel = require("./../database/models/location_model");

(async function clearDB() {
  await UserModel.deleteMany({});
  await EatModel.deleteMany({});
  await LocationModel.deleteMany({});
})();

// USER SEEDS

let userPromises = [];

for (let i = 0; i <= 4; i++) {
  userPromises.push(
    UserModel.create({
      email: `user${i}@mail.com`,
      password: "password",
      userName: `user${i}`,
      eats: [
        {
          eatId: 1,
          eatName: "Pizza",
          locationId: 1,
          locationName: "Pizza 1",
          timestamps: [1545022425149, 1545022445149, 1545022455149]
        },
        {
          eatId: 1,
          eatName: "Pizza",
          locationId: 2,
          locationName: "Pizza 2",
          timestamps: [1545022425149, 1545022445149, 1545022455149]
        }
      ]
    })
  );
}

// LOCATION SEEDS

let locationPromises = [];

for (let i = 0; i <= 4; i++) {
  locationPromises.push(
    LocationModel.create({
      locationName: `locationName${i}`,
      city: `city${i}`,
      state: "NSW",
      country: "Australia",
      eatsID: []
    })
  );
}

// EAT SEEDS

let eatPromises = [];

eatPromises.push(
  EatModel.create({
    eatName: "Pizza",
    cuisine: "Italian",
    locations: [
      {
        locationId: 0,
        locationName: "Pizza 0",
        city: "Sydney",
        price: 300
      },
      {
        locationId: 0,
        locationName: "Pizza 1",
        city: "Sydney",
        price: 350
      },
      {
        locationId: 0,
        locationName: "Pizza 2",
        city: "Sydney",
        price: 400
      }
    ]
  })
);

eatPromises.push(
  EatModel.create({
    eatName: "Tacos",
    cuisine: "Mexican",
    locations: [
      {
        locationId: 0,
        locationName: "Tacos 0",
        city: "Sydney",
        price: 300
      },
      {
        locationId: 0,
        locationName: "Tacos 1",
        city: "Sydney",
        price: 350
      },
      {
        locationId: 0,
        locationName: "Tacos 2",
        city: "Sydney",
        price: 400
      }
    ]
  })
);

const allPromises = userPromises.concat(locationPromises).concat(eatPromises);

Promise.all(allPromises)
  .then(() => {
    console.log("All seeds completed");
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
    mongoose.connection.close();
  });
