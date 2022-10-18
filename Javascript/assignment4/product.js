
function prod() {
    let arr = [3, 4, 5, 6, 7, 8]
    let n = []

    // if (arr.length == 1) {
    //     return arr;
    // }
    // else if (arr.length == 2) {
    //     return n = (arr[0] * arr[1])
    // }
    // else {

    for (i = 1; i < arr.length - 1; i++) {
        n.push(arr[i] * arr[i + 1])
    }
    n.push(arr[arr.length - 1] * arr[0])
    n.push(arr[0] * arr[1])

    return n;
}
// }

console.log(prod());