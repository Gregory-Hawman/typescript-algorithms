// [x} - Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

function printWhile(start: number, end: number): void {
    let i: number = start
    while (i < end + 1) {
        console.log(i)
        i++
    }
}

printWhile(2000, 5280)