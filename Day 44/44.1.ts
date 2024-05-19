// In another file where you want to use the add function:
import { add } from "./mathFunction";

console.log(add(2, 3)); // Outputs: 5
// Demonstrates importing the add function from mathFunctions.ts and using it.


// In file: mathFunctions.ts
export const add = (a: number, b: number): number => a + b;
// This line exports an add function from mathFunctions.ts