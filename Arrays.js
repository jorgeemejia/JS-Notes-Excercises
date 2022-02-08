//Arrays


const array = [1, 2, 10, 16];
const double = [];

const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log(newArray);

//map - transforms the array

const mapArray = array.map((num) => {
    return num * 2;
})

const mapArray = array.map(num => num * 2);

//filter - filters the array

const filterArray = array.filter(num => {
    return num > 5
})

//reduce 

const reduceArray = array.reduce((acumulator, num) => {
    return accumulator + num;
}, 0);