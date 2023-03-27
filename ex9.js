function recurrentIntegers(arr) {
    let result = [];

    arr.sort();
    for (let i = 0; i < arr.length; i++)
        if (i + 1 !== arr.length)
            if (arr[i] === arr[i + 1] && result.indexOf(arr[i]) === -1)
                result.push(arr[i]);
    return result;
}

console.log(recurrentIntegers([1, 2, 3, 2, 4, 5, 3]));