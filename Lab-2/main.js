const getDayOfTheWeek = require("./lab-two").getDayOfTheWeek;
const specialOffset = require("./lab-two").specialOffset;
const isLeapYear = require("./lab-two").isLeapYear;
const makeCalendar = require("./lab-two").makeCalendar;
const readline = require("readline-sync");

getDayOfTheWeek(1619, "January", 1);
getDayOfTheWeek(1704, "February", 1);
getDayOfTheWeek(2004, "August", 16);

const year = readline.question("Enter a Year: ");
const month = readline.question("Enter a Month: ");
const day = readline.question("Enter a date: ");

getDayOfTheWeek(year, month, day);

makeCalendar(2022);

