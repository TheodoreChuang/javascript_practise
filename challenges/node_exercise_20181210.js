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
  console.log(`On the ${days[daysIndex]} day of Christmas
my true love sent to me:`);
  for (let i = daysIndex; i > -1; i--) {
    console.log(gifts[i]);
  }
}
// playDay(0);
// playDay(1);
// playDay(4);

function playSong() {
  console.log(`On the first day of Christmas
my true love sent to me:
A partridge in a pear tree.\n`);
  for (let i = 1; i < days.length; i++) {
    playDay(i);
  }
}
// playSong();
