const myArray: number[] = [1, 2, 3, 4, 5];

myArray.push(6);
// myArray.push('7'); // This would cause a type error
const myArray2 = [...myArray];
myArray2.push(7);

console.log(myArray, myArray2); // Output: [1, 2, 3, 4, 5, 6] [1, 2, 3, 4, 5, 6, 7]