// rules of typescript
// declare something by name, then a colon, then a type

// how do wwe say that something is an array in typescript?
// a bunch of different ways, but commonlu we'll either do
// number[] ---> an array whose elements are all of type number
// Array<number> ---> an array whose elements are all of type number

// [number, number] ---> a 'tuple' (we can call it an array for now) with exactly two values, each of which is a type of number

function printAndReturn(arr: [number, number]): number {
    console.log(arr[0])
    return arr[1]
}

const returnValue = printAndReturn([1, 2])
const returnValue2 = printAndReturn([returnValue, returnValue])