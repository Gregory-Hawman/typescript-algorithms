// [] - Countdown
// Create a function that accepts a number as an input. Return a new array that
// counts down by one, from the number (as array’s ‘zeroth’ element) down to
// 0 (as the last element). How long is this array?

function countdownArray(input: number) {
    let arr: number[] = []
    for (let i = input; i > 0; i--){
        arr.push(i);
    }

    return arr
}