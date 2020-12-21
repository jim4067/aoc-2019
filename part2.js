const { createReadStream } = require('fs');

let data = '';

const read_stream = createReadStream('input.txt', 'utf8');

read_stream.on('data', (chunk) => {
    data += chunk;
}).on("end", () => {
    const arr = data.split('\n');

    console.log(fuel_sum(arr));
}).on('error', (err) => {
    console.error("aaaw shit. here we go again", err.message);
});

let fuel_sum = (arr) => {
    let arr_len = arr.length;
    let counter = 0;

    for (let index = 0; index < arr_len; index++) {
        let adder = arr[index];
        let temp = 0;

        while (adder > 0) {
            temp = fuel(adder);
            //prevent it from going below zero
            if (temp < 0) {
                break;
            }
            counter += temp;
            adder = temp;
        }
    }

    return counter;
}

function fuel(mass) {
    let result = 0;

    result = (Math.floor(mass / 3)) - 2;

    return result;
}
