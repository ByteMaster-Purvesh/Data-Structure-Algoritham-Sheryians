function sumEvenOddInRange(a, b) {
    // Write your logic here
    let evenSum = 0
    let oddSum = 0
    for(let i = a; i <= b; i++) {
        if( i % 2 == 0){
            evenSum = evenSum + i
        } else {
            oddSum = oddSum + i
        }
    }
    return {evenSum, oddSum}
}

console.log(sumEvenOddInRange(1,5))