import { Buffer } from 'buffer';

//* Buffers are used for binary memory allocation.

//* Buffer alloc , automatically fills all the allocated memory with 0
const memory = Buffer.alloc(10);
console.log(memory);