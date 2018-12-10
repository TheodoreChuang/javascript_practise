"use strict";

// **************** 2018-12-10 ****************

// Print 12 Days of Christmas to terminal.
const days = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth"
];

const gifts = [
  "And a partridge in a pear tree.\n",
  "Two turtle doves",
  "Three French hens",
  "Four calling birds",
  "Five golden rings",
  "Six geese a-laying",
  "Seven swans a-swimming",
  "Eight maids a-milking",
  "Nine ladies dancing",
  "Ten lords a-leaping",
  "Eleven pipers piping",
  "Twelve drummers drumming"
];

function playDay(daysIndex) {
  if (daysIndex === 0) {
    console.log(`On the first day of Christmas
my true love sent to me:
A partridge in a pear tree.\n`);
  } else {
    console.log(`On the ${days[daysIndex]} day of Christmas
my true love sent to me:`);
    for (let i = daysIndex; i > -1; i--) {
      console.log(gifts[i]);
    }
  }
}

// playDay(0);
// playDay(1);
// playDay(4);

function playSong() {
  for (let i = 0; i < days.length; i++) {
    playDay(i);
  }
}

// playSong();

//x Create a Runner class that has the properties, name, distance and place
// Create a method that adds distance to an instance of runner and modifies their place and the other runners places
// Create a method on the Runner class that shows the names of the runners in order from first place to last

class Runner {
  constructor(name, distance, place) {
    (this.name = name), (this.distance = distance), (this.place = place);
  }
  addDistance(distance) {
    this.distance += distance;
  }
}

const bolt = new Runner("bolt", 100, 1);
const charger = new Runner("charger", 99, 2);
const dash = new Runner("dash", 97, 3);
const enlight = new Runner("enlight", 95, 4);

// console.log(bolt);
// bolt.addDistance(10);
// console.log(bolt);

// console.log(Runner);  all?
