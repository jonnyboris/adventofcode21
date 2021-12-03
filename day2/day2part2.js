import fs from 'fs';

const input = fs.readFileSync("./day2input", { encoding: "utf8"}).split("\n").map(v => v.split(' '));

let pos = 0;
let depth = 0;
let aim = 0;

const commands = {
    "forward": (v) => {
        pos += v; 
        depth += v * aim;
    },
    "down": (v) => aim += v,
    "up": (v) => aim -= v,
}

input.forEach(([command, value]) => commands[command](parseInt(value)));


console.log(pos, depth, pos * depth);