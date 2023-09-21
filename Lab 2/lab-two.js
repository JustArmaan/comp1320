// Function To find day of the week
function getDayOfTheWeek(year, month, day) {
  // Code of months
  const monthCode = {
    January: 1,
    February: 4,
    March: 4,
    April: 0,
    May: 2,
    June: 5,
    July: 0,
    August: 3,
    September: 6,
    October: 1,
    November: 4,
    December: 6,
  };
  // Code of Week
  const weekCode = {
    0: "Saturday",
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
  };
  // Number corresponding to Months
  const monthNum = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };
  // Look at last 2 digits, then determine how many 12s fit
  const lastTwoMod = Math.floor((year % 100) / 12);
  // Finding remainder of last 2 digits
  const divisionRemainder = (year % 100) % 12;
  // Finding how many 4's fit into divisionRemainder
  const foursOfFit = Math.floor(divisionRemainder / 4);
  // Adding day of month to foursOfFit variable
  const addDate = day + foursOfFit;
  // Declaring variable using monthCode
  const monthCodeValue = monthCode[month];
  // Declaring variable using monthNum
  const monthNumValue = monthNum[month];

  // Running code if leap year, or years ending with(16,17,18,20,21)
  const offset = specialOffset(month, year);
  // Calculation to find day of the week code
  const dayOfTheWeekCode =
    (lastTwoMod + divisionRemainder + addDate + monthCodeValue + offset) % 7;
  console.log(
    `${monthNum[month]}-${day}-${year} is a ${weekCode[dayOfTheWeekCode]}`
  );
}

function specialOffset(month, year) {
  let offset = 0;
  let divideBy100 = Math.floor(year / 100);
  if ((month === "January" || month === "February") && isLeapYear(year)) {
    offset = -1;
  }
  if (divideBy100 === 16 || divideBy100 === 20) {
    offset += 6;
  } else if (divideBy100 === 17 || divideBy100 === 21) {
    offset += 4;
  } else if (divideBy100 === 18) {
    offset += 2;
  }
  return offset;
}

// Function determines if leap year
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0;
}

// Function that prints date and day of the week of 2023
function makeCalendar(year) {
  const numberOfDays = {
    "January": 31,
    "February": 28,
    "March": 31,
    "April": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31,
  }
  // To get month names in array form, from numberOfDays
  const months = Object.keys(numberOfDays);
  for (let i = 0; i < 12; i++) {
    for (let j = 1; j <= numberOfDays[months[i]]; j++) {
        getDayOfTheWeek(year, months[i], j);
        
    }
  }
}


// Export the function
module.exports = { getDayOfTheWeek, specialOffset, isLeapYear, makeCalendar };