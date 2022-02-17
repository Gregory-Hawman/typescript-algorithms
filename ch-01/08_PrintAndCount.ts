// [x] - Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how
// many there were.

function printAndCount(start: number, end: number): void {
    let count: number = 0;
    for (let i: number = start; i < end; i++){
        if (i % 5 === 0){
            console.log(i);
            count++;
        }
    }
    console.log(count);
}

printAndCount(512, 4096);