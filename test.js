// let mass = 1969;
// let mass = 100756;
let mass = 143890;
let counter = 0;

function fuel(mass) {
    let result = 0;

    result = (Math.floor(mass / 3)) - 2;

    return result;
}

// counter += fuel(mass);
// console.log(counter)


//the adder is eq to the first fuel calc and after that 
//i keep swapping the adder var with the new fuel cal till its 
//empty

let adder = mass;
let temp = 0;

while (adder > 0) {
    temp = fuel(adder);
    if (temp < 0) {
        break;
    }
    counter += temp;
    adder = temp;

    console.log("the adder is ", adder);
}

console.log("the counter is ", counter);