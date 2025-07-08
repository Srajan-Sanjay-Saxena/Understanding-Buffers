import { Buffer } from "buffer";

//* either specify the character encoding or not , it will automatically be inferred , but if we want something very specific then it need to specified
const buffer=  Buffer.from("hello" , 'utf-8');
const buffer2 = Buffer.from("hello my name is srajan" , "utf-8");

console.log("Buffer1 stuff.........")
console.log(buffer);
console.log(buffer.toString('utf-8'));


console.log("buffer2 stuff..........")
console.log(buffer2);
console.log(buffer2.subarray(0,3).toString());
