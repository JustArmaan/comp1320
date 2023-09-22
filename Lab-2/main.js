const getDayOfTheWeek = require("./lab-two").getDayOfTheWeek;
const specialOffset = require("./lab-two").specialOffset;
const isLeapYear = require("./lab-two").isLeapYear;
const makeCalendar = require("./lab-two").makeCalendar;
const readline = require("readline-sync");
//Invokes then,logs all days of the week for 2022
makeCalendar(2022);

getDayOfTheWeek(1619, "January", 1);
getDayOfTheWeek(1704, "February", 1);
getDayOfTheWeek(2004, "August", 16);

function getDayOfTheWeekForUserDate() {
  const year = Number(readline.question("Enter a Year:"));
  const month = readline.question("Enter a Month:");
  const day = Number(readline.question("Enter a date:"));
  return getDayOfTheWeek(year, month, day);
}

getDayOfTheWeekForUserDate();
