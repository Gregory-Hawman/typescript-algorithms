"use strict";
// [x] - Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0),
// without a FOR loop.
function countdown(start) {
    let i = start;
    while (i > 1) {
        console.log(i);
        i - 4;
    }
}
countdown(2016);
