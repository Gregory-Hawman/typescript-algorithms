// [x] - Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult,
// print multiples of mult from highNum down to lowNum, using a FOR.
// For (2,9,3), print 9 6 3 (on successive lines).

function flexiCountdown(lowNum: number, highNum: number, mult:number): void {
    for (let i = highNum; i > lowNum; i--) {
        if (i % mult === 0){
            console.log(i)
        }
    }
}

flexiCountdown(2, 9 , 3);