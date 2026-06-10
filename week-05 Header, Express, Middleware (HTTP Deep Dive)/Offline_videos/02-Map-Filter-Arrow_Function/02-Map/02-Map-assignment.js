function customMap(arr, transform) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(transform(arr[i]));
    }

    return result;
}

function double(num) {
    return num * 2;
}

let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = customMap(numbers, double);

console.log(doubledNumbers);