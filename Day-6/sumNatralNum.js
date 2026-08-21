function sumUpToN(n) {
    // Write your logic here
    let amount = 0
    for (let i = 0; i <= n; i++) {
        amount = amount + i
    }
    return amount
}

console.log(sumUpToN(5))