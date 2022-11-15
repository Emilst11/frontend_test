function shoeType(arr) {
    let count = 0;
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        arr[i] == arr[i + 1] && count++
        i++
    }
    return count;
}
  
const arr = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
console.log(shoeType(arr))