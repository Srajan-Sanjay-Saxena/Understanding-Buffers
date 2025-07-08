console.log(Buffer.poolSize); // 8192 by default

//* Since the size of both buffers instantiated below is less than the pool size that means they are going to share same slab , and that b1.buffer is that slab same for b2.buffer.

const b1 = Buffer.allocUnsafe(100);
const b2 = Buffer.allocUnsafe(100);

console.log(b1.buffer === b2.buffer); // true → same underlying pool memory