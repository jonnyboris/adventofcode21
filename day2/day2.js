import fs from 'fs';

const input = fs.readFileSync("./day2input", { encoding: "utf8"}).split("\n").map(v => v.split(' '));

let pos = 0;
let depth = 0;

const commands = {
    "forward": (v) => pos += v,
    "down": (v) => depth += v,
    "up": (v) => depth -= v,
}

input.forEach(([command, value]) => commands[command](parseInt(value)));


console.log(pos, depth, pos * depth);