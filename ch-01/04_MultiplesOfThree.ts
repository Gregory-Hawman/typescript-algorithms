// [x] - Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

function multiplesOfThree(start: number, end: number) {
    for (let i:number = start; i < end; i++) {
        if (i === -3 || i === -6) {
            continue;
        }
        if ( i % 3 === 0){
            console.log(i)
        }
    }
}

multiplesOfThree(-300, 0)