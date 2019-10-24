const arr = [1, 2, 3]

for (const iterator of arr) {
    console.log("=== iterator: ", iterator)
}


for (const key in arr) {
    if (arr.hasOwnProperty(key)) {
        const element = arr[key];
        console.log(element)
    }
}