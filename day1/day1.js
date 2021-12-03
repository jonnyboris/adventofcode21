import fs from 'fs';

const ans = fs.readFileSync("./day1Input", {encoding: 'utf8'}).split('\n').filter((v, i, a) => parseInt(v) > parseInt(a[i-1])).length;
console.log(ans)



console.log("\n\n\n")



const input = fs.readFileSync("./day1Input", {encoding: 'utf8'}).split('\n').map(v => parseInt(v));
const windowSize = 3;
const getWindowSum = i => input.slice(i, i + windowSize).reduce((total, val)  => total + val);
let increases = 0;

for (let i = 0; i<input.length-windowSize; i+=1) {
    const window = getWindowSum(i+1);
    const prevWindow = getWindowSum(i);
    increases += window > prevWindow;
}

console.log(increases)

