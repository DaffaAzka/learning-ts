// const USER: (string | number)[] = ["dest", 1];
const USER: [string, number, boolean] = ["dest", 1, true]; // Tuples for spesific structure
// USER[0] = 1; // Error: Type 'number' is not assignable to type 'string'.

let rgb: [number, number, number] = [255, 0, 0]; // it's only to 3 numbers

USER[1] = 2; // This is allowed, as the second element is a number

export {}