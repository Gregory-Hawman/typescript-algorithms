// [] - Leap Year
// Write a function that determines whether a given year is a leap year. If a
// year is divisible by four, it is a leap year, unless it is divisible by 100.
// However, if it is divisible by 400, then it is.

function leapYear(year: number): true | false {
    if ( year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    } else {
        return false
    }
}

console.log(leapYear(1998))