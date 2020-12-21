const { createReadStream } = require('fs');

let data = '';

const read_stream = createReadStream('input.txt', 'utf8');

read_stream.on('data', (chunk) => {
    data += chunk;
}).on("end", () => {
    const arr = data.split('\n');

    // console.log(arr);//the correct password
    console.log(fuel_sum(arr));
}).on('error', (err) => {
    console.error("aaaw shit. here we go again", err.message);
});

let fuel_sum = (arr) => {
    let arr_len = arr.length;
    let counter = 0;

    for (let index = 0; index < arr_len; index++) {
        counter += fuel(arr[index]);
    }

    return counter;

}

function fuel(mass) {
    let result = 0;

    result = (Math.floor(mass / 3)) - 2;

    return result;
}
