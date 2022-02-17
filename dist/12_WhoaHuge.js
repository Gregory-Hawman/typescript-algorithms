"use strict";
// [x] - Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum.
// Is there a shortcut?
function whoaHuge(start, end) {
    let sum = 0;
    for (let i = start; i < end; i++) {
        if (i % 2 !== 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}
whoaHuge(-300000, 300000);
