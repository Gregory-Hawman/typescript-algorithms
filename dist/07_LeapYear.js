"use strict";
// [x] - Leap Year
// Write a function that determines whether a given year is a leap year. If a
// year is divisible by four, it is a leap year, unless it is divisible by 100.
// However, if it is divisible by 400, then it is.
function leapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}
console.log(leapYear(1998));
