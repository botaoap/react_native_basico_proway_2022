/*function sum(n1, n2) {
    var result = n1 + n2
    // show(result)
    show2(result)
}
*/

function sum(n1, n2, callBack) {
    result = n1 + n2
    callBack(result)
}

function show(result) {
    console.log(result)
}

function show2(result) {
    console.log(`O resultado é ${result}`)
}

//sum(10, 20)

sum(10, 30, show)
sum(10, 30, show2)