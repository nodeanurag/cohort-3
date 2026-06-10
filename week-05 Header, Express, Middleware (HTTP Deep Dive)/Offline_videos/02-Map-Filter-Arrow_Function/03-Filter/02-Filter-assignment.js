function customFilter(arr, filterFn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (filterFn(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

function isEven(num) {
    return num % 2 === 0;
}

let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = customFilter(numbers, isEven);

console.log(evenNumbers);