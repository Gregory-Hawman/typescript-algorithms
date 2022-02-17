"use strict";
// [x] - Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE
function multiplesOfSix(end) {
    let i = 0;
    while (i < end + 1) {
        if (i % 6 === 0) {
            console.log(i);
        }
    }
}
multiplesOfSix(60000);
