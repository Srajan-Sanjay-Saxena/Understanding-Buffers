import { Buffer } from "buffer";

const bufferData = Buffer.from("hello my name is srajan saxena" , 'utf-8');
const bufferSize = bufferData.length;

//* Note that buffer.subarray returns buffer , so in order to convert the chunk data into utf-8 we need buffer not number , if we use for(const chunk of bufferData) then it will return number

console.log(bufferData);
for (let i = 0 ; i<bufferSize ; i++){
    console.log("this will print the string of chunk which is number: " ,bufferData[i].toString());
    console.log("this will actually convert the buffer into utf-8 format: ",bufferData.subarray(i,i+1).toString());
}
