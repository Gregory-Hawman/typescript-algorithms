"use strict";
// [x] - You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log
// "How did you know?", else log "Just another day...."
function birthday(month, day) {
    if (month === 11 && day === 1) {
        console.log('How did you know?');
    }
    else {
        console.log('Just another day...');
    }
    ;
}
;
birthday(11, 1);
birthday(10, 10);
