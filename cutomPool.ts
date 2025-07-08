Buffer.poolSize = 1024; // Set custom pool size (not recommended in production)

const buf1 = Buffer.allocUnsafe(100);
const buf2 = Buffer.allocUnsafe(200);

// Both buf1 and buf2 will come from same internal pool