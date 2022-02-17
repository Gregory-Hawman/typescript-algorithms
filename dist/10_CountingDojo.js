"use strict";
// [x] - Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10,
// also print " Dojo".
function counting(start, end) {
    for (let i = start; i < end; i++) {
        if (i % 10 === 0) {
            console.log('Dojo');
        }
        if (i % 5 === 0) {
            console.log('Coding');
        }
        console.log(i);
    }
}
counting(1, 100);
